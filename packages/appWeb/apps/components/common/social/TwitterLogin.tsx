import * as React from 'react'
import 'whatwg-fetch'
import 'url-search-params-polyfill'
import { SocialAuthHelper, twitterServerConfigure } from '@app/types'

interface ITwitterLoginProps {
  tag?: string
  text?: string
  onFailure: (...args: any[]) => any
  onSuccess: (...args: any[]) => any
  disabled?: boolean
  style?: object
  className?: string
  dialogWidth?: number
  dialogHeight?: number
  showIcon?: boolean
  credentials?: 'omit' | 'same-origin' | 'include'
  customHeaders?: object
}

interface ITwitterLoginDefaultProps {
  tag: string
  text: string
  disabled: boolean
  dialogWidth: number
  dialogHeight: number
  showIcon: boolean
  credentials: string
  customHeaders: object
}

type TwitterLoginPropsWithDefaults = ITwitterLoginProps & ITwitterLoginDefaultProps

/**
 * react-twitter-auth:
 * "version": "0.0.12",
 * "homepage": "https://github.com/GenFirst/react-twitter-auth"
 */
export class TwitterLogin extends React.Component<ITwitterLoginProps, {}> {
  public static defaultProps: Partial<TwitterLoginPropsWithDefaults> = {
    tag: 'button',
    text: 'Sign in with Twitter',
    disabled: false,
    dialogWidth: 600,
    dialogHeight: 400,
    showIcon: true,
    credentials: 'same-origin',
    customHeaders: {}
  }

  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    return this.getRequestToken()
  }

  getHeaders() {
    const headers = Object.assign({}, this.props.customHeaders)
    headers['Content-Type'] = 'application/json'
    return headers
  }

  getRequestToken() {
    const popup: any = this.openPopup()
    return (window as any)
      .fetch(twitterServerConfigure.requestTokenUrl, {
        method: 'POST',
        credentials: this.props.credentials,
        headers: this.getHeaders()
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        popup.location = SocialAuthHelper.getTwitterRequestTokenUrl({
          oauth_token: data.oauth_token
        })
        this.polling(popup)
      })
      .catch((error) => {
        popup.close()
        return this.props.onFailure(error)
      })
  }

  openPopup() {
    const { dialogWidth, dialogHeight } = this.props as TwitterLoginPropsWithDefaults
    const w: number = dialogWidth
    const h: number = dialogHeight
    const left = screen.width / 2 - w / 2
    const top = screen.height / 2 - h / 2
    return (window as any).open(
      '',
      '',
      'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
        w +
        ', height=' +
        h +
        ', top=' +
        top +
        ', left=' +
        left
    )
  }

  polling(popup: any) {
    const polling = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(polling)
        this.props.onFailure(new Error('Popup has been closed by user'))
      }
      const closeDialog = () => {
        clearInterval(polling)
        popup.close()
      }
      try {
        if (
          !popup.location.hostname.includes('api.twitter.com') &&
          !(popup.location.hostname === '')
        ) {
          if (popup.location.search) {
            const query = new URLSearchParams(popup.location.search)
            const oauthToken = query.get('oauth_token')
            const oauthVerifier = query.get('oauth_verifier')
            closeDialog()
            return this.getOauthToken(oauthVerifier, oauthToken)
          } else {
            closeDialog()
            return this.props.onFailure(
              new Error(
                'OAuth redirect has occurred but no query or hash parameters were found. ' +
                  'They were either not set during the redirect, or were removed—typically by a ' +
                  'routing library—before Twitter react component could read it.'
              )
            )
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in IE.
      }
    }, 500)
  }

  getOauthToken(oAuthVerifier, oauthToken) {
    const authUrl = SocialAuthHelper.getTwitterOauthTokenUrl({
      oAuthVerifier,
      oauthToken
    })
    return (window as any)
      .fetch(authUrl, {
        method: 'POST',
        credentials: this.props.credentials,
        headers: this.getHeaders()
      })
      .then((response) => {
        this.props.onSuccess(response)
      })
      .catch((error) => {
        return this.props.onFailure(error)
      })
  }

  render() {
    const { tag } = this.props as TwitterLoginPropsWithDefaults
    const twitterButton = React.createElement(
      tag,
      {
        onClick: this.onButtonClick,
        style: this.props.style,
        disabled: this.props.disabled,
        className: this.props.className
      },
      this.props.children && this.props.children
    )
    return twitterButton
  }
}
