export class RecordsParameters {
  query: IParseQuery

  constructor(query: IParseQuery) {
    this.query = query.ascending('updatedAt')
  }

  addParameters(terms: any) {
    if (!!terms.lastUpdatedAt) {
      // greaterThanOrEqualTo
      this.query.greaterThan('updatedAt', terms.lastUpdatedAt)
    }
    return this
  }

  end() {
    return this.query
  }
}
