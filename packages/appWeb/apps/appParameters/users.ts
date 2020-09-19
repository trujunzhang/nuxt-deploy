import { StatusConstants } from '@app/types'

export class UsersParameters {
  private query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms) {
    const { s } = terms
    if (!!s && s !== '') {
      this.query.matches('username', s, 'i')
    }
    this.addAccountParameter(terms)
    this.addStatusUsersParameter(terms)
    this.addSortParameter(terms)
    return this
  }

  addAccountParameter(terms) {
    const {
      userSlug,
      email,
      facebook_id,
      twitter_id,
      sign_up_email_verify_token,
      reset_email_verify_token,
      userName
    } = terms
    if (!!userSlug) {
      this.query.equalTo('slug', userSlug)
    }
    if (!!email) {
      this.query.equalTo('email', email)
    }
    if (!!facebook_id) {
      this.query.equalTo('facebook_id', facebook_id)
    }
    if (!!twitter_id) {
      this.query.equalTo('twitter_id', twitter_id)
    }
    if (!!sign_up_email_verify_token) {
      this.query.equalTo('sign_up_email_verify_token', sign_up_email_verify_token)
    }
    if (!!reset_email_verify_token) {
      this.query.equalTo('reset_email_verify_token', reset_email_verify_token)
    }
    if (!!userName) {
      this.query.equalTo('username', userName)
    }
  }

  addSortParameter(terms) {
    // order: nextOrder,
    // orderby: columnName,
    const { order, orderby } = terms
    if (!!orderby) {
      // tslint:disable-next-line:no-shadowed-variable
      const order = terms.order || 'desc'
      switch (orderby) {
        case 'username':
          if (order === 'desc') {
            this.query.descending('username')
          } else if (order === 'asc') {
            this.query.ascending('username')
          }
          break
        case 'admin':
          if (order === 'desc') {
            this.query.descending('isAdmin')
          } else if (order === 'asc') {
            this.query.ascending('isAdmin')
          }
          break
        case 'email':
          if (order === 'desc') {
            this.query.descending('email')
          } else if (order === 'asc') {
            this.query.ascending('email')
          }
          break
      }
    }
  }

  addStatusUsersParameter(terms) {
    const loginType = terms.loginType
    if (!!loginType) {
      switch (loginType) {
        case 'admin':
          this.query.equalTo('isAdmin', true)
          break
        case 'facebook':
          this.query.equalTo('loginType', StatusConstants.USERS.TYPE_FACEBOOK)
          break
        case 'twitter':
          this.query.equalTo('loginType', StatusConstants.USERS.TYPE_TWITTER)
          break
        case 'email':
          this.query.equalTo('loginType', StatusConstants.USERS.TYPE_EMAIL)
          break
        default:
          break
      }
    }
  }

  end() {
    return this.query
  }
}
