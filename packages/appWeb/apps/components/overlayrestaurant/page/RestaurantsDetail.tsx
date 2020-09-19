import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'

interface IRestaurantsDetailProps {
  forObject: IParseModelRestaurants
}

export class RestaurantsDetail extends React.Component<IRestaurantsDetailProps, {}> {
  renderLeftPanel() {
    const { forObject } = this.props
    const { displayName: reviewTitle } = forObject
    return (
      <div className="column column-alpha column--responsive">
        <Telescope.EventsListForObject
          eventType={Types.common.EVENTS_LIST_FOR_RESTAURANT}
          forObject={forObject}
        />

        <Telescope.ReviewsList
          key={forObject.id}
          forObject={forObject}
          relatedObjectSchemaName={Types.model.PARSE_RESTAURANTS}
          reviewTitle={reviewTitle}
        />
      </div>
    )
  }

  renderRightPanel() {
    return (
      <div className="column column-beta column--responsive official-events">
        <Telescope.RecipesList
          recipeListType={Types.common.RECIPES_LIST_FOR_RESTAURANT_PAGE}
          forRestaurant={this.props.forObject}
          showTitle={true}
          showRightTime={false}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="ysection event-landing_below-fold">
        <div className="clearfix layout-block layout-a layout-border column--responsive">
          {this.renderLeftPanel()}
          {this.renderRightPanel()}
        </div>
      </div>
    )
  }
}
