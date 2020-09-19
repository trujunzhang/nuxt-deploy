import { ParseApp } from '../modules/parse-app'

import { BaseDefine } from './baseDefine'

class PhotoListUrlsUtils {
  static generatePhotoListQueries(request) {
    const photoRelations: IPhotoRelations = request.params.photoRelations

    const promises: any = photoRelations.map((item: IPhotoListItem) => {
      if (!!item.id) {
        const object: any = ParseApp.getInstanceWithoutData(item.photoType, item.id)
        return ParseApp.getQueryInstance('photo')
          .equalTo('photoType', item.photoType)
          .equalTo(item.photoType, object)
          .limit(1)
          .find({
            useMasterKey: true
          })
      }
    })

    for (let i = 0; i < photoRelations.length; i++) {
      const relation: any = photoRelations[i]
      const object: any = ParseApp.getInstanceWithoutData(relation.photoType, relation.id)
      promises.push(
        ParseApp.getQueryInstance('photo')
          .equalTo('photoType', relation.photoType)
          .equalTo(relation.photoType, object)
          .limit(1)
          .find({
            useMasterKey: true
          })
      )
    }

    return promises
  }

  static generatePhotoListQueriesxxx(request) {
    const photoRelations: IPhotoRelations = request.params.photoRelations

    const promises: any = []

    for (let i = 0; i < photoRelations.length; i++) {
      const relation: any = photoRelations[i]
      const object: any = ParseApp.getInstanceWithoutData(relation.photoType, relation.id)
      promises.push(
        ParseApp.getQueryInstance('photo')
          .equalTo('photoType', relation.photoType)
          .equalTo(relation.photoType, object)
          .limit(1)
          .find({
            useMasterKey: true
          })
      )
    }

    return promises
  }

  static generatePhotoListResults(request, results) {
    const photoRelations = request.params.photoRelations
    const returnData = {}

    for (let i = 0; i < photoRelations.length; i++) {
      const relation = photoRelations[i]
      const array = results[i]

      returnData[relation.id] = array.length > 0 ? array[0].get('thumbnailUrl') : ''
    }

    return returnData
  }
}

export class PhotoListUrls extends BaseDefine {
  async handler(request) {
    return await Promise.all(PhotoListUrlsUtils.generatePhotoListQueries(request)).then(
      (results) => {
        return PhotoListUrlsUtils.generatePhotoListResults(request, results)
      }
    )
  }
}
