import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IUserLoginMainStateProps {
  authModel: IAuthModelState
}

interface IUserLoginMainDispatchProps {
  actions: any
}

interface IUserLoginMainProps extends IUserLoginMainStateProps, IUserLoginMainDispatchProps {
  formType: string
  loginPageType: string
}

interface IUserLoginMainState {
  formType: string
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch)
  }
}

function mapStateToProps(store) {
  return {
    authModel: store.authModel
  }
}

class UserLoginLeftPanel extends React.Component<IUserLoginMainProps, IUserLoginMainState> {
  constructor(props: IUserLoginMainProps) {
    super(props)
    const { formType } = props
    this.state = {
      formType
    }
    this.toggleFormState(formType)
  }

  toggleFormState(state) {
    switch (state) {
      case Types.login.LOGIN_FORM_TYPE_REGISTER:
        this.props.actions.registerState()
        break
      case Types.login.LOGIN_FORM_TYPE_LOGIN:
        this.props.actions.loginState()
        break
    }
  }

  switchFormState = (state) => {
    this.toggleFormState(state)
    this.setState({
      formType: state
    })
  }

  render() {
    switch (this.state.formType) {
      case Types.login.LOGIN_FORM_TYPE_LOGIN:
        return (
          <Telescope.UserEmailSignIn
            loginPageType={this.props.loginPageType}
            toggleEvent={this.switchFormState}
          />
        )
      case Types.login.LOGIN_FORM_TYPE_REGISTER:
        return (
          <Telescope.UserEmailSignUp
            loginPageType={this.props.loginPageType}
            toggleEvent={this.switchFormState}
          />
        )
      case Types.login.LOGIN_FORM_TYPE_FORGOTPASSWORD:
        return (
          <Telescope.UserEmailSignUp
            loginPageType={this.props.loginPageType}
            toggleEvent={this.switchFormState}
          />
        )
      case Types.login.LOGIN_FORM_TYPE_LOG_OUT:
        return <Telescope.UserLogOut toggleEvent={this.switchFormState} />
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginLeftPanel)
