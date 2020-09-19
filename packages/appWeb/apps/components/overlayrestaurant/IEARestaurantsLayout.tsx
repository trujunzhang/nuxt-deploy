import * as React from 'react'
import * as Telescope from '@appComponents/index'

interface IIEARestaurantsLayoutProps {
  forObject: IParseModelRestaurants
  photosListTask: IListWithPhotosDictTask
  reviewStatistic: IReviewStatisticResult
}

export class IEARestaurantsLayout extends React.Component<IIEARestaurantsLayoutProps, {}> {
  render() {
    const { forObject, photosListTask, reviewStatistic} = this.props
    return (
      <div className="biz-country-us biz-details">
        <div className="main-content-wrap main-content-wrap--full">
          <div className="top-shelf">
            <Telescope.RestaurantsSingleHeader
              forObject={forObject}
              photosListTask={photosListTask}
              reviewStatistic={reviewStatistic}
            />
          </div>

          <div id="super-container" className="content-container">
            <Telescope.RestaurantsDetail forObject={forObject} />
          </div>
        </div>
      </div>
    )
  }
}
