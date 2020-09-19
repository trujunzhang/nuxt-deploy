import * as React from 'react'
import * as Telescope from '@appComponents/index'

interface IIEAOrderedRecipesLayoutProps {
  forObject: IParseModelRecipes
  photosListTask: IListWithPhotosDictTask
  reviewStatistic: IReviewStatisticResult
}

export class IEAOrderedRecipesLayout extends React.Component<IIEAOrderedRecipesLayoutProps, {}> {
  render() {
    const { forObject, photosListTask, reviewStatistic } = this.props
    return (
      <div className="biz-country-us">
        <div className="main-content-wrap main-content-wrap--full">
          <div className="top-shelf">
            <Telescope.OrderedRecipesSingleHeader
              forObject={forObject}
              photosListTask={photosListTask}
              reviewStatistic={reviewStatistic}
            />
          </div>

          <div id="super-container" className="content-container">
            <Telescope.OrderedRecipesDetail forObject={forObject} />
          </div>
        </div>
      </div>
    )
  }
}
