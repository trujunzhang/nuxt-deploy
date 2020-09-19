export class ParseModelsHelper {
  static getUniqueId(map: IParseObject) {
    const id = map.id
    let uniqueId = map.get('uniqueId') || id
    if (!!uniqueId && uniqueId === '') {
      uniqueId = id
    }
    return uniqueId
  }

  static getSyncPostedAt(map: IParseObject) {
    const updatedAt = map.get('updatedAt')
    const syncPostedAt = map.get('syncPostedAt')
    if (syncPostedAt === undefined) {
      return updatedAt
    }
    if (!!syncPostedAt) {
      return syncPostedAt
    }
    return updatedAt
  }
}
