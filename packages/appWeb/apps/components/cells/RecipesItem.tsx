import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Link } from '@web/server/routes'
import { Recipes } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import * as Types from '@app/types'

interface IRecipesItemProps {
  renderActionButtons?: any
  listPhotosDict: IListPhotosDict<string>
  recipe: IParseModelRecipes
  index: number
  showRightTime?: boolean
}

interface IRecipesItemState {}

export class RecipesItem extends React.Component<IRecipesItemProps, IRecipesItemState> {
  renderLeftAvatar() {
    const { recipe } = this.props
    return (
      <Telescope.F8ImagesSlideShowView
        altValue={recipe.displayName}
        forObject={recipe}
        objectSchemaName={Types.model.PARSE_RECIPES}
        listPhotosDict={this.props.listPhotosDict}
      />
    )
  }

  renderStory() {
    const { recipe, index } = this.props
    return (
      <div className="media-story">
        <div className="media-title clearfix">
          <span className="indexed-biz-name">
            {`${index + 1}.`}
            <Link prefetch route={AppLinks.getOrderedRecipeLink(recipe)}>
              <a className="biz-name title-font-weight-bold margin-left-4">
                <span>{recipe.displayName}</span>
              </a>
            </Link>
          </span>
        </div>

        <div className="price-category">
          <span className="category-str-list">{`$. ${recipe.price}`}</span>
        </div>

        <div className="tag-18x18_flame-dd5114">
          <small>
            <Telescope.FormattedRelative value={recipe.updatedAt} />
          </small>
        </div>

        {this.props.renderActionButtons && this.props.renderActionButtons(recipe, index)}
      </div>
    )
  }

  renderRightTime() {
    return (
      <div className="arrange_unit nowrap">
        <div className="subtle-text">{Recipes.getUpdatedAtFormat(this.props.recipe)}</div>
      </div>
    )
  }

  render() {
    return (
      <li className="js-bookmark-row" id="recipe-item">
        <div className="bookmark-listing">
          <div className="arrange">
            <div className="arrange_unit arrange_unit--fill">
              <div className="media-block media-block--12 biz-listing-medium">
                {this.renderLeftAvatar()}
                {this.renderStory()}
              </div>
            </div>

            {this.props.showRightTime ? this.renderRightTime() : null}
          </div>
        </div>
      </li>
    )
  }
}
