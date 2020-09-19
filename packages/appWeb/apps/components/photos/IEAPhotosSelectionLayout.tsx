import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import { AppLinks } from '@appUtils/index'
import { dismissAllOverlayPhotos } from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'

interface IIEAPhotosSelectionLayoutStateProps { }

interface IIEAPhotosSelectionLayoutDispatchProps {
  dismissAllOverlayPhotosAction: any
}

interface IIEAPhotosSelectionLayoutProps
  extends IIEAPhotosSelectionLayoutStateProps,
  IIEAPhotosSelectionLayoutDispatchProps {
  photoBrowserType: string
  selectedPhotoId?: string
}

interface IIEAPhotosSelectionLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPhotosSelectionLayoutPropsWithRouter = IIEAPhotosSelectionLayoutProps &
  IIEAPhotosSelectionLayoutWithRouterProps

interface IIEAPhotosSelectionLayoutState { }

function mapDispatchToProps(dispatch) {
  return {
    dismissAllOverlayPhotosAction: () => dispatch(dismissAllOverlayPhotos())
  }
}

@(withRouter as any)
class IEAPhotosSelectionLayout extends React.Component<
IIEAPhotosSelectionLayoutProps,
IIEAPhotosSelectionLayoutState
> {
  constructor(props: IIEAPhotosSelectionLayoutProps) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps: IIEAPhotosSelectionLayoutProps) {
    this.setState({})
  }

  onCloseIconPress = (e) => {
    e.preventDefault()
    this.props.dismissAllOverlayPhotosAction()
    AppLinks.restoreRouterAsShadow(this.props as IEAPhotosSelectionLayoutPropsWithRouter)
  }

  renderCloseButton() {
    return (
      <a onClick={this.onCloseIconPress} className="lightbox-close">
        {'Close'}
        <span
          className="icon icon--24-close icon--size-24 icon--currentColor u-space-l-half"
          id="icon_24X24">
          <svg className="icon_svg">
            <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z" />
          </svg>
        </span>
      </a>
    )
  }

  renderContent() {
    return (
      <div className="media-lightbox">
        <div className="media-details js-media-details js-media-details-template">
          <Telescope.F8PhotosSelectPage onCloseIconPress={this.onCloseIconPress} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id="lightbox" className="lightbox is-enabled lightbox--media-details">
        <div id="lightbox-inner" className="lightbox-inner">
          {this.renderCloseButton()}
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(IEAPhotosSelectionLayout)
