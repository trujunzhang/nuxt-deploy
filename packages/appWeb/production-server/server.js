"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const path_1 = __importDefault(require("path"));
const controllers_1 = require("./controllers");
const tools_1 = require("@app/tools");
const config_1 = require("./config");
const routes_1 = require("./routes");
// i18next
// ================================
const middleware_1 = __importDefault(require("next-i18next/middleware"));
const i18n_1 = __importDefault(require("./i18n"));
const nextI18next = i18n_1.default;
// async(await) for express.js
// https://github.com/davidbanham/express-async-errors
require('express-async-errors');
config_1.setupDebugEnv();
const envPort = process.env.PORT;
const port = Number(envPort) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({
    dev
});
const handler = routes_1.routes.getRequestHandler(app);
const serverHelper = new tools_1.ServerHelper(__dirname);
app.prepare().then(async () => {
    // create Express.js application
    const server = express_1.default();
    server.use((req, res, next) => {
        res.set({
            // since there is no res.header class in Parse, we use the equivalent to set the response headers
            'Access-Control-Allow-Origin': '*/*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Parse-Session-Token'
        });
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Parse-Session-Token');
        next();
    });
    await nextI18next.initPromise;
    server.use(middleware_1.default(nextI18next));
    server.use(express_1.default.static(serverHelper.getPublicPath(path_1.default), { maxAge: 31557600000 }));
    server.use(express_1.default.static(serverHelper.getStaticPath(path_1.default), { maxAge: 31557600000 }));
    // ====================================
    // TWITTER ROUTES ======================
    // =====================================
    new controllers_1.TwitterRouter().setup(server);
    // ====================================
    // Parse Server  ======================
    // =====================================
    new controllers_1.ParseServerSetup(serverHelper).setup(server);
    // ====================================
    // Upload Images======================
    // ====================================
    new controllers_1.UploadImagesController().setup(server);
    server.get('*', (req, res) => {
        return handler(req, res);
    });
    server.use(handler);
    server.listen(port, () => {
        // if (err) {
        //   throw err
        // }
        console.log(`> Ready on http://localhost:${port}`);
    });
});
