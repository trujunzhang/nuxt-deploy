import axios from 'axios'

import { AppConstants } from '@app/types'

export class UploadFileHelper {
  static getFormDataForWebbroswer(file: File) {
    const formData = new FormData()
    formData.append('photo', file)
    formData.append('originalFileName', file.name)
    formData.append('imageType', file.type)

    return formData
  }

  static getFormDataForClientApp(resultObject: IExpoImagePickerResult) {
    const uri = resultObject.uri

    const uriParts = uri.split('.')
    const fileType = uriParts[uriParts.length - 1]

    const formData = new FormData()
    const photoValue: any = {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`
    }
    formData.append('photo', photoValue)

    formData.append('originalFileName', 'mobileFile')
    formData.append('imageType', `image/${fileType}`)

    return formData
  }

  static async getUploadImageUrl(
    localUploadFile: LocalUploadFileWithNull,
    cloudinaryImageType: string = ''
  ) {
    if (!localUploadFile) {
      return null
    }

    const formData = localUploadFile.formData

    const apiUrl = `${AppConstants.ieattaWeb}/upload`
    formData.append('cloudinaryImageType', cloudinaryImageType)
    const res = await axios.post(apiUrl, formData)
    const data: IExpressUploadImageCallbackData = res.data
    if (data.success) {
      return data.cloudinaryMeta
    }
    return null
  }
}
