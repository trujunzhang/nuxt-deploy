import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Link } from '@web/server/routes'
import { AppConstants } from '@app/types'
import { AppLinks } from '@appUtils/index'

interface IF8PhotosTitleHeaderProps {
  objectSchemaName: string
  forObject: any
  reviewStatistic: IReviewStatisticResult
}

interface IF8PhotosTitleHeaderState {
  modelType: string
}

export class F8PhotosTitleHeader extends React.Component<
  IF8PhotosTitleHeaderProps,
  IF8PhotosTitleHeaderState
> {
  constructor(props: IF8PhotosTitleHeaderProps, context) {
    super(props)

    const modelType: string = AppConstants.realmTypes[props.objectSchemaName]
    this.state = {
      modelType
    }
  }

  renderObjectAvator() {
    const { forObject, objectSchemaName } = this.props
    return (
      <Telescope.F8ImagesSlideShowView
        altValue={forObject.displayName}
        forObject={forObject}
        objectSchemaName={objectSchemaName}
        imageSize={30}
        listPhotosDict={forObject.listPhotosDict}
      />
    )
  }

  renderObjectStory() {
    const { forObject, objectSchemaName, reviewStatistic } = this.props
    return (
      <div className="media-story">
        <div className="media-title clearfix">
          <Link
            prefetch
            route={AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)}>
            <a className="biz-name js-analytics-click">
              <span>{forObject.displayName}</span>
            </a>
          </Link>
        </div>
        <div className="biz-passport_rating">
          <div className="biz-rating biz-rating-medium clearfix">
            <Telescope.F8StarIcon
              rate={reviewStatistic.reviewRating}
              iconType="small"
              iconExtension="rating"
            />

            <span className="review-count rating-qualifier">
              <span>{reviewStatistic.total}</span>
              {' reviews'}
            </span>
          </div>
        </div>
      </div>
    )
  }

  renderBottom() {
    const { forObject, objectSchemaName } = this.props
    return (
      <div className="section-header media-header--tabbed">
        <div className="arrange arrange--12 arrange--bottom">
          <div className="arrange_unit arrange_unit--fill media-header_biz-listing">
            <div className="media-block media-block biz-passport--slim">
              {this.renderObjectAvator()}
              {this.renderObjectStory()}
            </div>
          </div>

          <div className="arrange_unit nowrap media-header_actions">
            <Link prefetch route={AppLinks.getAddPhotoLink(objectSchemaName, forObject)}>
              <a className="ybtn ybtn--primary u-space-r1">
                <span
                  id="icon_24X24"
                  className="icon icon--24-add-photo icon--size-24 icon--currentColor u-space-r1 icon--fallback-inverted">
                  <svg className="icon_svg">
                    <path d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM13 14v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1z" />
                  </svg>
                </span>
                {'Add photos'}
              </a>
            </Link>
          </div>
        </div>

        <div className="section-header_tabs js-section-header_tabs">
          <div className="media-header_root-navbar" />
        </div>
      </div>
    )
  }

  render() {
    const { forObject } = this.props
    return (
      <div className="js-media-landing_header media-landing_header">
        <h1 className="js-media-landing_header_title">{'Photos for ' + forObject.displayName}</h1>
        {this.renderBottom()}
      </div>
    )
  }
}
