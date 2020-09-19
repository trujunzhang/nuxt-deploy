export class TwitterProvider {
  authData: any

  constructor(authData: any) {
    this.authData = authData
  }

  authenticate(options: any) {
    if (options.success) {
      options.success(this, this.authData)
    }
  }

  restoreAuthentication(authData: any) {
    // console.log(arguments)
    if (authData) {
    }
    return true
  }

  getAuthType() {
    return 'twitter'
  }

  deauthenticate() {
    this.restoreAuthentication(null)
  }
}
