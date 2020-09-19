import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { connect } from 'react-redux'
import { LeafletHelper } from '@appUtils/index'
import * as Types from '@app/types'

interface IRestaurantsSingleHeaderStateProps {
  currentUser: IParseModelUsers
}

interface IRestaurantsSingleHeaderProps
  extends IRestaurantsSingleHeaderStateProps {
  forObject: IParseModelRestaurants
  photosListTask: IListWithPhotosDictTask
  reviewStatistic: IReviewStatisticResult
}

interface IRestaurantsSingleHeaderState {
  mapInfo: IRestaurantMapInfo
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

class RestaurantsSingleHeader extends React.Component<
  IRestaurantsSingleHeaderProps,
  IRestaurantsSingleHeaderState
> {
  constructor(props: IRestaurantsSingleHeaderProps, context) {
    super(props)

    const { forObject, currentUser } = props
    const mapInfo = LeafletHelper.getMapInfo({
      currentUser,
      model: forObject,
      location: forObject.geoLocation,
      showEditButton: true,
      autoPopup: false,
      onlyMap: false
    })
    this.state = {
      mapInfo
    }
  }

  renderSubHeader() {
    const { forObject, photosListTask } = this.props
    const { mapInfo } = this.state

    return (
      <div className="biz-page-subheader">
        <div className="mapbox-container">
          <Telescope.F8RestaurantMapSection restaurant={this.props.forObject} mapInfo={mapInfo} />
        </div>

        <Telescope.F8SingleHeaderRightPhotos
          forObject={forObject}
          objectSchemaName={Types.model.PARSE_RESTAURANTS}
          photosListTask={photosListTask}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="content-container">
        <Telescope.F8SinglePageTopHeader
          objectSchemaName={Types.model.PARSE_RESTAURANTS}
          forObject={this.props.forObject}
          reviewStatistic={this.props.reviewStatistic}
        />
        {this.renderSubHeader()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsSingleHeader)