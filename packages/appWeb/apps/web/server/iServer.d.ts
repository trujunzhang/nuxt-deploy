export declare interface ITwitterAuthRequest extends Express.Request {
  user?: any
  auth: ITwitterAuth
}

// ===========================================================
// ===========================================================
//  *** Express multer ***
// ===========================================================
// ===========================================================
declare interface IExpressMulterFile {
  destination: string
  encoding: string
  fieldname: string
  filename: string
  mimetype: string
  originalname: string
  path: string
  size: number
}

// ===========================================================
// ===========================================================
//  *** upload image callback ***
// ===========================================================
// ===========================================================

export declare interface IExpressUploadImageCallbackData {
  cloudinaryMeta?: any
  success: boolean
}

export declare type ExpressUploadImageCallbackDataWithNull = IExpressUploadImageCallbackData | null
