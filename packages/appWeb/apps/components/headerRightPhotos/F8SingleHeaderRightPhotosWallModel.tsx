import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { Link } from '@web/server/routes'

interface IF8SingleHeaderRightPhotosWallModelProps {
  photoModelObject: IPhotoBrowserObject
  forObject: any
  objectSchemaName: string
  photosListTask: IListWithPhotosDictTask
}

interface IF8SingleHeaderRightPhotosWallModelState {}

export class F8SingleHeaderRightPhotosWallModel extends React.Component<
  IF8SingleHeaderRightPhotosWallModelProps,
  IF8SingleHeaderRightPhotosWallModelState
> {
  renderSeeAll() {
    const { photoModelObject } = this.props
    return (
      <div className="js-photo photo photo-3 photo-grid">
        <div className="showcase-photo-box">
          {photoModelObject.photosWall.map((item: IPhotoBrowserItem, index: number) => {
            return (
              <a key={item.photoId}>
                <img
                  alt="Photo of My Two Cents - Los Angeles, CA, United States. Desserts"
                  className="photo-box-img"
                  width={250}
                  height={250}
                  src={item.imageUrl}
                />
              </a>
            )
          })}
        </div>

        {this.renderSeeAllButton()}
      </div>
    )
  }

  renderSeeAllButton() {
    const { objectSchemaName, forObject, photoModelObject } = this.props
    return (
      <div className="see-more show-all-overlay">
        <Link prefetch route={AppLinks.getPhotosBrowserLink(objectSchemaName, forObject)}>
          <a className="show-all-photos">
            <span
              id="icon_24X24"
              style={{ display: 'block' }}
              className="icon icon--24-grid icon--size-24 icon--inverse icon--fallback-inverted show-all-overlay_icon">
              <svg className="icon_svg">
                <path d="M13 21v-8h8v8h-8zm0-18h8v8h-8V3zM3 13h8v8H3v-8zM3 3h8v8H3V3z" />
              </svg>
            </span>
            {`See all ${photoModelObject.total}`}
          </a>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div className="showcase-container">
        <div className="showcase-container_inner showcase showcase-3-photo">
          <div className="lightbox-media-parent">
            <div className="showcase-photos showcase-photos-z-index">
              {this.props.photoModelObject.photos.map((item: IPhotoBrowserItemInfo, index) => {
                return (
                  <Telescope.F8SingleHeaderRightPhotoItem
                    key={item.photoId}
                    forObject={this.props.forObject}
                    photosListTask={this.props.photosListTask}
                    photoIndex={index}
                    item={item}
                    index={index}
                  />
                )
              })}
              {this.renderSeeAll()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
