import { BaseDefine } from './baseDefine'

class QueryObjectIdByUniqueIdUtils {
  static generateGetObjectIdByUniqueIdQuery(request) {
    const modelType = request.params.modelType
    const forObjectUniqueId = request.params.forObjectUniqueId

    let currentQuery: any = null
    switch (modelType) {
      case 'restaurant':
        currentQuery = new Parse.Query('Restaurant').equalTo('uniqueId', forObjectUniqueId)
        break
      case 'recipe':
        currentQuery = new Parse.Query('Recipe').equalTo('uniqueId', forObjectUniqueId)
        break
      case 'user':
        currentQuery = new Parse.Query('User').equalTo('uniqueId', forObjectUniqueId)
        break
    }

    return currentQuery.first()
  }

  // tslint:disable-next-line:variable-name
  static generateGetObjectIdByUniqueIdResult(_request, object) {
    if (!!object) {
      return object.id
    }

    return ''
  }
}

export class QueryObjectIdByUniqueId extends BaseDefine {
  async handler(request) {
    return await QueryObjectIdByUniqueIdUtils.generateGetObjectIdByUniqueIdQuery(request).then(
      (object) => {
        return QueryObjectIdByUniqueIdUtils.generateGetObjectIdByUniqueIdResult(request, object)
      }
    )
  }
}
