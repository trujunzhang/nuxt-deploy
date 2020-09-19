export class RestaurantsParameters {
  query: any

  constructor(query) {
    this.query = query
  }

  addParameters(terms: any) {
    if (terms.search) {
      this.query.matches('displayName', `.*${terms.search}.*`, 'i')
    }
    if (terms.userProfileType) {
      const userId = terms.userId
      if (typeof userId === 'undefined') {
        throw new Error('You need to set a proper User Id before query posts')
      }
    }
    return this
  }

  end() {
    return this.query
  }
}
