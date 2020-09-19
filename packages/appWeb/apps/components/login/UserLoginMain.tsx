import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'

import { FilterRoutes } from '@appFilter/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IUserLoginMainStateProps {
  authModel: IAuthModelState
}

interface IUserLoginMainDispatchProps {
  actions: any
}

interface IUserLoginMainProps extends IUserLoginMainStateProps, IUserLoginMainDispatchProps { }

interface IUserLoginMainWithRouterProps {
  router: IWebAppRouterProps
}

type UserLoginMainPropsWithRouter = IUserLoginMainProps & IUserLoginMainWithRouterProps

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

@(withRouter as any)
class UserLoginMain extends React.Component<IUserLoginMainProps, IUserLoginMainState> {
  constructor(props: IUserLoginMainProps) {
    super(props)
    const formType = FilterRoutes.getLoginFormType(props as UserLoginMainPropsWithRouter)
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

  render() {
    return (
      <div id="wrap" className="lang-en">
        <Telescope.LoginHeaderContent />

        <div className="main-content-wrap main-content-wrap--full">
          <div id="super-container" className="content-container">
            <Telescope.UserLoginAlert />

            <div className="clearfix layout-block layout-h row--responsive">
              <div className="column column-alpha column--responsive">
                <div className="signup-wrapper">
                  <div className="signup-flow on-flow-start" id="loginMainLeftPanel">
                    <Telescope.UserLoginLeftPanel
                      loginPageType={Types.loginPage.LOGIN_PAGE_IN_SINGLE}
                      formType={this.state.formType}
                    />
                  </div>
                </div>
              </div>

              {this.renderRightPanel()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderRightPanel() {
    return (
      <div className="column column-beta responsive-visible-large-block">
        <div className="picture-container">
          <img src="/static/images/signup_illustration.png" />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginMain)
