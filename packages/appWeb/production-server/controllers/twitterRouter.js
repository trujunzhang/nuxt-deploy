"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
const queryString = __importStar(require("query-string"));
const passport_1 = __importDefault(require("passport")); // without '* as'
const jwt = __importStar(require("jsonwebtoken"));
const express_jwt_1 = __importDefault(require("express-jwt"));
const cors_1 = __importDefault(require("cors"));
const request = __importStar(require("request"));
const types_1 = require("@app/types");
const config_1 = require("../config");
// enable cors
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
// token handling middleware
const authenticate = express_jwt_1.default({
    secret: 'my-secret',
    requestProperty: 'auth',
    getToken: (req) => {
        if (req.headers['x-auth-token']) {
            return req.headers['x-auth-token'];
        }
        return null;
    }
});
class TwitterRouterUtils {
    static createToken(auth) {
        return jwt.sign({
            id: auth.id
        }, 'my-secret', {
            expiresIn: 60 * 120
        });
    }
    static generateToken(req, res, next) {
        req.token = TwitterRouterUtils.createToken(req.auth);
        return next();
    }
    static sendToken(req, res) {
        // console.log('sendToken:', req.body);
        res.setHeader('x-auth-token', req.token);
        return res.status(200).send(JSON.stringify(Object.assign(Object.assign({}, req.user), req.body)));
    }
    static getCurrentUser(req, res, next) {
        const userId = req.auth.id;
        next();
    }
    static getOne(req, res) {
        const user = req.user.toObject();
        // tslint:disable-next-line:no-string-literal
        delete user['twitterProvider'];
        // tslint:disable-next-line:no-string-literal
        delete user['__v'];
        res.json(user);
    }
}
// ====================================
// TWITTER ROUTES ======================
// =====================================
class TwitterRouter {
    constructor() {
        // setup configuration for facebook login
        config_1.passportConfig();
        // step1: Firstly,create router for twitter
        this.twitterRouter = Express.Router();
        // step2: Then generate some routes as twitter api
        this.generateRouter();
    }
    generateRouter() {
        const option = {
            oauth_callback: 'http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback',
            consumer_key: types_1.twitterConfig.consumerKey,
            consumer_secret: types_1.twitterConfig.consumerSecret
        };
        this.twitterRouter.route('/auth/twitter/reverse').post((req, res) => {
            request.post({
                url: 'https://api.twitter.com/oauth/request_token',
                oauth: option
            }, (err, r, body) => {
                if (err) {
                    return res.send(500, {
                        message: err.message
                    });
                }
                const jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
                res.send(JSON.parse(jsonStr));
            });
        });
        this.twitterRouter.route('/auth/twitter').post((req, res, next) => {
            request.post({
                url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
                oauth: {
                    consumer_key: types_1.twitterConfig.consumerKey,
                    consumer_secret: types_1.twitterConfig.consumerSecret,
                    token: req.query.oauth_token
                },
                form: {
                    oauth_verifier: req.query.oauth_verifier
                }
            }, (err, r, body) => {
                if (err) {
                    return res.status(500).send(err.message);
                    // return res.send(500, {
                    //     message: err.message
                    // })
                }
                // console.log('body:', body);
                const parsedBody = queryString.parse(body);
                // const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
                // const parsedBody = JSON.parse(bodyString);
                // console.log('parsedBody', parsedBody);
                const oauthToken = parsedBody.oauth_token;
                // console.log('get oauthToken', oauthToken);
                // console.log('req', req);
                // console.log('req body', req.body);
                // tslint:disable-next-line:no-string-literal
                req.body['oauth_token'] = parsedBody.oauth_token;
                // tslint:disable-next-line:no-string-literal
                req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
                // tslint:disable-next-line:no-string-literal
                req.body['user_id'] = parsedBody.user_id;
                next();
            });
        }, passport_1.default.authenticate('twitter-token', {
            session: false
        }), (req, res, next) => {
            if (!req.user) {
                return res.status(401).send('User Not Authenticated');
                // return res.send(401, 'User Not Authenticated')
            }
            // prepare token for API
            req.auth = {
                id: (req.user).id
            };
            return next();
        }, TwitterRouterUtils.generateToken, TwitterRouterUtils.sendToken);
    }
    setup(server) {
        server.use(cors_1.default(corsOption));
        // rest API requirements
        server.use(bodyParser.urlencoded({
            extended: true
        }));
        server.use(bodyParser.json());
        this.twitterRouter
            .route('/auth/me')
            .get(authenticate, TwitterRouterUtils.getCurrentUser, TwitterRouterUtils.getOne);
        server.use('/auth/v1', this.twitterRouter);
    }
}
exports.TwitterRouter = TwitterRouter;
