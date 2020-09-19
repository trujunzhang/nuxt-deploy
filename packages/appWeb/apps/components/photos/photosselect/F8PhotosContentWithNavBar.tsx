import * as React from 'react'
import { withRouter } from 'next/router'
import * as Telescope from '@appComponents/index'
import { PhotoBrowser } from '@appUtils/index'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'

const classNames = require('classnames')

interface IF8PhotosContentWithNavBarStateProps {
  currentUser: ParseModelUsersWithNull
  photosOverlay: IPhotosOverlayState
}

interface IF8PhotosContentWithNavBarDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IF8PhotosContentWithNavBarProps
  extends IF8PhotosContentWithNavBarStateProps,
  IF8PhotosContentWithNavBarDispatchProps {
  contentClass: string
  photoBrowserType: string
}

interface IF8PhotosContentWithNavBarWithRouterProps {
  router: IWebAppRouterProps
}

type F8PhotosContentWithNavBarPropsWithRouter = IF8PhotosContentWithNavBarProps &
  IF8PhotosContentWithNavBarWithRouterProps

interface IF8PhotosContentWithNavBarState {
  photoNavBarModel: PhotoNavBarModelWithNull
}

function mapDispatchToProps(dispatch) {
  return {
    pushNewPhotosAsSingleAction: (photoId: string, hashCode: string) =>
      dispatch(pushNewPhotosAsSingle(photoId, hashCode))
  }
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user,
    photosOverlay: store.photosOverlay
  }
}

@(withRouter as any)
class F8PhotosContentWithNavBar extends React.Component<
IF8PhotosContentWithNavBarProps,
IF8PhotosContentWithNavBarState
> {
  constructor(props: IF8PhotosContentWithNavBarProps, context) {
    super(props)

    const { photosOverlay, photoBrowserType } = props
    const { router } = props as F8PhotosContentWithNavBarPropsWithRouter
    const photoNavBarModel: PhotoNavBarModelWithNull = PhotoBrowser.getNavBarModel({
      router,
      photosOverlay: photosOverlay,
      photoBrowserType: photoBrowserType
    })

    this.state = {
      photoNavBarModel
    }
    // console.log('constructor,', photoNavBarModel)
  }

  componentWillReceiveProps(nextProps: IF8PhotosContentWithNavBarProps) {
    const { router } = nextProps as F8PhotosContentWithNavBarPropsWithRouter
    const { photosOverlay, photoBrowserType } = nextProps
    const photoNavBarModel = PhotoBrowser.getNavBarModel({
      router,
      photosOverlay: photosOverlay,
      photoBrowserType: photoBrowserType
    })

    // console.log('nav selected, ', nextProps)
    // console.log('nav selected, ', photoNavBarModel)

    this.setState({
      photoNavBarModel
    })
  }

  updatePhotoNavBarModel(newSelectedPhotoId: string) {
    const { router } = this.props as F8PhotosContentWithNavBarPropsWithRouter
    const { photosOverlay, photoBrowserType } = this.props

    const photoNavBarModel = PhotoBrowser.getNavBarModel({
      router,
      photosOverlay: photosOverlay,
      photoBrowserType: photoBrowserType,
      newSelectedPhotoId
    })
    this.setState({ photoNavBarModel })
    // console.log('will Receive,', photoNavBarModel)
  }

  renderPreIcon() {
    const { photoNavBarModel } = this.state
    const havePreIcon = !!photoNavBarModel && photoNavBarModel.hasPreIcon
    const preClass = classNames('media-nav_link media-nav_link--prev js-media-nav_link--prev ', {
      'is-disabled': !havePreIcon
    })
    const linkProps = havePreIcon
      ? {
        onClick: (e) => {
          const { router } = this.props as F8PhotosContentWithNavBarPropsWithRouter
          const newPhotoId = PhotoBrowser.onPreIconClick({
            pushNewPhotosAsSingleAction: this.props.pushNewPhotosAsSingleAction,
            router,
            photosOverlay: this.props.photosOverlay,
            photoBrowserType: this.props.photoBrowserType
          })
          this.updatePhotoNavBarModel(newPhotoId)
        }
      }
      : {}
    return (
      <a {...linkProps} className={preClass} title="Prev">
        <span
          id="icon_48X48"
          className="icon icon--48-chevron-left icon--size-48 icon--inverse icon--fallback-inverted">
          <svg className="icon_svg">
            <path d="M29.414 5.992c.566 0 1.137.192 1.614.588 1.115.925 1.296 2.613.404 3.77L20.902 24l10.53 13.65c.892 1.156.71 2.844-.404 3.77-1.116.924-2.743.737-3.635-.42L15.57 25.675a2.76 2.76 0 0 1 0-3.35L27.394 6.998a2.548 2.548 0 0 1 2.02-1.008z" />
          </svg>
        </span>
      </a>
    )
  }

  onNextIconClick() {
    const { router } = this.props as F8PhotosContentWithNavBarPropsWithRouter
    const newPhotoId = PhotoBrowser.onNextIconClick({
      pushNewPhotosAsSingleAction: this.props.pushNewPhotosAsSingleAction,
      router,
      photosOverlay: this.props.photosOverlay,
      photoBrowserType: this.props.photoBrowserType
    })
    this.updatePhotoNavBarModel(newPhotoId)
  }

  renderNextIcon() {
    const { photoNavBarModel } = this.state
    const haveNextIcon = !!photoNavBarModel && photoNavBarModel.hasNextIcon

    const nextClass = classNames('media-nav_link media-nav_link--next js-media-nav_link--next ', {
      'is-disabled': !haveNextIcon
    })
    const linkProps = haveNextIcon
      ? {
        onClick: (e: any) => {
          this.onNextIconClick()
        }
      }
      : {}
    return (
      <a {...linkProps} className={nextClass} title="Next">
        <span
          id="icon_48X48"
          className="icon icon--48-chevron-right icon--size-48 icon--inverse icon--fallback-inverted">
          <svg className="icon_svg">
            <path d="M18.586 42.008a2.518 2.518 0 0 1-1.614-.588c-1.115-.925-1.296-2.613-.404-3.77L27.098 24l-10.53-13.65c-.892-1.156-.71-2.844.404-3.77 1.116-.924 2.743-.737 3.635.42L32.43 22.325a2.76 2.76 0 0 1 0 3.35L20.606 41.002a2.548 2.548 0 0 1-2.02 1.008z" />
          </svg>
        </span>
      </a>
    )
  }

  render() {
    const { photoNavBarModel } = this.state

    if (photoNavBarModel === undefined || !photoNavBarModel) {
      return null
    }

    return (
      <div className={this.props.contentClass}>
        <div className="media-container js-media-container">
          <div className="media-details-grid">
            <Telescope.F8PhotosSelectLeftPanel
              onNextIconClick={this.onNextIconClick.bind(this)}
              photoNavBarModel={photoNavBarModel}
            />

            <Telescope.F8PhotosSelectRightPanel
              photoNavBarModel={photoNavBarModel}
              photoBrowserType={this.props.photoBrowserType}
            />
          </div>
        </div>

        <div className="media-nav js-media-nav">
          {this.renderPreIcon()}
          {this.renderNextIcon()}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8PhotosContentWithNavBar)
