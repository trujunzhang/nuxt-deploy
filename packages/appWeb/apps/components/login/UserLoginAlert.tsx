import * as React from 'react'
import { connect } from 'react-redux'

interface IUserLoginAlertProps {
  authModel: IAuthModelState
}

interface IUserLoginAlertState {}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(store) {
  return {
    authModel: store.authModel
  }
}

class UserLoginAlert extends React.Component<IUserLoginAlertProps, IUserLoginAlertState> {
  renderAlert() {
    const { alert } = this.props.authModel.form
    if (!!alert) {
      const text = alert.message
      const currentType = 'error'
      return (
        <div className={`alert alert-${currentType}`}>
          <p className={`alert-${currentType}`}>{text}</p>
        </div>
      )
    }
    return null
  }
  render() {
    return (
      <div id="alert-container" style={{ height: '72px' }} className="layout-alert">
        {this.renderAlert()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginAlert)
