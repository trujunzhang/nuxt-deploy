import * as React from 'react'
import * as Types from '@app/types'

/**
 * https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
 * @param tag
 * @returns {boolean}
 */
const shouldAddDisabledProp = (tag) =>
  ['button', 'input', 'select', 'textarea', 'optgroup', 'option', 'fieldset'].indexOf(
    (tag + '').toLowerCase()
  ) >= 0

interface IFacebookLoginProps {
  isDisabled?: boolean
  callback: (...args: any[]) => any
  appId: string
  xfbml?: boolean
  cookie?: boolean
  reAuthenticate?: boolean
  scope?: string
  returnScopes?: boolean
  redirectUri?: string
  textButton?: string
  typeButton?: string
  autoLoad?: boolean
  disableMobileRedirect?: boolean
  isMobile?: boolean
  size?: string
  fields?: string
  cssClass?: string
  version?: string
  icon?: any
  language?: string
  socialButtonType?: string
  onClick?: (...args: any[]) => any
  buttonStyle?: object
  tag?: React.ReactNode | ((...args: any[]) => any)
  onFailure?: (...args: any[]) => any
}

interface IFacebookLoginDefaultProps {
  textButton: string
  typeButton: string
  scope: string
  socialButtonType: string
  returnScopes: boolean
  xfbml: boolean
  autoLoad: boolean
  cookie: boolean
  reAuthenticate: boolean
  size: string
  fields: string
  cssClass: string
  version: string
  language: string
  disableMobileRedirect: boolean
  isMobile: boolean
  tag: string
  onFailure: any
}

type FacebookLoginPropsWithDefaults = IFacebookLoginProps & IFacebookLoginDefaultProps

interface IFacebookLoginState {
  isSdkLoaded: boolean
  isProcessing: boolean
  isMounted: boolean
}

/**
 * "name": "react-facebook-login",
 * "version": "4.0.0",
 * "homepage": "https://github.com/keppelen/react-facebook-login"
 */
export class FacebookLogin extends React.Component<IFacebookLoginProps, IFacebookLoginState> {
  public static defaultProps: Partial<FacebookLoginPropsWithDefaults> = {
    textButton: 'Login with Facebook',
    typeButton: 'button',
    scope: 'public_profile,email',
    socialButtonType: Types.social.SOCIAL_BUTTON_FOR_LOGIN,
    returnScopes: false,
    xfbml: false,
    autoLoad: false,
    cookie: false,
    reAuthenticate: false,
    size: 'metro',
    fields: 'name',
    cssClass: 'kep-login-facebook',
    version: '2.3',
    language: 'en_US',
    disableMobileRedirect: false,
    isMobile: false,
    tag: 'button',
    onFailure: null
  }

  constructor(props: IFacebookLoginProps) {
    super(props)
    this.state = {
      isSdkLoaded: false,
      isProcessing: false,
      isMounted: false
    }
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    })
    if (document.getElementById('facebook-jssdk')) {
      this.sdkLoaded()
      return
    }
    this.setFbAsyncInit()
    this.loadSdkAsynchronously()
    let fbRoot = document.getElementById('fb-root')
    if (!fbRoot) {
      fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'
      document.body.appendChild(fbRoot)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isSdkLoaded && nextProps.autoLoad && !this.props.autoLoad) {
      window.FB.getLoginStatus(this.checkLoginAfterRefresh)
    }
  }

  setStateIfMounted(state) {
    if (this.state.isMounted) {
      this.setState(state)
    }
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version, autoLoad } = this.props as FacebookLoginPropsWithDefaults
    window.fbAsyncInit = () => {
      window.FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie
      })
      this.setStateIfMounted({
        isSdkLoaded: true
      })
      if (autoLoad || window.location.search.includes('facebookdirect')) {
        window.FB.getLoginStatus(this.checkLoginAfterRefresh)
      }
    }
  }

  sdkLoaded() {
    this.setState({
      isSdkLoaded: true
    })
  }

  loadSdkAsynchronously() {
    const { language } = this.props as FacebookLoginPropsWithDefaults
    ;((d, s, id) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js: any = element
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = `https://connect.facebook.net/${language}/sdk.js`
      if (!!fjs) {
        const parentNode = fjs.parentNode
        if (!!parentNode) {
          parentNode.insertBefore(js, fjs)
        }
      }
    })(document, 'script', 'facebook-jssdk')
  }

  responseApi = (authResponse) => {
    window.FB.api(
      '/me',
      {
        locale: this.props.language,
        fields: this.props.fields
      },
      (me) => {
        Object.assign(me, authResponse)
        this.props.callback(me)
      }
    )
  }

  checkLoginState = (response) => {
    this.setStateIfMounted({
      isProcessing: false
    })
    if (response.authResponse) {
      this.responseApi(response.authResponse)
    } else {
      if (this.props.onFailure) {
        this.props.onFailure({
          status: response.status
        })
      } else {
        this.props.callback({
          status: response.status
        })
      }
    }
  }
  checkLoginAfterRefresh = (response) => {
    if (response.status === 'connected') {
      this.checkLoginState(response)
    } else {
      window.FB.login((loginResponse) => this.checkLoginState(loginResponse), true)
    }
  }
  click = (e) => {
    if (!this.state.isSdkLoaded || this.state.isProcessing || this.props.isDisabled) {
      return
    }
    this.setState({
      isProcessing: true
    })
    const {
      scope,
      appId,
      onClick,
      reAuthenticate,
      returnScopes,
      redirectUri,
      disableMobileRedirect
    } = this.props
    if (typeof onClick === 'function') {
      onClick(e)
      if (e.defaultPrevented) {
        return
      }
    }
    const params: any = {
      client_id: appId,
      redirect_uri: redirectUri,
      state: 'facebookdirect',
      return_scopes: returnScopes,
      scope
    }
    if (reAuthenticate) {
      params.auth_type = 'reauthenticate'
    }

    window.FB.login(this.checkLoginState, {
      scope,
      return_scopes: returnScopes,
      auth_type: params.auth_type
    })
  }

  render() {
    const { children, socialButtonType, isDisabled } = this.props
    const buttonClass = 'ybtn ybtn--social ybtn--facebook ybtn-full'
    switch (socialButtonType) {
      case Types.social.SOCIAL_BUTTON_FOR_CONNECTION:
        return (
          <button
            onClick={this.click}
            disabled={isDisabled}
            className={buttonClass}
            title="Connect your Facebook account to Politicl">
            {children}
          </button>
        )
      case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
        return (
          <button onClick={this.click} disabled={isDisabled} className={buttonClass}>
            {children}
          </button>
        )
    }
    return null
  }
}
