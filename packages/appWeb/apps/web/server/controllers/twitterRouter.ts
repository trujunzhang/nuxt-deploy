import * as Express from 'express'
import * as bodyParser from 'body-parser'

import * as queryString from 'query-string'
import passport from 'passport' // without '* as'

import * as jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import cors from 'cors'
import * as request from 'request'

import { twitterConfig } from '@app/types'
import { passportConfig } from '../config'

import { ITwitterAuthRequest } from '../iServer'

// enable cors
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}

// token handling middleware
const authenticate = expressJwt({
  secret: 'my-secret',
  requestProperty: 'auth',
  getToken: (req) => {
    if (req.headers['x-auth-token']) {
      return req.headers['x-auth-token']
    }
    return null
  }
})

class TwitterRouterUtils {
  static createToken(auth) {
    return jwt.sign(
      {
        id: auth.id
      },
      'my-secret',
      {
        expiresIn: 60 * 120
      }
    )
  }

  static generateToken(req, res, next) {
    req.token = TwitterRouterUtils.createToken(req.auth)
    return next()
  }

  static sendToken(req, res) {
    // console.log('sendToken:', req.body);
    res.setHeader('x-auth-token', req.token)
    return res.status(200).send(
      JSON.stringify({
        ...req.user,
        ...req.body
      })
    )
  }

  static getCurrentUser(req, res, next) {
    const userId = req.auth.id
    next()
  }

  static getOne(req, res) {
    const user = req.user.toObject()
    // tslint:disable-next-line:no-string-literal
    delete user['twitterProvider']
    // tslint:disable-next-line:no-string-literal
    delete user['__v']
    res.json(user)
  }
}

// ====================================
// TWITTER ROUTES ======================
// =====================================
export class TwitterRouter {
  // Twitter
  private twitterRouter: any

  constructor() {
    // setup configuration for facebook login
    passportConfig()

    // step1: Firstly,create router for twitter
    this.twitterRouter = Express.Router()

    // step2: Then generate some routes as twitter api
    this.generateRouter()
  }

  private generateRouter() {
    const option: any = {
      oauth_callback: 'http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback',
      consumer_key: twitterConfig.consumerKey,
      consumer_secret: twitterConfig.consumerSecret
    }

    this.twitterRouter.route('/auth/twitter/reverse').post((req, res) => {
      request.post(
        {
          url: 'https://api.twitter.com/oauth/request_token',
          oauth: option
        },
        (err, r, body) => {
          if (err) {
            return res.send(500, {
              message: err.message
            })
          }
          const jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
          res.send(JSON.parse(jsonStr))
        }
      )
    })
    this.twitterRouter.route('/auth/twitter').post(
      (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        request.post(
          {
            url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
            oauth: {
              consumer_key: twitterConfig.consumerKey,
              consumer_secret: twitterConfig.consumerSecret,
              token: req.query.oauth_token
            },
            form: {
              oauth_verifier: req.query.oauth_verifier
            }
          },
          (err, r, body) => {
            if (err) {
              return res.status(500).send(err.message)
              // return res.send(500, {
              //     message: err.message
              // })
            }
            // console.log('body:', body);
            const parsedBody = queryString.parse(body)
            // const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
            // const parsedBody = JSON.parse(bodyString);
            // console.log('parsedBody', parsedBody);
            const oauthToken = parsedBody.oauth_token
            // console.log('get oauthToken', oauthToken);
            // console.log('req', req);
            // console.log('req body', req.body);
            // tslint:disable-next-line:no-string-literal
            req.body['oauth_token'] = parsedBody.oauth_token
            // tslint:disable-next-line:no-string-literal
            req.body['oauth_token_secret'] = parsedBody.oauth_token_secret
            // tslint:disable-next-line:no-string-literal
            req.body['user_id'] = parsedBody.user_id
            next()
          }
        )
      },
      passport.authenticate('twitter-token', {
        session: false
      }),
      (req: ITwitterAuthRequest, res: Express.Response, next: Express.NextFunction) => {
        if (!req.user) {
          return res.status(401).send('User Not Authenticated')
          // return res.send(401, 'User Not Authenticated')
        }
        // prepare token for API
        req.auth = {
          id: (req.user).id
        }
        return next()
      },
      TwitterRouterUtils.generateToken,
      TwitterRouterUtils.sendToken
    )
  }

  setup(server: Express.Application) {
    server.use(cors(corsOption))

    // rest API requirements
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    )
    server.use(bodyParser.json())

    this.twitterRouter
      .route('/auth/me')
      .get(authenticate, TwitterRouterUtils.getCurrentUser, TwitterRouterUtils.getOne)

    server.use('/auth/v1', this.twitterRouter)
  }
}
