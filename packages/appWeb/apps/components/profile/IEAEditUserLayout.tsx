import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { showAlertMessage } from '@appActions/index' // from '@web/actions'
import { uploadLoggedUser } from '@web/actions'
import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions
import { ReducerHelper } from '@app/library' //  '@app/libs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IIEAEditUserLayoutStateProps {
  authModel: IAuthModelState
}

interface IIEAEditUserLayoutDispatchProps {
  actions: any
  uploadLoggedUserAction: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEAEditUserLayoutProps
  extends IIEAEditUserLayoutStateProps,
  IIEAEditUserLayoutDispatchProps {
  pageForm: string
  userProfile: IParseModelUsers
}

interface IIEAEditUserLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAEditUserLayoutPropsWithRouter = IIEAEditUserLayoutProps & IIEAEditUserLayoutWithRouterProps

interface IIEAEditUserLayoutState {
  value: any
  pageForm: string
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch),
    uploadLoggedUserAction: (object) => dispatch(uploadLoggedUser(object)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    authModel: store.authModel
  }
}

@(withRouter as any)
class IEAEditUserLayout extends React.Component<IIEAEditUserLayoutProps, IIEAEditUserLayoutState> {
  constructor(props: IIEAEditUserLayoutProps, context) {
    super(props)
    const { userProfile, pageForm } = props
    this.state = {
      pageForm,
      value: {
        username: userProfile.username || '',
        email: userProfile.email || ''
      }
    }
    props.actions.editUserState()
    props.actions.onAuthFormFieldChange('username', userProfile.username || '', true)
    props.actions.onAuthFormFieldChange('email', userProfile.email || '', true)
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextProps: IIEAEditUserLayoutProps) {
    this.setState({
      value: {
        username: nextProps.authModel.form.fields.username,
        email: nextProps.authModel.form.fields.email
      }
    })
  }

  /**
   * ### onChange
   *
   * As the user enters keys, this is called for each key stroke.
   * Rather then publish the rules for each of the fields, I find it
   * better to display the rules required as long as the field doesn't
   * meet the requirements.
   * *Note* that the fields are validated by the authReducer
   */
  onChange(value) {
    if (value.username !== '') {
      this.props.actions.onAuthFormFieldChange('username', value.username)
    }
    if (value.email !== '') {
      this.props.actions.onAuthFormFieldChange('email', value.email)
    }
    this.setState({
      value
    })
  }

  renderLeft() {
    return (
      <Telescope.EditUserForm
        form={this.props.authModel.form}
        value={this.state.value}
        onChange={this.onChange.bind(this)}
      />
    )
  }

  async onButtonPress() {
    const { userProfile, uploadLoggedUserAction } = this.props
    const parseId = userProfile.id
    const username = this.props.authModel.form.fields.username
    const email = this.props.authModel.form.fields.email
    this.props.actions.loginRequest()
    try {
      await Promise.race([
        uploadLoggedUserAction({
          parseId,
          username,
          email
        }),
        timeout(15000)
      ])
    } catch (e) {
      const message = e.message || e
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        this.props.showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_ERROR,
          text: message
        })
      }
    } finally {
      this.props.actions.loginSuccess()
    }
  }

  renderLeftButton() {
    const isDisabled = ReducerHelper.authModelDisabled(this.props)
    return (
      <div className="form-footer">
        <button
          onClick={this.onButtonPress.bind(this)}
          disabled={isDisabled}
          id="submit-biz-details-changes"
          name="action_submit"
          type="submit"
          value="Submit Changes"
          className="ybtn ybtn--primary">
          <span>{'Save Changes'}</span>
        </button>
        <a onClick={(e: any) => { }}>{'Cancel'}</a>
      </div>
    )
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="clearfix layout-block layout-n column--responsive account-settings_container">
            <div className="column column-beta column--responsive">
              <div className="account-settings_content">
                <div className="section-header clearfix">
                  <h2>Profile</h2>
                </div>

                <div className="profile-bio yform yform-vertical-spacing">
                  <div className="profile-bio">
                    <Telescope.EditUserProfilePhoto {...this.props} />

                    {this.renderLeft()}

                    {this.renderLeftButton()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditUserLayout)
