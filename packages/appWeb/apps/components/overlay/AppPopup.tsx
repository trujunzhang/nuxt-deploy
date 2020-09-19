import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from '@app/types'

interface IAppPopupStateProps {}

interface IAppPopupDispatchProps {
  detailedModelsOverlay: IDetailedModelsOverlayState
}

interface IAppPopupProps extends IAppPopupStateProps, IAppPopupDispatchProps {}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(store) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay
  }
}

class AppPopup extends React.Component<IAppPopupProps, any> {
  renderMenu(overlayModel: IOverlayModel) {
    switch (overlayModel.overLayType) {
      case Types.popup.OVERLAY_TYPE_LOGIN_UI:
        return <Telescope.UserLoginLayout model={overlayModel} />
      default:
        return null
    }
  }

  render() {
    const { detailedModelsOverlay } = this.props
    const { overlayModel } = detailedModelsOverlay
    if (!!overlayModel) {
      return this.renderMenu(overlayModel)
    }
    return null
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPopup)
