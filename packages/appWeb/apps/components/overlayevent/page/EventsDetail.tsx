import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Events } from '@app/library' //  '@app/libs'
import * as Types from '@app/types'

interface IEventsDetailProps {
  forObject: IParseModelEvents
}

export class EventsDetail extends React.Component<IEventsDetailProps, {}> {
  renderLeftTopSection() {
    const { forObject } = this.props
    const htmlBody = Events.getWantBody(forObject)
    return (
      <div className="ysection" id="event-want-panel">
        <h3>What/Why:</h3>
        <div className="post_page_body" dangerouslySetInnerHTML={htmlBody} />
      </div>
    )
  }

  renderLeftPanel() {
    const { forObject } = this.props
    const reviewTitle = forObject.displayName
    return (
      <div className="column column-alpha column--responsive">
        {this.renderLeftTopSection()}

        <Telescope.ReviewsList
          key={forObject.id}
          forObject={forObject}
          relatedObjectSchemaName={Types.model.PARSE_EVENTS}
          reviewTitle={reviewTitle}
        />
      </div>
    )
  }

  renderRightTopUsersSection() {
    const { forObject } = this.props
    return (
      <div className="js-subscriber-list">
        <Telescope.OrderedUserList forObject={forObject} />
      </div>
    )
  }

  renderRightPanel() {
    const { forObject } = this.props
    const { restaurant } = forObject
    return (
      <div className="column column-beta column--responsive">
        {this.renderRightTopUsersSection()}

        <Telescope.RecipesList
          forRestaurant={restaurant}
          forEvent={forObject}
          recipeListType={Types.common.RECIPES_LIST_FOR_EVENT_PAGE}
          showTitle={true}
          showRightTime={false}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="clearfix layout-block layout-a layout-border event-details_container column--responsive">
        {this.renderLeftPanel()}
        {this.renderRightPanel()}
      </div>
    )
  }
}
