import * as React from 'react'
import { Photos } from '@app/library' //  '@app/libs'
import { Router } from '@web/server/routes'
import { AppLinks, ImagesSlideShowViewHelper } from '@appUtils/index'
import { AppAvatar } from '@appShared/AppAvatar'
import * as Types from '@app/types'

interface IF8ImagesSlideShowViewProps {
  altValue: string
  listPhotosDict: IListPhotosDict<string>
  objectSchemaName: string
  forObject: any
  imageSize?: number
  slideShowType?: string
}

interface IF8ImagesSlideShowViewDefaultProps {
  imageSize: number
  slideShowType: string
}

type F8ImagesSlideShowViewPropsWithDefaults = IF8ImagesSlideShowViewProps &
  IF8ImagesSlideShowViewDefaultProps

interface IF8ImagesSlideShowViewState {
  slideObject: ISlideShowObject
}

export class F8ImagesSlideShowView extends React.Component<
  IF8ImagesSlideShowViewProps,
  IF8ImagesSlideShowViewState
> {
  public static defaultProps: Partial<F8ImagesSlideShowViewPropsWithDefaults> = {
    imageSize: 60,
    slideShowType: Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_NORMAL
  }

  constructor(props: IF8ImagesSlideShowViewProps, context) {
    super(props)
    const { listPhotosDict, objectSchemaName, forObject } = props
    const slideObject = ImagesSlideShowViewHelper.generateSlideShowObject({
      listPhotosDict,
      objectSchemaName,
      forObject
    })
    this.state = {
      slideObject
    }
  }

  renderImage() {
    const { imageSize, slideShowType } = this.props as F8ImagesSlideShowViewPropsWithDefaults

    const { slideObject } = this.state
    const { emptyList, photoUrl, placeholder } = slideObject

    const { altValue, forObject, objectSchemaName } = this.props

    switch (slideShowType) {
      case Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_USER_AVATOR:
      case Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_LEFT_LIST_USER_AVATOR: {
        return (
          <AppAvatar round={false} photoUrl={photoUrl} forObject={forObject} size={imageSize} />
        )
      }
    }

    if (emptyList) {
      return (
        <img
          key={`emptyItem-for-${objectSchemaName}-${forObject.id}`}
          alt={altValue}
          className="photo-box-img"
          width={imageSize}
          height={imageSize}
          src={placeholder}
        />
      )
    }
    return (
      <img
        key={`item-for-${objectSchemaName}-${forObject.id}-1`}
        alt={altValue}
        className="photo-box-img"
        width={imageSize}
        height={imageSize}
        src={photoUrl}
      />
    )
  }

  render() {
    const { imageSize, slideShowType } = this.props as F8ImagesSlideShowViewPropsWithDefaults
    switch (slideShowType) {
      case Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_PHOTOS_BROWSER: {
        return (
          <div className="media-avatar avatar">
            <div className="photo-box pb-30s">
              <a className="js-analytics-click">{this.renderImage()}</a>
            </div>
          </div>
        )
      }
      case Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_USER_AVATOR: {
        return (
          <div className="user-profile_avatar" id="images-slide-show-item-panel">
            <div className="photo-slideshow photo-slideshow--full-width photo-slideshow--rounded js-photo-slideshow-user-details">
              <div className="photo-slideshow_slide is-active">
                <a onClick={this.onImageLinkPress}>{this.renderImage()}</a>
              </div>
            </div>
          </div>
        )
      }
      case Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_EDIT_USER: {
        return (
          <div className="photo-box pb-m">
            <a className="js-analytics-click">{this.renderImage()}</a>
          </div>
        )
      }
      default: {
        return (
          <div className="media-avatar" id="images-slide-show-item-panel">
            <div className={`photo-box pb-${imageSize}s`}>
              <a onClick={this.onImageLinkPress}>{this.renderImage()}</a>
            </div>
          </div>
        )
      }
    }
  }

  onImageLinkPress = () => {
    const { forObject, objectSchemaName } = this.props
    const nextLink = AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)

    Router.pushRoute(nextLink).then(() => window.scrollTo(0, 0))
  }
}
