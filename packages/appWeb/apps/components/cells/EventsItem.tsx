import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Events } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import { withRouter } from 'next/router'
import { Link } from '@web/server/routes'
import * as Types from '@app/types'

interface IEventsItemProps {
  listPhotosDict: IListPhotosDict<string>
  event: IParseModelEvents
  index: number
  eventType?: string
}

@(withRouter as any)
export class EventsItem extends React.Component<IEventsItemProps, {}> {
  renderLeft() {
    return (
      <Telescope.F8ImagesSlideShowView
        altValue={this.props.event.restaurant.displayName}
        forObject={this.props.event.restaurant}
        objectSchemaName={Types.model.PARSE_RESTAURANTS}
        imageSize={90}
        listPhotosDict={this.props.listPhotosDict}
      />
    )
  }

  renderStory() {
    const { event, index } = this.props
    const info = Events.getDateInfo(event)
    const htmlBody = Events.getWantBody(event)
    return (
      <div className="media-story u-space-l1">
        <h3>
          <Link prefetch route={AppLinks.getEventLink(event)}>
            {`${index + 1}. ${event.displayName}`}
          </Link>
        </h3>
        <div>
          <div className="u-text-truncate u-space-b1 u-space-t1">
            <span id="icon_24X24" className="icon icon--24-reservation icon--size-24">
              <svg className="icon_svg">
                <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z" />
              </svg>
            </span>
            {`${info.startFormat} - ${info.endFormat}`}
          </div>
          <div className="u-text-truncate u-space-b1">
            <span id="icon_24X24" className="icon icon--24-marker icon--size-24">
              <svg className="icon_svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.61 1.43 4.88 3.54 6.08L12 22l3.46-6.92A6.987 6.987 0 0 0 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </span>
            {'Location — ' + event.restaurant.address}
          </div>

          <div className="post_page_body" dangerouslySetInnerHTML={htmlBody} />
        </div>
      </div>
    )
  }

  render() {
    const { event, eventType } = this.props
    return (
      <li key={event.id}>
        <div className="media-block">
          {eventType === Types.common.EVENTS_LIST_FOR_USER && this.renderLeft()}
          {this.renderStory()}
        </div>
      </li>
    )
  }
}
