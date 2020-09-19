export class ParseSingleParameters {
  query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms: IDatabaseCommonQuery) {
    const { singleObjectId, singleUniqueId } = terms
    if (!!singleObjectId) {
      this.query.equalTo('objectId', singleObjectId)
    }
    if (!!singleUniqueId) {
      this.query.equalTo('uniqueId', singleUniqueId)
    }
    return this
  }

  end() {
    return this.query
  }
}
