import * as Express from 'express'
import multer from 'multer'
import Path from 'path'
import mkdirp from 'mkdirp' // without '* as'

// import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'

import { IExpressMulterFile, IExpressUploadImageCallbackData } from '../iServer'

import { IServerHelper, ServerHelper } from '@app/tools'
const serverHelper: IServerHelper = new ServerHelper(__dirname)
const multerCacheFolder = serverHelper.getUploadFilesPath(Path)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, multerCacheFolder)
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

export class UploadImagesController {
  constructor() {
    // mkdirp(multerCacheFolder, (err) => {
    //   // path exists unless there was an error
    //   console.log('upload image: error, ', err)
    // })
  }
  setup(server: Express.Application) {
    // Next.js server

    server.post(
      '/upload/',
      upload.single('photo'),
      async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        const file: IExpressMulterFile = req.file
        const body = req.body
        const cloudinaryImageType = body.cloudinaryImageType

        console.log('Received body: ', body)

        let data: IExpressUploadImageCallbackData = {
          cloudinaryMeta: null,
          success: false
        }
        if (!req.file) {
          console.log('No file received')
        } else {
          // const cloudinaryMeta = await ParseObjects.ParseCloud.run('invokeCloudinary', {
          //   imageLocalPath: file.path,
          //   cloudinaryImageType
          // })
          // console.log('cloudinaryMeta received, ', cloudinaryMeta)

          data = {
            // cloudinaryMeta,
            success: true
          }
        }

        return res.send(data)
      }
    )
  }
}
