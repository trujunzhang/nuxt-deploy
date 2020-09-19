import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { CreatorHelper, Photos } from '@app/library' //  '@app/libs'
import * as Types from '@app/types'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import { withRouter } from 'next/router'

import {
  AppLinks,
  PhotoBrowser,
  PhotoBrowserSelectionHelper,
  PhotosScrollHelper
} from '@appUtils/index'

import { Link, Router } from '@web/server/routes'
import { connect } from 'react-redux'

interface IF8PhotosCollectionItemViewStateProps {
  currentUser: IParseModelUsers
  photosOverlay: IPhotosOverlayState
  listContainerTasks: IListContainerTasks
}

interface IF8PhotosCollectionItemViewDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IF8PhotosCollectionItemViewProps
  extends IF8PhotosCollectionItemViewStateProps,
  IF8PhotosCollectionItemViewDispatchProps {
  // (6)
  objectSchemaName: string
  forObject: any
  photo: IParseModelPhotos
  photoTitleType: string
  onOwnPhotoForRecipes: any
  onShowRemoveConfirmDialogPress: (photo: IParseModelPhotos) => any
}

interface IF8PhotosCollectionItemViewWithRouterProps {
  router: IWebAppRouterProps
}

type F8PhotosCollectionItemViewPropsWithRouter = IF8PhotosCollectionItemViewProps &
  IF8PhotosCollectionItemViewWithRouterProps

interface IF8PhotosCollectionItemViewState {
  photoInfo: IPhotoBrowserItemInfo
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
    photosOverlay: store.photosOverlay,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class F8PhotosCollectionItemView extends React.Component<
IF8PhotosCollectionItemViewProps,
IF8PhotosCollectionItemViewState
> {
  constructor(props: IF8PhotosCollectionItemViewProps, context) {
    super(props)
    const { photo } = props
    const { router } = props as F8PhotosCollectionItemViewPropsWithRouter
    const photoInfo: IPhotoBrowserItemInfo = PhotosScrollHelper.getSinglePhotoItemInfo({
      photo,
      router
    })
    this.state = {
      photoInfo
    }
  }

  componentWillReceiveProps(nextProps: IF8PhotosCollectionItemViewProps) {
    const { photosOverlay } = nextProps
    if (!!photosOverlay.ownedUserPhoto) {
      if (
        PhotoBrowser.shouldUpdatePhotoItem({
          photosOverlay: nextProps.photosOverlay,
          photo: nextProps.photo,
          photoInfo: this.state.photoInfo
        })
      ) {
        const { router } = nextProps as F8PhotosCollectionItemViewPropsWithRouter
        const photoInfo: IPhotoBrowserItemInfo = PhotosScrollHelper.getSinglePhotoItemInfo({
          photo: photosOverlay.ownedUserPhoto,
          router
        })
        this.setState({
          photoInfo
        })
      }
    }
  }

  renderLeftTopForRecipe(photo: IParseModelPhotos) {
    const { forObject } = this.props

    const isOwner: boolean = Photos.isPhotoOwnRecipe(forObject.id, photo)
    const fillColor = isOwner ? '#00c3f3' : '#aaa'
    return (
      <button
        className="chiclet-link u-cursor-pointer js-delete-review-draft"
        onClick={() => {
          this.props.onOwnPhotoForRecipes(photo)
        }}
        id="photos-browser-cell-item-button-selector">
        <span id="icon_18X18" className="icon icon--18-trash icon--size-18 icon--currentColor">
          <svg width={18} height={18} viewBox="0 0 18 18" version="1.1">
            <g
              transform="matrix(0.102758, 0, 0, 0.093653, 2.97497, 3.447575)"
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd">
              <path
                d="M146.764,17.379c-2.93-2.93-7.679-2.929-10.606,0.001L68.852,84.697L37.847,53.691c-2.93-2.929-7.679-2.93-10.606-0.001   c-2.93,2.929-2.93,7.678-0.001,10.606l36.309,36.311c1.407,1.407,3.314,2.197,5.304,2.197c1.989,0,3.897-0.79,5.304-2.197   l72.609-72.622C149.693,25.057,149.693,20.308,146.764,17.379z"
                fill={fillColor}
              />
              <path
                d="M130.57,65.445c-4.142,0-7.5,3.357-7.5,7.5v55.57H15V20.445h85.57c4.143,0,7.5-3.357,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5   H7.5c-4.142,0-7.5,3.357-7.5,7.5v123.07c0,4.143,3.358,7.5,7.5,7.5h123.07c4.143,0,7.5-3.357,7.5-7.5v-63.07   C138.07,68.803,134.713,65.445,130.57,65.445z"
                fill={fillColor}
              />
            </g>
          </svg>
        </span>
      </button>
    )
  }

  renderLeftTopTrash(photo: IParseModelPhotos) {
    return (
      <button
        className="chiclet-link u-cursor-pointer show-tooltip js-delete-review-draft"
        onClick={() => {
          this.props.onShowRemoveConfirmDialogPress(photo)
        }}
        id="photos-browser-cell-item-button-trash">
        <span id="icon_18X18" className="icon icon--18-trash icon--size-18 icon--currentColor">
          <svg className="icon_svg">
            <path d="M3 5V3h4V2h4v1h4v2H3zm11 9c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6h10v8zM8 8.5a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5zm3 0a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5z" />
          </svg>
        </span>
      </button>
    )
  }

  renderOverLayForUserProfile(photoInfo: IPhotoBrowserItemInfo, photo) {
    const { overlay } = photoInfo
    return (
      <div className="photo-box-overlay js-overlay">
        <div className="media-block photo-box-overlay_caption">
          <div className="media-story" id="photos-browser">
            <Link prefetch route={overlay.linkUrl}>
              <a className="photo-desc margin-right-4">{overlay.title}</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  onPhotoCommonOverlayPress(creator: IParseModelUsers) {
    const userLink = AppLinks.geDetailedModelLinkByObjectSchemaName(
      Types.model.PARSE_USERS,
      creator
    )

    Router.pushRoute(userLink)
  }

  /**
   * Render default overlay.
   *
   * @param overlay
   * @returns
   */
  renderOverLayForCommon(overlay: IPhotoBrowserItemOverlay) {
    // TODO: DJZHANG(25/12/2018)
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(overlay)
    const { listContainerTasks } = this.props

    /* console.log(' render photo creator:', user) */

    return (
      <div className="photo-box-overlay js-overlay">
        <div className="media-block photo-box-overlay_caption">
          <Telescope.F8ImagesSlideShowView
            key={user.id}
            altValue={user.displayName}
            forObject={user}
            objectSchemaName={Types.model.PARSE_USERS}
            imageSize={30}
            listPhotosDict={listContainerTasks.usersPhotosDict}
          />

          <div className="media-story" id="photos-browser">
            <span className="author">
              {'by'}
              <a
                onClick={() => {
                  this.onPhotoCommonOverlayPress(user)
                }}
                className="user-display-name js-analytics-click margin-left-4"
                id="dropdown_user-name">
                {user.displayName}
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }

  onPhotoItemPress() {
    const { photo } = this.props
    const { forObject, objectSchemaName, photoTitleType } = this.props
    if (photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_ORGANIZATION_RECIPE_TITLE) {
      return
    }
    const { pushNewPhotosAsSingleAction } = this.props

    const { router } = this.props as F8PhotosCollectionItemViewPropsWithRouter
    const linkObject = PhotoBrowserSelectionHelper.getPhotosBrowserSelectionLink({
      photo,
      objectSchemaName,
      forObject,
      router
    })
    pushNewPhotosAsSingleAction(linkObject.query.select, '')
    const as = `${linkObject.pathname}?select=${linkObject.query.select}`
    Router.push(
      {
        pathname: router.pathname,
        query: router.query
      },
      as,
      {
        shallow: true
      }
    )
  }

  render() {
    const { photoInfo } = this.state
    const { photo, forObject, objectSchemaName, photoTitleType } = this.props
    const { router } = this.props as F8PhotosCollectionItemViewPropsWithRouter

    // const linkProps =
    //   photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_ORGANIZATION_RECIPE_TITLE
    //     ? {}
    //     : {
    //         href: AppLinks.getPhotosBrowserSelectionLinkxxx({
    //           photo,
    //           objectSchemaName,
    //           forObject,
    //           router
    //         })
    //       }
    return (
      <li className="photos-browser-item" key={photo.id}>
        <div className="photo-box photo-box--interactive">
          <a onClick={this.onPhotoItemPress.bind(this)}>
            <img
              className="photo-box-img"
              width={150}
              height={150}
              src={Photos.getPhotoThumbnailUrl(photo)}
            />
          </a>

          {photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE &&
            this.renderLeftTopTrash(photo)}
          {photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_ORGANIZATION_RECIPE_TITLE &&
            this.renderLeftTopForRecipe(photo)}

          {photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE &&
            this.renderOverLayForUserProfile(photoInfo, photo)}
          {photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_NORMAL_TITLE &&
            this.renderOverLayForCommon(photoInfo.overlay)}
        </div>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8PhotosCollectionItemView)
