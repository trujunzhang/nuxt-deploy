import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Router } from '@web/server/routes'
import { AppLinks, PhotosScrollHelper } from '@appUtils/index'

const classNames = require('classnames')

interface IF8SingleHeaderRightPhotosScrollModelProps {
  photoModelObject: IPhotoBrowserObject
  objectSchemaName: string
  forObject: any
  photosListTask: IListWithPhotosDictTask
}

interface IF8SingleHeaderRightPhotosScrollModelState {
  currentScrollModelObject: IPhotoScrollModelObject
}

export class F8SingleHeaderRightPhotosScrollModel extends React.Component<
  IF8SingleHeaderRightPhotosScrollModelProps,
  IF8SingleHeaderRightPhotosScrollModelState
> {
  constructor(props: IF8SingleHeaderRightPhotosScrollModelProps) {
    super(props)
    this.state = {
      currentScrollModelObject: PhotosScrollHelper.generateScrollPhotoIndex({
        photoModelObject: props.photoModelObject,
        action: 0,
        lastIndex: 0
      })
    }
  }

  onSeeAllPress = () => {
    const { objectSchemaName, forObject } = this.props
    const nextPath = AppLinks.getPhotosBrowserLink(objectSchemaName, forObject)
    Router.pushRoute(nextPath).then(() => window.scrollTo(0, 0))
  }

  renderSeeAll() {
    const { total: photoLength } = this.props.photoModelObject
    const buttonTitle = photoLength > 0 ? `See all ${photoLength}` : 'No Photos'

    return (
      <div className="showcase-footer-links" id="right-photos-scroll-model-see-all">
        <a className="see-more u-pull-right" onClick={this.onSeeAllPress}>
          <span id="icon_18X18" className="icon icon--18-grid icon--size-18 u-space-r-half">
            <svg className="icon_svg">
              <path d="M10 15v-5h5v5h-5zm0-12h5v5h-5V3zm-7 7h5v5H3v-5zm0-7h5v5H3V3z" />
            </svg>
          </span>
          {buttonTitle}
        </a>
      </div>
    )
  }

  render() {
    const { photoModelObject, forObject, photosListTask } = this.props
    const { showPhotosIndex } = this.state.currentScrollModelObject
    const { total: photoLength } = this.props.photoModelObject
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner showcase showcase-4-photo">
          <div className="top-shelf-grey" />

          {this.renderSeeAll()}

          <div className="lightbox-media-parent">
            <div className="showcase-photos showcase-photos-z-index">
              {showPhotosIndex.map((position: number, index: number) => {
                const item = photoModelObject.photos[position]
                const userId = item.overlay.user.userId
                return (
                  <Telescope.F8SingleHeaderRightPhotoItem
                    key={`${userId}-${position}`}
                    forObject={forObject}
                    item={item}
                    photosListTask={photosListTask}
                    photoIndex={position}
                    index={index}
                  />
                )
              })}
            </div>
          </div>

          {photoLength > 3 && this.renderLeftIcon()}
          {photoLength > 3 && this.renderRightIcon()}
        </div>
      </div>
    )
  }

  onPreIconClick() {
    const array = PhotosScrollHelper.generateScrollPhotoIndex({
      photoModelObject: this.props.photoModelObject,
      action: -1,
      lastIndex: this.state.currentScrollModelObject.currentIndex
    })
    this.setState({
      currentScrollModelObject: array
    })
  }

  renderLeftIcon() {
    const { currentScrollModelObject } = this.state
    const linkProps = currentScrollModelObject.haveLeftIcon
      ? {
          onClick: this.onPreIconClick.bind(this)
        }
      : {}

    const linkClass = classNames('nav', 'nav-left', {
      'is-disabled': currentScrollModelObject.haveLeftIcon
    })
    return (
      <div {...linkProps} className={linkClass}>
        <div className="arrow">
          <span
            className="icon icon--48-chevron-left icon--size-48 icon--inverse icon--fallback-inverted"
            id="icon_48X48">
            <svg className="icon_svg">
              <path d="M29.414 5.992c.566 0 1.137.192 1.614.588 1.115.925 1.296 2.613.404 3.77L20.902 24l10.53 13.65c.892 1.156.71 2.844-.404 3.77-1.116.924-2.743.737-3.635-.42L15.57 25.675a2.76 2.76 0 0 1 0-3.35L27.394 6.998a2.548 2.548 0 0 1 2.02-1.008z" />
            </svg>
          </span>
        </div>
      </div>
    )
  }

  onNextIconClick() {
    const array = PhotosScrollHelper.generateScrollPhotoIndex({
      photoModelObject: this.props.photoModelObject,
      action: 1,
      lastIndex: this.state.currentScrollModelObject.currentIndex
    })
    this.setState({
      currentScrollModelObject: array
    })
  }

  renderRightIcon() {
    const { currentScrollModelObject } = this.state
    const linkProps = currentScrollModelObject.haveRightIcon
      ? {
          onClick: this.onNextIconClick.bind(this)
        }
      : {}

    const linkClass = classNames('nav', 'nav-right', {
      'is-disabled': currentScrollModelObject.haveRightIcon
    })
    return (
      <div {...linkProps} className={linkClass}>
        <div className="arrow">
          <span
            className="icon icon--48-chevron-right icon--size-48 icon--inverse icon--fallback-inverted"
            id="icon_48X48">
            <svg className="icon_svg">
              <path d="M18.586 42.008a2.518 2.518 0 0 1-1.614-.588c-1.115-.925-1.296-2.613-.404-3.77L27.098 24l-10.53-13.65c-.892-1.156-.71-2.844.404-3.77 1.116-.924 2.743-.737 3.635.42L32.43 22.325a2.76 2.76 0 0 1 0 3.35L20.606 41.002a2.548 2.548 0 0 1-2.02 1.008z" />
            </svg>
          </span>
        </div>
      </div>
    )
  }
}
