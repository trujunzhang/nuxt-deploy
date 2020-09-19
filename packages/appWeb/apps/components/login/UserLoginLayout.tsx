import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { connect } from 'react-redux'
import OnClickOut from 'react-onclickoutside'
import * as Types from '@app/types'
import { dismissAppOverlay } from '@appActions/index' // from '@web/actions'

interface IUserLoginLayoutStateProps { }

interface IUserLoginLayoutDispatchProps {
  // Model
  dismissAppOverlayAction: any
}

interface IUserLoginLayoutProps extends IUserLoginLayoutStateProps, IUserLoginLayoutDispatchProps {
  model: any
}

interface IUserLoginLayoutState {
  formState: string
  formType: string
}

function mapDispatchToProps(dispatch) {
  return {
    // Model
    dismissAppOverlayAction: () => dispatch(dismissAppOverlay())
  }
}

@(OnClickOut as any)
class UserLoginLayout extends React.Component<IUserLoginLayoutProps, IUserLoginLayoutState> {
  constructor(props) {
    super(props)
    const { object } = props.model || {
      object: {
        formType: Types.login.LOGIN_FORM_TYPE_LOGIN
      }
    }
    const formType = object.formType || Types.login.LOGIN_FORM_TYPE_LOGIN
    this.state = {
      formType,
      formState: Types.authAction.LOGIN_PANEL_FORM_NORMAL
    }
  }

  renderDialog() {
    return (
      <div className="modal_dialog">
        <div>
          <div className="modal_body">
            <div className="signup-wrapper">
              <div className="signup-flow on-flow-start">
                <div className="flow-start signup-visible">
                  <div className="signup-form-container" id="poppup_LeftLoginPanel">
                    <Telescope.UserLoginLeftPanel
                      loginPageType={Types.loginPage.LOGIN_PAGE_IN_POPUP}
                      formType={this.state.formType}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="modal modal--medium modal--signup modal--js-signup">
        <div className="modal_inner">
          <div
            onClick={() => {
              this.handleClickOutside()
            }}
            className="modal_close js-modal-close">
            {'×'}
          </div>
          {this.renderDialog()}
        </div>
      </div>
    )
  }

  handleClickOutside = () => {
    this.props.dismissAppOverlayAction()
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UserLoginLayout)
