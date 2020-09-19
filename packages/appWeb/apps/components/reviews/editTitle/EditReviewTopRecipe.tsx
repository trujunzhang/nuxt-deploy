import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { Link } from '@web/server/routes'
import * as Types from '@app/types'

interface IEditReviewTopRecipeProps {
  forObject: any
}

interface IEditReviewTopRecipeState {}

export class EditReviewTopRecipe extends React.Component<
  IEditReviewTopRecipeProps,
  IEditReviewTopRecipeState
> {
  render() {
    const { forObject } = this.props
    return (
      <div className="war-write_business">
        <div className="media-block media-block--12 biz-listing-medium">
          <Telescope.F8ImagesSlideShowView
            altValue={forObject.displayName}
            forObject={forObject}
            objectSchemaName={Types.model.PARSE_RECIPES}
            imageSize={60}
            listPhotosDict={forObject.listPhotosDict}
          />

          <div className="media-story">
            <div className="media-title clearfix">
              <Link prefetch route={AppLinks.getOrderedRecipeLink(forObject)}>
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
                <a>{'Recipe'}</a>
              </span>
            </div>

            <div className="restaurant-list-item-address-rows">{forObject.price}</div>
          </div>
        </div>
      </div>
    )
  }
}
