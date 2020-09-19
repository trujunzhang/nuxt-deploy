import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { LeafletHelper } from '@appUtils/index'

interface IOrderedRecipesSingleHeaderProps {
  forObject: IParseModelRecipes
  photosListTask: IListWithPhotosDictTask
  reviewStatistic: IReviewStatisticResult
}

export class OrderedRecipesSingleHeader extends React.Component<
  IOrderedRecipesSingleHeaderProps,
  {}
> {
  renderSubHeader() {
    const { forObject, photosListTask } = this.props
    const { restaurant } = forObject
    const mapInfo = LeafletHelper.getMapInfo({
      model: restaurant,
      location: restaurant.geoLocation,
      showEditButton: false,
      autoPopup: false,
      onlyMap: false
    })
    return (
      <div className="biz-page-subheader">
        <div className="mapbox-container">
          <Telescope.F8RestaurantMapSection
            mapInfo={mapInfo}
            showRestaurantName={true}
            restaurant={restaurant}
          />
        </div>
        <Telescope.F8SingleHeaderRightPhotos
          objectSchemaName={Types.model.PARSE_RECIPES}
          forObject={forObject}
          photosListTask={photosListTask}
        />
      </div>
    )
  }

  render() {
    const { forObject, photosListTask, reviewStatistic } = this.props
    return (
      <div className="content-container">
        <Telescope.F8SinglePageTopHeader
          objectSchemaName={Types.model.PARSE_RECIPES}
          forObject={forObject}
          reviewStatistic={reviewStatistic}
        />
        {this.renderSubHeader()}
      </div>
    )
  }
}
