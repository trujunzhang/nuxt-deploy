import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Link } from '@web/server/routes'

interface IRestaurantsItemProps {
  listPhotosDict: IListPhotosDict<string>
  restaurant: IParseModelRestaurants
  index: number
  onRestaurantItemHover: any
}

interface IRestaurantsItemWithRouterProps {
  router: IWebAppRouterProps
}

type RestaurantsItemPropsWithRouter = IRestaurantsItemProps & IRestaurantsItemWithRouterProps

interface IRestaurantsItemState {}

@(withRouter as any)
export class RestaurantsItem extends React.Component<IRestaurantsItemProps, IRestaurantsItemState> {
  renderLeft() {
    const { restaurant, index } = this.props
    return (
      <div className="main-attributes">
        <div className="media-block media-block--12">
          <Telescope.F8ImagesSlideShowView
            altValue={restaurant.displayName}
            forObject={restaurant}
            objectSchemaName={Types.model.PARSE_RESTAURANTS}
            imageSize={90}
            listPhotosDict={this.props.listPhotosDict}
          />

          <div className="media-story">
            <h3 className="search-result-title">
              <span className="indexed-biz-name">
                {`${index + 1}.`}
                <Link prefetch route={AppLinks.getRestaurantLink(restaurant)}>
                  <a className="biz-name margin-left-4">
                    <span>{restaurant.displayName}</span>
                  </a>
                </Link>
              </span>
            </h3>

            <div className="price-category">
              <span className="bullet-after">
                <span className="business-attribute price-range">$</span>
              </span>
              <span className="category-str-list">
                <a>Restaurant</a>
              </span>
            </div>

            <ul className="search-result_tags">
              <li className="tag-18x18_flame-dd5114">
                <small>
                  <span id="posts_item_span" className="icon icon--18-flame icon--size-18">
                    <svg className="icon_svg">
                      <path d="M11.508 3.743c1.173 2.43-.465 2.27-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.9 4.784-3.63 8.33-1.47 3.016 2.533 5.44 4.67 6.67-2.15-2.993-.563-5.02 1.612-6.793-.81 2.448.5 2.934 1.043 3.944.71-.31 1.028-1.3 1.1-1.79.954 1.31 1.465 2.97-.248 4.64 8.302-3.77 5.977-9.743 1.007-12.752z" />
                    </svg>
                  </span>
                  {'updated '}
                  <Telescope.FormattedRelative value={restaurant.updatedAt} />
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderRight() {
    const { restaurant } = this.props
    const { address } = restaurant
    const array = address.split(',')
    const addressViews = array.map((item, index) => {
      return <span key={index}>{item}</span>
    })
    return (
      <div className="secondary-attributes">
        <div className="restaurant-list-item-address-rows">{addressViews}</div>
      </div>
    )
  }

  render() {
    return (
      <li
        onMouseEnter={(e: any) => {
          this.props.onRestaurantItemHover(this.props.restaurant)
        }}
        className="regular-search-result">
        <div className="search-result natural-search-result">
          <div className="biz-listing-large">
            {this.renderLeft()}
            {this.renderRight()}
          </div>
        </div>
      </li>
    )
  }
}
