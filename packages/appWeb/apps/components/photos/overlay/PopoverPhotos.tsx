import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'

interface IPopoverPhotosStateProps {
  photosOverlay: IPhotosOverlayState
}

interface IPopoverPhotosDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IPopoverPhotosProps extends IPopoverPhotosStateProps, IPopoverPhotosDispatchProps { }

interface IPopoverPhotosState {
  showPhoto: any
}

function mapDispatchToProps(dispatch) {
  return {
    pushNewPhotosAsSingleAction: (photoId: string, hashCode: string) =>
      dispatch(pushNewPhotosAsSingle(photoId, hashCode))
  }
}

function mapStateToProps(store) {
  return {
    photosOverlay: store.photosOverlay
  }
}

class PopoverPhotos extends React.Component<IPopoverPhotosProps, IPopoverPhotosState> {
  constructor(props: IPopoverPhotosProps) {
    super(props)
    this.state = {
      showPhoto: null
    }
  }

  componentWillReceiveProps(nextProps: IPopoverPhotosProps) {
    const { photosOverlay } = nextProps
    const { currentPhoto } = photosOverlay
    this.setState({
      showPhoto: currentPhoto
    })
  }

  render() {
    const { showPhoto } = this.state
    if (!!showPhoto) {
      return (
        <Telescope.IEAPhotosSelectionLayout
          photoBrowserType={Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP}
        />
      )
    }
    return null
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopoverPhotos)
