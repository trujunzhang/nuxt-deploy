import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { Link } from '@web/server/routes'
import * as Types from '@app/types'

interface IEditReviewTopRestaurantProps {
  review: IParseModelReviews
  forObject: any
}

export class EditReviewTopRestaurant extends React.Component<IEditReviewTopRestaurantProps, {}> {
  render() {
    const { forObject } = this.props
    return (
      <div className="war-write_business">
        <div className="media-block media-block--12 biz-listing-medium">
          <Telescope.F8ImagesSlideShowView
            altValue={forObject.displayName}
            forObject={forObject}
            objectSchemaName={Types.model.PARSE_RESTAURANTS}
            imageSize={60}
            listPhotosDict={forObject.listPhotosDict}
          />

          <div className="media-story">
            <div className="media-title clearfix">
              <Link prefetch route={AppLinks.getRestaurantLink(forObject)}>
                <a className="biz-name js-analytics-click">
                  <span>{forObject.displayName}</span>
                </a>
              </Link>
            </div>
            <div className="price-category">
              <span className="bullet-after">
                <span className="business-attribute price-range">$$$</span>
              </span>
              <span className="category-str-list">
                <a>{'Restaurant'}</a>
              </span>
            </div>

            <div className="restaurant-list-item-address-rows">{forObject.address}</div>
          </div>
        </div>
      </div>
    )
  }
}
