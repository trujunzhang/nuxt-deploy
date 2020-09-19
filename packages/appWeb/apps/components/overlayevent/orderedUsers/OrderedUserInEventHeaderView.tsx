import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Photos } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import { Link, Router } from '@web/server/routes'

interface IOrderedUserInEventHeaderViewProps {
  forObject: IParseModelEvents
}

export class OrderedUserInEventHeaderView extends React.Component<
  IOrderedUserInEventHeaderViewProps,
  {}
> {
  renderColumnOne() {
    const { forObject } = this.props
    return (
      <div className="user-profile_content-wrapper arrange arrange--bottom arrange--30">
        <div className="user-profile_avatar-dummy arrange_unit" />
        <div className="user-profile_info arrange_unit" id="ordered-user-on-event-panel">
          <div>
            <a
              onClick={() => {
                const nextLink = AppLinks.getEventLink(forObject)
                Router.pushRoute(nextLink)
              }}>
              <h1>{forObject.displayName}</h1>
            </a>
          </div>

          <div>
            <a
              onClick={() => {
                const nextLink = AppLinks.getRestaurantLink(forObject.restaurant)
                Router.pushRoute(nextLink)
              }}>
              <h3 className="user-location alternate">{forObject.restaurant.displayName}</h3>
            </a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { forObject } = this.props
    const { restaurant } = forObject
    return (
      <div className="content-container" style={{ height: '184px' }}>
        {this.renderColumnOne()}

        <div className="ordered-user-profile">
          <div className="user-profile_container">
            <div className="user-profile_avatar">
              <div className="photo-slideshow photo-slideshow--full-width photo-slideshow--rounded js-photo-slideshow-user-details">
                <Link prefetch route={AppLinks.getRestaurantLink(restaurant)}>
                  <Telescope.F8PlaceHolderImage
                    alt={restaurant.displayName}
                    className="photo-box-img"
                    width={250}
                    height={250}
                    placeholderSource={Photos.config.placeHolderLargeImage.PARSE_RESTAURANTS}
                    source={Photos.getImageUrlInListPhotosDict({
                      model: restaurant,
                      listTask: forObject
                    })}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
