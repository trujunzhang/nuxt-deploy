// https://politicl.com/users/my/edit
let facebookCallbackURL: string = 'https://politicl.com/auth/facebook/callback'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  facebookCallbackURL = 'http://localhost:4000/auth/facebook/callback'
}

const facebookConfig = {
  facebook_appId: '1050096535124346',
  facebook_secret: 'd969c13f2d19112e26c6b9c3f2563d2f',
  fields: 'name,email,picture',
  facebook_callbackURL: facebookCallbackURL,
  profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
  profileFields: ['id', 'email', 'name'] // For requesting permissions from Facebook API
}

const twitterConfig = {
  consumerKey: 'rkBigq6to0XYLpn81HwfkvweJ',
  consumerSecret: '30D0x2SOCHaU5bzyRWPfw8DCRleOFVyIRmQjRBfzvk4QV2xz6N'
}

let twitterServerConfigure = {
  loginUrl: 'https://politicl.com/auth/v1/auth/twitter',
  requestTokenUrl: 'https://politicl.com/auth/v1/auth/twitter/reverse'
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  twitterServerConfigure = {
    loginUrl: 'http://localhost:4000/auth/v1/auth/twitter',
    requestTokenUrl: 'http://localhost:4000/auth/v1/auth/twitter/reverse'
  }
}

export { facebookConfig, twitterConfig, twitterServerConfigure }
