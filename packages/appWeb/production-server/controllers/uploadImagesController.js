"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const tools_1 = require("@app/tools");
const serverHelper = new tools_1.ServerHelper(__dirname);
const multerCacheFolder = serverHelper.getUploadFilesPath(path_1.default);
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, multerCacheFolder);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer_1.default({ storage: storage });
class UploadImagesController {
    constructor() {
        // mkdirp(multerCacheFolder, (err) => {
        //   // path exists unless there was an error
        //   console.log('upload image: error, ', err)
        // })
    }
    setup(server) {
        // Next.js server
        server.post('/upload/', upload.single('photo'), async (req, res, next) => {
            const file = req.file;
            const body = req.body;
            const cloudinaryImageType = body.cloudinaryImageType;
            console.log('Received body: ', body);
            let data = {
                cloudinaryMeta: null,
                success: false
            };
            if (!req.file) {
                console.log('No file received');
            }
            else {
                // const cloudinaryMeta = await ParseObjects.ParseCloud.run('invokeCloudinary', {
                //   imageLocalPath: file.path,
                //   cloudinaryImageType
                // })
                // console.log('cloudinaryMeta received, ', cloudinaryMeta)
                data = {
                    // cloudinaryMeta,
                    success: true
                };
            }
            return res.send(data);
        });
    }
}
exports.UploadImagesController = UploadImagesController;
