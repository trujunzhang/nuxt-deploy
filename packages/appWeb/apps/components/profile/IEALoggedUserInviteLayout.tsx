import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { ReducerHelper, Users } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import { callCloudInviteEmailMethod, showAlertMessage } from '@appActions/index' // from '@web/actions'
import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authParseActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IIEALoggedUserInviteLayoutStateProps {
  currentUser: IParseModelUsers
  authModel: IAuthModelState
}

interface IIEALoggedUserInviteLayoutDispatchProps {
  actions: any
  callCloudInviteEmailMethodAction: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEALoggedUserInviteLayoutProps
  extends IIEALoggedUserInviteLayoutStateProps,
  IIEALoggedUserInviteLayoutDispatchProps { }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authParseActions, dispatch),
    callCloudInviteEmailMethodAction: (params, toEmailsObject) =>
      dispatch(callCloudInviteEmailMethod(params, toEmailsObject)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    currentUser: store.authSession.user,
    authModel: store.authModel
  }
}

@(withRouter as any)
class IEALoggedUserInviteLayout extends React.Component<IIEALoggedUserInviteLayoutProps, {}> {
  constructor(props: IIEALoggedUserInviteLayoutProps, context) {
    super(props)
    props.actions.inviteState()
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextProps: IIEALoggedUserInviteLayoutProps) { }

  async onButtonPress() {
    const { showAlertMessageAction, callCloudInviteEmailMethodAction, currentUser } = this.props
    const homepage = AppConstants.ieattaWeb
    const username = currentUser.username
    const fromEmail = currentUser.email
    const userLink = homepage + AppLinks.getLoggedUserMenuLink(currentUser)
    const toEmailsObject = Users.getInviteEmailObject(this.props)
    if (toEmailsObject.size === 0) {
      showAlertMessageAction({
        type: Types.alertType.ALERT_TYPE_ERROR,
        text: 'At least, one email to invite!'
      })
      return
    }
    const params = {
      username,
      userLink,
      homepage,
      fromEmail
    }
    this.props.actions.loginRequest()
    let errorMessage = null
    try {
      await Promise.race([callCloudInviteEmailMethodAction(params, toEmailsObject), timeout(15000)])
    } catch (e) {
      const message = e.message || e
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        errorMessage = message
      }
    } finally {
      if (!!errorMessage) {
        showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_ERROR,
          text: errorMessage
        })
        this.props.actions.loginFailure()
      } else {
        this.props.actions.loginSuccess()
        showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_SUCCESS,
          text: `Sent ${toEmailsObject.size} emails successfully!`
        })
      }
    }
  }

  renderInvitePanel() {
    const { authModel } = this.props
    const isDisabled = ReducerHelper.authModelDisabled(this.props)
    return (
      <div className="column column-beta column--responsive">
        <div id="msf-step-container" className="find-friends inner-content clearfix">
          <span id="step-name" className="hidden">
            email_invite
          </span>
          <div className="section-header">
            <h2>Send IEATTA Invites To These Email Addresses:</h2>
          </div>

          <div className="yform email-invite-form">
            <div className="content-field">
              <ul id="emails">
                <li>
                  <label>Email address</label>
                  <input
                    id="email-invite-0"
                    type="email"
                    name="contacts"
                    value={authModel.form.fields.email}
                    onChange={(event: any) => {
                      this.props.actions.onAuthFormFieldChange('email', event.target.value)
                    }}
                    placeholder="e.g. bob@email.com"
                    className="first_invite_email_input"
                  />
                </li>
                <li>
                  <label className="u-offscreen">Email address</label>
                  <input
                    type="email"
                    name="contacts"
                    value={authModel.form.fields.email1}
                    onChange={(event: any) => {
                      this.props.actions.onAuthFormFieldChange('email1', event.target.value)
                    }}
                    id="email-invite-1"
                  />
                </li>
                <li>
                  <label className="u-offscreen">Email address</label>
                  <input
                    type="email"
                    name="contacts"
                    value={authModel.form.fields.email2}
                    onChange={(event: any) => {
                      this.props.actions.onAuthFormFieldChange('email2', event.target.value)
                    }}
                    id="email-invite-2"
                  />
                </li>
              </ul>
            </div>
            <div className="content-field">
              <div className="action-buttons">
                <button
                  // type="buttom"
                  value="submit"
                  onClick={this.onButtonPress.bind(this)}
                  disabled={isDisabled}
                  className="ybtn ybtn--primary disable-on-submit">
                  <span>Send Email Invites</span>
                </button>

                {authModel.form.isFetching && (
                  <span className="throbber show-on-submit">{'Sending email invites...'}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container find-friends_container">
            <Telescope.F8AppAlertSection />

            <div className="clearfix layout-block layout-n equalize-columns">
              {this.renderInvitePanel()}
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
)(IEALoggedUserInviteLayout)
