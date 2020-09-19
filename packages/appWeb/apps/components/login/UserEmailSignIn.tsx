import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'

import { ReducerHelper } from '@app/library' //  '@app/libs'
import { withRouter } from 'next/router'

import {
  checkedLoggedStatus,
  dismissAlertMessage,
  dismissAppOverlay,
} from '@appActions/index' // from '@web/actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { UsersSession } from '@appActionUtils/index' // from '@appActionUtils/index' // '@app/library' //  '@app/actions-utils'
import { UserEmailSignInHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'

interface IUserEmailSignInStateProps {
  authModel: IAuthModelState
}

interface IUserEmailSignInDispatchProps {
  actions: any
  dismissAlertMessageAction: any
  dismissAppOverlayAction: any
  checkedLoggedStatusAction: any
}

interface IUserEmailSignInProps extends IUserEmailSignInStateProps, IUserEmailSignInDispatchProps {
  toggleEvent: any
  loginPageType: string
}

interface IUserEmailSignInWithRouterProps {
  router: IWebAppRouterProps
}

type UserEmailSignInPropsWithRouter = IUserEmailSignInProps & IUserEmailSignInWithRouterProps

interface IUserEmailSignInState { }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch),
    dismissAppOverlayAction: () => dispatch(dismissAppOverlay()),
    dismissAlertMessageAction: () => dispatch(dismissAlertMessage()),
    checkedLoggedStatusAction: (object) => dispatch(checkedLoggedStatus(object))
  }
}

function mapStateToProps(store) {
  return {
    authModel: store.authModel
  }
}

@(withRouter as any)
class UserEmailSignIn extends React.Component<IUserEmailSignInProps, IUserEmailSignInState> {
  constructor(props: IUserEmailSignInProps) {
    super(props)
    this.state = {}
    props.dismissAlertMessageAction()
  }

  async onButtonPress() {
    const { authModel, actions, checkedLoggedStatusAction } = this.props
    await new UserEmailSignInHelper().signIn({
      authModel,
      actions,
      onSignInHook: () => { },
      callCloudSendEmailMethodAction: () => { },
      checkedLoggedStatusAction,
      onLoginSuccessHook: this.onAfterLoginHook
    })
  }

  onAfterLoginHook = () => {
    const { loginPageType } = this.props
    switch (loginPageType) {
      case Types.loginPage.LOGIN_PAGE_IN_POPUP:
        this.props.dismissAppOverlayAction()
        this.props.checkedLoggedStatusAction(UsersSession.getCurrentParseUserModel())
        break
      case Types.loginPage.LOGIN_PAGE_IN_SINGLE:
        const { router } = this.props as UserEmailSignInPropsWithRouter
        router.push({
          pathname: '/'
        })
        break
    }
  }

  onForgotPasswordPress() { }

  render() {
    return (
      <div className="login">
        <div className="signup-form-container">
          <div className="header">
            <h2>Log In to IEATTA</h2>
            <p className="subheading">
              {'New to IEATTA? '}
              <a
                onClick={(e) => {
                  this.props.toggleEvent(Types.login.LOGIN_FORM_TYPE_REGISTER)
                }}
                className="signup-link u-pseudo-link">
                {'Sign up'}
              </a>
            </p>
          </div>

          {this.renderFacebookSection()}
          <fieldset className="hr-line">
            <legend>OR</legend>
          </fieldset>

          {this.renderForm()}
        </div>
        <div className="sub-text-box">
          <small className="subtle-text">
            {'New to IEATTA? '}
            <a
              onClick={(e) => {
                this.props.toggleEvent(Types.login.LOGIN_FORM_TYPE_REGISTER)
              }}
              className="signup-link">
              {'Sign up'}
            </a>
          </small>
        </div>
      </div>
    )
  }

  renderFacebookSection() {
    const typeTitle = 'Log In'
    return (
      <Telescope.SocialsButtonView
        socialButtonType={Types.social.SOCIAL_BUTTON_FOR_LOGIN}
        buttonType={Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK}
        typeTitle={typeTitle}
        connectedUser={null}
      />
    )
  }

  renderForm() {
    const isDisabled = ReducerHelper.authModelDisabled(this.props)
    return (
      <div className="yform" id="ajax-login">
        <Telescope.TextFieldRow
          rowType={Types.input.INPUT_USERNAME_OR_EMAIL}
          actions={this.props.actions}
          authModel={this.props.authModel}
        />

        <Telescope.TextFieldRow
          rowType={Types.input.INPUT_PASSWORD}
          actions={this.props.actions}
          authModel={this.props.authModel}
        />

        {this.renderForgot()}

        <div className="captcha login-captcha" />

        <p className="legal-copy legal-left">
          {'By logging in, you agree to IEATT’s '}
          <a className="legal-link" href="https://www.yelp.com.sg/static?p=tos">
            {'Terms of Service'}
          </a>
          {' and '}
          <a className="legal-link" href="/tos/privacy_en_ie_20160131">
            {'Privacy Policy'}
          </a>
          {'.'}
        </p>

        <button
          type="submit"
          disabled={isDisabled}
          onClick={this.onButtonPress.bind(this)}
          value="submit"
          className="ybtn ybtn--primary submit ybtn-full">
          <span>{'Log In'}</span>
        </button>
      </div>
    )
  }

  renderForgot() {
    return (
      <div className="forgot-password">
        <a href="/forgot" className="forgot-link">
          Forgot password?
        </a>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEmailSignIn)
