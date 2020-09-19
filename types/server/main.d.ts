// declare interface IServerHelper {
//   getProjectRootPath(): string
//   resolve(path: string): string
//   getCloudPath(): string
//   getPublicPath(): string
//   getStaticPath(): string
// }

declare interface ITwitterAuth {
  id: string
}

// ===========================================================
// ===========================================================
//  *** upload image callback ***
// ===========================================================
// ===========================================================

declare interface IExpressUploadImageCallbackData {
  cloudinaryMeta?: any
  success: boolean
}

declare type ExpressUploadImageCallbackDataWithNull = IExpressUploadImageCallbackData | null
