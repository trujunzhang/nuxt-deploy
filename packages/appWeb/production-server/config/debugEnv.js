"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
function setupDebugEnv() {
    /**
     * Load environment variables from .env file, where API keys and passwords are configured.
     */
    if (process.env.NODE_ENV !== 'production') {
        const userHome = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
        const appName = 'parse-ieatta';
        const result = dotenv.config({
            path: `${userHome}/.dotenv/${appName}/.env`
        });
        if (result.error) {
            throw result.error;
        }
        console.log(result.parsed);
    }
}
exports.setupDebugEnv = setupDebugEnv;
