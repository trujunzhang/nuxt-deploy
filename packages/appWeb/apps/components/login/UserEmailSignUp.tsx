import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { withRouter } from 'next/router'

import {
  dismissAlertMessage,
  dismissAppOverlay,
  showAlertMessage,
  signUpWithPassword
} from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'
import { UserEmailSignUpHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'

const needEmailVerification = false

interface IUserEmailSignUpStateProps {
  authModel: IAuthModelState
}

interface IUserEmailSignUpDispatchProps {
  actions: any
  dismissAppOverlayAction: any
  dismissAlertMessageAction: any
  signUpWithPasswordAction: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IUserEmailSignUpProps extends IUserEmailSignUpStateProps, IUserEmailSignUpDispatchProps {
  toggleEvent: any
  loginPageType: string
}

interface IUserEmailSignUpWithRouterProps {
  router: IWebAppRouterProps
}

type UserEmailSignUpPropsWithRouter = IUserEmailSignUpProps & IUserEmailSignUpWithRouterProps

interface IUserEmailSignUpState { }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch),
    dismissAppOverlayAction: () => dispatch(dismissAppOverlay()),
    dismissAlertMessageAction: () => dispatch(dismissAlertMessage()),
    // Actions
    signUpWithPasswordAction: (params: ISignUpParameter) => dispatch(signUpWithPassword(params)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store) {
  return {
    authModel: store.authModel
  }
}

@(withRouter as any)
class UserEmailSignUp extends React.Component<IUserEmailSignUpProps, IUserEmailSignUpState> {
  constructor(props: IUserEmailSignUpProps) {
    super(props)
    this.state = {}

    props.dismissAlertMessageAction()
  }

  async onButtonPress() {
    const { authModel, actions, signUpWithPasswordAction } = this.props
    await new UserEmailSignUpHelper().signUp({
      authModel,
      actions,
      needEmailVerification,
      signUpWithPasswordAction,
      onSignSuccessHook: this.onAfterSignUpHook
    })
  }

  onAfterSignUpHook = () => {
    const { loginPageType } = this.props
    switch (loginPageType) {
      case Types.loginPage.LOGIN_PAGE_IN_POPUP:
        this.props.dismissAppOverlayAction()
        break
      case Types.loginPage.LOGIN_PAGE_IN_SINGLE:
        this.props.toggleEvent(Types.login.LOGIN_FORM_TYPE_LOGIN)
        break
    }
  }

  render() {
    return (
      <div className="login">
        <div className="signup-form-container">
          <div className="header">
            <h2>{'Sign Up for IEATTA'}</h2>
            <p className="subheading">Connect with great local businesses</p>
          </div>

          {this.renderFacebookSection()}

          <p className="legal-copy">Don't worry, we never post without your permission.</p>

          <fieldset className="hr-line">
            <legend>OR</legend>
          </fieldset>

          {this.renderForm()}
        </div>

        <div className="sub-text-box">
          <small className="subtle-text">
            {'Already on IEATTA? '}
            <a
              onClick={(e) => {
                this.props.toggleEvent(Types.login.LOGIN_FORM_TYPE_LOGIN)
              }}
              className="signup-link">
              {'Log in'}
            </a>
          </small>
        </div>
      </div>
    )
  }

  renderForm() {
    const isDisabled = ReducerHelper.authModelDisabled(this.props)
    return (
      <div className="yform signup-form  city-hidden" id="signup-form">
        <Telescope.TextFieldRow
          rowType={Types.input.INPUT_USERNAME}
          actions={this.props.actions}
          authModel={this.props.authModel}
        />
        <Telescope.TextFieldRow
          rowType={Types.input.INPUT_EMAIL}
          actions={this.props.actions}
          authModel={this.props.authModel}
        />
        <Telescope.TextFieldRow
          rowType={Types.input.INPUT_PASSWORD}
          actions={this.props.actions}
          authModel={this.props.authModel}
        />

        <p className="legal-copy legal-left">
          {'By signing up, you agree to IEATTA’s '}
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
          id="signup-button"
          disabled={isDisabled}
          type="submit"
          value="Sign Up"
          onClick={this.onButtonPress.bind(this)}
          className="ybtn ybtn--primary disable-on-submit submit signup-button">
          <span>{'Sign Up'}</span>
        </button>
      </div>
    )
  }

  renderFacebookSection() {
    const typeTitle = 'Sign Up'
    return (
      <Telescope.SocialsButtonView
        socialButtonType={Types.social.SOCIAL_BUTTON_FOR_LOGIN}
        buttonType={Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK}
        typeTitle={typeTitle}
        connectedUser={null}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEmailSignUp)
