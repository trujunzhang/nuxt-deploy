import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Router } from '@web/server/routes'
import { connect } from 'react-redux'
import { CreatorHelper } from '@app/library' //  '@app/libs'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import { ReviewsLinker } from '@appUtils/index'

interface IF8SingleHeaderRightPhotoItemStateProps {
  listContainerTasks: IListContainerTasks
}

interface IF8SingleHeaderRightPhotoItemDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IF8SingleHeaderRightPhotoItemProps
  extends IF8SingleHeaderRightPhotoItemStateProps,
  IF8SingleHeaderRightPhotoItemDispatchProps {
  forObject: any
  item: IPhotoBrowserItemInfo
  index: number
  photosListTask: IListWithPhotosDictTask
  photoIndex: number
}

interface IF8SingleHeaderRightPhotoItemWithRouterProps {
  router: IWebAppRouterProps
}

type F8SingleHeaderRightPhotoItemPropsWithRouter = IF8SingleHeaderRightPhotoItemProps &
  IF8SingleHeaderRightPhotoItemWithRouterProps

function mapDispatchToProps(dispatch) {
  return {
    pushNewPhotosAsSingleAction: (photoId: string, hashCode: string = '') =>
      dispatch(pushNewPhotosAsSingle(photoId, hashCode))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class F8SingleHeaderRightPhotoItem extends React.Component<IF8SingleHeaderRightPhotoItemProps, {}> {
  onImageLinkPress = () => {
    const { router } = this.props as F8SingleHeaderRightPhotoItemPropsWithRouter

    const item: IPhotoBrowserItemInfo = this.props.item
    const linkObject: ILinkModel = item.linkObject
    const selectedId = linkObject.query.select
    this.props.pushNewPhotosAsSingleAction(selectedId)

    const nextAsPath = ReviewsLinker.getUrlWithSort({
      router,
      linkObject,
      selectedId
    })
    console.log('nextAsPath: ', nextAsPath)
    Router.push(
      {
        pathname: router.pathname,
        query: router.query
      },
      nextAsPath,
      {
        shallow: true
      }
    )
  }

  /**
   * alt='Photo of My Two Cents - Los Angeles, CA, United States. BBQ fried chicken with fries and sweet potato crumble'
   * @returns {XML}
   */
  render() {
    const { item, index } = this.props
    const { overlay } = item
    return (
      <div key={item.photoId} className={`js-photo photo photo-${index + 1}`}>
        <div className="showcase-photo-box" id="single-header-right-photo-item">
          <a onClick={this.onImageLinkPress}>
            <img
              alt={`Photos of ${overlay.title}`}
              className="photo-box-img"
              width={250}
              height={250}
              src={item.imageUrl}
            />
          </a>
        </div>

        {this.renderOverLay()}
      </div>
    )
  }

  renderAvatar() {
    const { photosListTask, photoIndex } = this.props
    const photos = photosListTask.results
    const photo: IParseModelPhotos = photos[photoIndex]
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(photo)
    return (
      <Telescope.F8ImagesSlideShowView
        key={user.id}
        altValue={user.displayName}
        forObject={user}
        objectSchemaName={Types.model.PARSE_USERS}
        imageSize={30}
        listPhotosDict={this.props.listContainerTasks.usersPhotosDict}
      />
    )
  }

  onOverLayPress = () => {
    const { user } = this.props.item.overlay
    const userLink = user.userProfileUrl
    if (!!userLink) {
      Router.pushRoute(userLink)
    }
  }

  renderOverLay() {
    const { user } = this.props.item.overlay
    return (
      <div className="photo-box-overlay js-overlay">
        <div className="media-block photo-box-overlay_caption">
          {this.renderAvatar()}

          <div className="media-story" id="photos-browser">
            <span className="author">
              {'by'}

              <a
                onClick={this.onOverLayPress}
                className="user-display-name margin-left-4"
                id="dropdown_user-name">
                {user.displayName}
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8SingleHeaderRightPhotoItem)
