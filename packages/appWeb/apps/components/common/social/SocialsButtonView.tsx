import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { facebookConfig } from '@app/types'
import { connect } from 'react-redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'
import { checkedLoggedStatus, showAlertMessage } from '@appActions/index' // from '@web/actions'
import { FacebookLoginAccount, TwitterLoginAccount } from '@appActionUtils/index' // '@app/library' //  '@app/actions-utils'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { bindActionCreators } from 'redux'
import { FacebookLogin } from './FacebookLogin'

interface ISocialsButtonViewStateProps {
  authModel: IAuthModelState
}

interface ISocialsButtonViewDispatchProps {
  actions: any
  checkedLoggedStatusAction: CheckedLoggedStatusActionFunc // After Logged, check Status.
}

interface ISocialsButtonViewProps
  extends ISocialsButtonViewStateProps,
  ISocialsButtonViewDispatchProps {
  buttonType: string
  socialButtonType: string
  connectedUser: ParseModelUsersWithNull
  onConnectedHook?: any // For connecting on the UserEditForm View.
  onSignInHook?: any // For LoginMain View.
  typeTitle?: string // For LoginMain View.
}

interface ISocialsButtonViewWithRouterProps {
  router: IWebAppRouterProps
}

type SocialsButtonViewPropsWithRouter = ISocialsButtonViewProps & ISocialsButtonViewWithRouterProps

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch),
    checkedLoggedStatusAction: (object) => dispatch(checkedLoggedStatus(object))
  }
}

function mapStateToProps(store) {
  return {
    authModel: store.authModel
  }
}

@(withRouter as any)
class SocialsButtonView extends React.Component<ISocialsButtonViewProps, {}> {
  async connectSocial(profile) {
    const { buttonType, connectedUser } = this.props
    this.props.actions.loginRequest()
    const connectionAction =
      buttonType === Types.social.SOCIAL_BUTTON_TYPE_TWITTER
        ? TwitterLoginAccount.connectViaTwitter
        : FacebookLoginAccount.connectViaFacebook
    const result = await connectionAction(profile, connectedUser)
    switch (result.type) {
      case Types.loggedStatus.PARSE_CONNECTED_DONE:
        this.props.onConnectedHook(buttonType, result.model)
        break
    }
    this.props.actions.loginSuccess()
  }

  async loginViaSocialAuth(profile) {
    let socialCallback: any = null
    const { buttonType } = this.props
    this.props.actions.loginRequest()
    switch (buttonType) {
      case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
        socialCallback = await FacebookLoginAccount.getUserProfileViaFacebook(profile)
        break
      case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
        socialCallback = await TwitterLoginAccount.getUserProfileViaTwitter(profile)
        break
    }
    if (!!socialCallback) {
      switch (socialCallback.type) {
        case Types.loggedStatus.PARSE_LOGGED_IN:
          // this.props.checkedLoggedStatusAction(socialCallback.model)
          // this.props.onSignInHook()
          // if (hasInvalidePathname(router)) {
          // Router.pushRoute('/').then(() => window.scrollTo(0, 0))
          // }
          break
        case Types.loggedStatus.PARSE_LOGGED_FAILURE:
          this.props.actions.showLoginAlert({
            message: socialCallback.message,
            type: 'error'
          })
          break
      }
    }
    this.props.actions.loginSuccess()
  }

  // tslint:disable-next-line:variable-name
  onFailed(_error) { }

  onSuccess(response) {
    const token = response.headers.get('x-authModel-token')
    response.json().then((user: any) => {
      if (token) {
        const { socialButtonType } = this.props
        switch (socialButtonType) {
          case Types.social.SOCIAL_BUTTON_FOR_CONNECTION:
            this.connectSocial(user)
            break
          case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
            this.loginViaSocialAuth(user)
            break
        }
      }
    })
  }

  // tslint:disable-next-line:variable-name
  responseFailureFacebook(_response) { }

  responseFacebook(response) {
    const { socialButtonType } = this.props
    switch (socialButtonType) {
      case Types.social.SOCIAL_BUTTON_FOR_CONNECTION:
        this.connectSocial(response)
        break
      case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
        this.loginViaSocialAuth(response)
        break
    }
  }

  renderForLogin() {
    const { buttonType, typeTitle } = this.props
    const isDisabled = ReducerHelper.authModelDisabled(this.props)
    switch (buttonType) {
      case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
        return (
          <FacebookLogin
            isDisabled={isDisabled}
            appId={facebookConfig.facebook_appId}
            fields="name,email,picture"
            onFailure={this.responseFailureFacebook.bind(this)}
            callback={this.responseFacebook.bind(this)}>
            <i className="fa fa-facebook-official" />
            <div className="buttonContainer_wTYxi">{`${typeTitle} with facebook`}</div>
          </FacebookLogin>
        )
    }
  }

  render() {
    const { socialButtonType } = this.props
    switch (socialButtonType) {
      case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
        return this.renderForLogin()
    }
    return null
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialsButtonView)
