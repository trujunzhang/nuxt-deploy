import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'

interface IOrderedRecipesDetailProps {
  forObject: IParseModelRecipes
}

export class OrderedRecipesDetail extends React.Component<IOrderedRecipesDetailProps, {}> {
  renderLeftPanel() {
    const { forObject } = this.props
    const reviewTitle = forObject.displayName
    return (
      <div className="column column-alpha column--responsive">
        <Telescope.ReviewsList
          key={forObject.id}
          forObject={forObject}
          relatedObjectSchemaName={Types.model.PARSE_RECIPES}
          reviewTitle={reviewTitle}
        />
      </div>
    )
  }

  renderRightPanel() {
    const { forObject } = this.props
    return (
      <div className="column column-beta column--responsive official-events">
        <div className="ylist ylist-bordered" id="ordered-user-on-recipe-panel">
          <Telescope.F8SectionHeaderTitle title={"Who's also ordered"} />

          <div className="js-subscriber-list">
            <Telescope.OrderedRecipeUsersList forObject={forObject} />
          </div>
        </div>

        <div className="ylist ylist-bordered" />
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
