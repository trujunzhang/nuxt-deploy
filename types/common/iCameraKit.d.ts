// ===========================================================
// ===========================================================
//  *** Expo ImagePicker ***
// ===========================================================
// ===========================================================
declare interface IExpoImagePickerResult {
  cancelled: boolean
  type: string
  uri: string
  width: number
  height: number
}

/**
 * Sample result.
 */
// const IExpoImagePickerResult = {
//   cancelled: false,
//   height: 750,
//   type: 'image',
//   uri:
//     'file:///Users/djzhang/Library/Developer/CoreSimulator/Devices/86D23C68-33C1-4842-9593-2909E4579A77/data/Containers/Data/Application/78CC383E-F4C4-4B92-ACCD-798EFCBAB2F2/Library/Caches/ExponentExperienceData/%2540trujunzhang%252FPoliticl/ImagePicker/D8B21156-9908-4CBD-8EA1-B9E8127CC9E9.jpg',
//   width: 1125
// }

// ===========================================================
// ===========================================================
//  *** React native camera kit ***
// ===========================================================
// ===========================================================
declare interface ICameraKitImage {
  id: string
  name: string
  size: number
  uri: string
  width: number
  height: number
}

declare interface ICameraKitEvent {
  type: string
  captureRetakeMode: boolean
  image: ICameraKitImage
  captureImages: ICameraKitImage[]
}

declare type OnTakePhotoAfterHookFunc = (image: ICameraKitImage) => any

declare type SaveTakenPhotoActionFunc = (object: ISaveTakenPhotosParams) => any

declare interface ISaveTakenPhotosParams {
  newPhotoInstance: IRealmModelPhotos
  image: ICameraKitImage
  iOSVersion: boolean
  needUpdateListPhotoId: boolean
}

declare interface ILocalUploadFileOptions {
  method: string
  body: any
  headers: object
}

declare interface ILocalUploadFile {
  formData: FormData
}

declare type LocalUploadFileWithNull = ILocalUploadFile | null

declare interface IWriteParseObjectUploadImageModel extends IParsePhotosNormal {
  localUploadFile: LocalUploadFileWithNull
}

declare interface IDropzoneFile {
  result: any
}
