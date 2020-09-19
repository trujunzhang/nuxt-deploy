import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { LeafletHelper } from '@appUtils/index'

interface IIEARestaurantsHomeProps {}

interface IIEARestaurantsHomeState {
  markers: any
  defaultMarker?: any | null
}

export class IEARestaurantsHome extends React.Component<
  IIEARestaurantsHomeProps,
  IIEARestaurantsHomeState
> {
  constructor(props: IIEARestaurantsHomeProps) {
    super(props)
    this.state = {
      markers: [],
      defaultMarker: null
    }
  }

  onRestaurantItemHover(restaurant) {
    this.setState({
      defaultMarker: LeafletHelper.getMarker(restaurant)
    })
  }

  renderLeft() {
    return (
      <div className="column column-alpha ">
        <div className="results-wrapper indexed-biz-archive" id="restaurants_list_results">
          <div className="search-results-content">
            <Telescope.IEARestaurantsList
              key={'restaurantsList'}
              onRestaurantItemHover={this.onRestaurantItemHover.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }

  renderRight() {
    const { markers, defaultMarker } = this.state
    return (
      <div className="column column-beta ">
        <Telescope.RestaurantsListRightMap markers={markers} defaultMarker={defaultMarker} />
      </div>
    )
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div className="top-shelf top-shelf-grey" />
        <div id="super-container" className="content-container">
          <div className="container">
            <div className="clearfix layout-block layout-a scroll-map-container search-results-block">
              {this.renderLeft()}
              {this.renderRight()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
