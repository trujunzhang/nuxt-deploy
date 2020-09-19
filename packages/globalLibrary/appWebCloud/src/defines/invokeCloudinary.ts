const cloudinary = require('cloudinary').v2

import { BaseDefine } from './baseDefine'

const cloudinaryImageSchema = {
  common: {
    width: 348,
    height: 348
  },
  thumbnail: {
    width: 348,
    height: 348
  },
  cover: {
    width: 348,
    height: 348
  }
}

class InvokeCloudinaryUtils {
  private static getThumbnailUrl(cloudinaryId) {
    const imageSchema = cloudinaryImageSchema.common
    const thumbnailUrl = cloudinary.url(cloudinaryId, {
      width: imageSchema.width,
      height: imageSchema.height,
      crop: 'fill',
      sign_url: true,
      fetch_format: 'auto',
      quality: 'auto'
    })
    return thumbnailUrl
  }

  /**
   * imageType: {thumbnail|cover}
   * @param request
   * @returns {*}
   */
  static async uploadImageToCloudinary(request) {
    const imageLocalPath = request.params.imageLocalPath

    const cloudinaryImage = await cloudinary.uploader.upload(imageLocalPath)

    if (!cloudinaryImage) {
      throw new Error('Upload image failure!')
    }

    const cloudinaryId = cloudinaryImage.public_id
    const cloudinaryUrl = cloudinaryImage.url
    const thumbnailUrl = InvokeCloudinaryUtils.getThumbnailUrl(cloudinaryId)
    const result: ICloudinaryCloudReturnResult = {
      cloudinaryId,
      originalUrl: cloudinaryUrl,
      thumbnailUrl
    }

    return result
  }
}

export class InvokeCloudinary extends BaseDefine {
  static setupCloudinary() {
    // set your env variable CLOUDINARY_URL or set the following configuration
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    })
  }

  async handler(request) {
    return await InvokeCloudinaryUtils.uploadImageToCloudinary(request)
  }
}
