import * as React from 'react'
import { dismissAlertMessage } from '@appActions/index' // from '@appActions/index' 
import { connect } from 'react-redux'

const ALERTCLASS = {
  ALERT_TYPE_SUCCESS: 'success',
  ALERT_TYPE_ERROR: 'error',
  ALERT_TYPE_INFO: 'info'
}

interface IF8AppAlertSectionStateProps {
  appAlert: IAlertState
}

interface IF8AppAlertSectionDispatchProps {
  dismissAlertMessageAction: any
}

interface IF8AppAlertSectionProps
  extends IF8AppAlertSectionStateProps,
  IF8AppAlertSectionDispatchProps {
  alwaysBeShown?: boolean
}

function mapDispatchToProps(dispatch) {
  return {
    dismissAlertMessageAction: () => dispatch(dismissAlertMessage())
  }
}

function mapStateToProps(store) {
  return {
    appAlert: store.appAlert
  }
}

class F8AppAlertSection extends React.Component<IF8AppAlertSectionProps, {}> {
  renderAlert(message: IAlertMessage) {
    const { type, text } = message
    const currentType = ALERTCLASS[type]
    return (
      <div className={`alert alert-${currentType}`}>
        <a
          onClick={() => {
            this.props.dismissAlertMessageAction()
          }}
          className="js-alert-dismiss dismiss-link">
          {'×'}
        </a>
        <p className={`alert-${currentType}`}>{text}</p>
      </div>
    )
  }

  render() {
    const { alwaysBeShown, appAlert } = this.props

    if (!!appAlert.message) {
      return (
        <div id="alert-container" className="layout-block">
          {this.renderAlert(appAlert.message)}
        </div>
      )
    } else if (alwaysBeShown) {
      return <div id="alert-container" className="layout-block" style={{ height: '72px' }} />
    }

    return null
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8AppAlertSection)
