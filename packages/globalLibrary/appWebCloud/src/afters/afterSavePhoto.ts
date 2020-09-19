import { BaseAfter } from './baseAfter'

export class AfterSavePhoto extends BaseAfter {
  handler(request) {
    const photo = request.object
    const photoId = photo.id
    new Parse.Query('Photo').get(photoId).then((object) => {
      const url = object.get('url')
      const photoModel = object.toJSON()
      const originalUrlExist = Object.keys(photoModel).indexOf('originalUrl') !== -1
      if (originalUrlExist && object.get('originalUrl') !== '') {
        console.log('(3.1) after query photo, @Exist[original]:', object.get('originalUrl'))
      } else if (!!url && url !== '') {
        console.log('(3.2)  generating the size images, @New[original]')
        // uploadImageToCloudinary({
        // 	imageURL: url
        // }).then((result) => {
        // 	console.log('(3.3)  generated images from cloudinary, @success[original]', result.originalUrl)
        // 	object.set('originalUrl', result.originalUrl)
        // 	object.set('thumbnailUrl', result.thumbnailUrl)
        // 	return object.save()
        // })
      }
    })
  }
}
