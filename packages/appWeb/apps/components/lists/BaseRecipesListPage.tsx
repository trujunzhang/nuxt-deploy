import * as Telescope from '@appComponents/index'
import * as React from 'react'

interface IBaseRecipesListPageProps {
  listPhotosDict: IListPhotosDict<string>
  recipes: any
  showRightTime?: boolean
}

interface IBaseRecipesListPageDefaultProps {
  showRightTime: boolean
}

type BaseRecipesListPagePropsWithDefaults = IBaseRecipesListPageProps &
  IBaseRecipesListPageDefaultProps

export class BaseRecipesListPage extends React.Component<IBaseRecipesListPageProps, {}> {
  public static defaultProps: Partial<BaseRecipesListPagePropsWithDefaults> = {
    showRightTime: false
  }

  renderRows() {
    const { recipes } = this.props
    const { showRightTime } = this.props as BaseRecipesListPagePropsWithDefaults
    return (
      <ul className="ylist ylist-bordered">
        {recipes.map((recipe, index) => (
          <Telescope.RecipesItem
            key={recipe.id}
            recipe={recipe}
            index={index}
            listPhotosDict={this.props.listPhotosDict}
            showRightTime={showRightTime}
          />
        ))}
      </ul>
    )
  }

  renderEmptySection() {
    const { recipes } = this.props
    if (recipes.length === 0) {
      return <Telescope.F8EmptySection title={''} text="No recipes ordered" />
    }
    return null
  }

  render() {
    return (
      <div className="ysection">
        {this.renderRows()}

        <div className="u-space-t2 u-space-b2">{this.renderEmptySection()}</div>
      </div>
    )
  }
}
