import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Link } from '@web/server/routes'
import { Events } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import * as Types from '@app/types'

interface IEventsSingleHeaderLeftPanelProps {
  forObject: IParseModelEvents
  reviewStatistic: IReviewStatisticResult
}

interface IEventsSingleHeaderLeftPanelState {
  listPhotosDict: IListPhotosDict<string>
}

export class EventsSingleHeaderLeftPanel extends React.Component<
  IEventsSingleHeaderLeftPanelProps,
  IEventsSingleHeaderLeftPanelState
> {
  constructor(props: IEventsSingleHeaderLeftPanelProps, context) {
    super(props)
    const { forObject } = props

    this.state = {
      listPhotosDict: forObject.listPhotosDict || {}
    }
  }

  renderLeft() {
    const { restaurant } = this.props.forObject
    return (
      <div className="event-details_photo">
        <div className="photo-slideshow photo-slideshow--full-width js-photo-slideshow-event-details lightbox-media-parent">
          <Telescope.F8ImagesSlideShowView
            altValue={restaurant.displayName}
            forObject={restaurant}
            objectSchemaName={Types.model.PARSE_RESTAURANTS}
            imageSize={300}
            listPhotosDict={this.state.listPhotosDict}
          />
        </div>
      </div>
    )
  }

  renderLineOne() {
    const { restaurant } = this.props.forObject
    const address = restaurant.address
    const array = address.split(',')
    const addressViews = array.map((item, index) => {
      return <span key={index}>{item}</span>
    })
    return (
      <li>
        <div className="media-block">
          <div className="media-avatar">
            <span id="icon_24X24" className="icon icon--24-marker icon--size-24">
              <svg className="icon_svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.61 1.43 4.88 3.54 6.08L12 22l3.46-6.92A6.987 6.987 0 0 0 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </span>
          </div>

          <div className="media-story">
            <div className="media-title margin-bottom-4">
              <Link prefetch route={AppLinks.getRestaurantLink(restaurant)}>
                <a className="biz-name js-analytics-click">
                  <span>{restaurant.displayName}</span>
                </a>
              </Link>
            </div>

            <div className="restaurant-list-item-address-rows">{addressViews}</div>
          </div>
        </div>
      </li>
    )
  }

  renderLineTwo() {
    const info = Events.getDateInfo(this.props.forObject)
    return (
      <li>
        <div className="media-block">
          <div className="media-avatar">
            <span id="icon_24X24" className="icon icon--24-reservation icon--size-24">
              <svg className="icon_svg">
                <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z" />
              </svg>
            </span>
          </div>
          <div className="media-story">
            <div className="event-details_date">
              <div>
                <b className="margin-right-4">From:</b>
                {info.startFormat}
              </div>
              <div>
                <b className="margin-right-4">To:</b>
                {info.endFormat}
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

  renderRight() {
    return (
      <div className="card_body">
        <div className="event-details_info">
          <ul className="ylist card_content">
            {this.renderLineOne()}
            {this.renderLineTwo()}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        className="event-details_info-card card card--horizontal"
        id="event-single-header-left-panel-wh">
        <div className="card_photo responsive-hidden-small">{this.renderLeft()}</div>

        {this.renderRight()}
      </div>
    )
  }

  rendRatingRow() {
    const { reviewStatistic } = this.props
    return (
      <div className="biz-rating biz-rating-medium clearfix">
        <Telescope.F8StarIcon
          rate={reviewStatistic.reviewRating}
          iconExtension="rating"
          iconType="small"
        />
        <span className="review-count rating-qualifier">{`${reviewStatistic.total} reviews`}</span>
      </div>
    )
  }
}
