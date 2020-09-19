import * as React from 'react'
import { connect } from 'react-redux'
import { checkedLogoutStatus } from '@appActions/index' // from '@web/actions'
import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import { withRouter } from 'next/router'

interface IUserLogOutStateProps {
  currentUser: IParseModelUsers
}

interface IUserLogOutDispatchProps {
  checkedLogoutStatusAction: any
}

interface IUserLogOutProps extends IUserLogOutStateProps, IUserLogOutDispatchProps {
  toggleEvent: any
}

interface IUserLogOutState { }

function mapDispatchToProps(dispatch) {
  return {
    checkedLogoutStatusAction: () => dispatch(checkedLogoutStatus())
  }
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

interface IUserLogOutWithRouterProps {
  router: IWebAppRouterProps
}

type UserLogOutPropsWithRouter = IUserLogOutProps & IUserLogOutWithRouterProps

@(withRouter as any)
class UserLogOut extends React.Component<IUserLogOutProps, IUserLogOutState> {
  constructor(props: IUserLogOutProps) {
    super(props)
    this.state = {}
  }

  async onButtonPress() {
    await ParseObjects.ParseUsers.userLogOut()
    this.props.checkedLogoutStatusAction()
    const { router } = this.props as UserLogOutPropsWithRouter
    router.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div className="login">
        <div className="signup-form-container">
          <div className="header">
            <h2>Log out to IEATTA</h2>
          </div>
        </div>
        {this.renderForm()}
      </div>
    )
  }

  renderForm() {
    return (
      <div className="yform" id="ajax-login">
        <button
          disabled={!this.props.currentUser}
          type="submit"
          onClick={this.onButtonPress.bind(this)}
          value="submit"
          className="ybtn ybtn--primary submit ybtn-full">
          <span>Log Out</span>
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogOut)
