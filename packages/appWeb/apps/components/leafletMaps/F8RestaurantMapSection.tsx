import * as React from 'react'
import { Link } from '@web/server/routes'
import { Map, Marker, Popup, TileLayer } from '@web/vendor/react-leaflet-universal'
import { AppLinks } from '@appUtils/index'

interface IF8RestaurantMapSectionProps {
  mapInfo: IRestaurantMapInfo
  showRestaurantName?: boolean
  restaurant: IParseModelRestaurants
}

interface IF8RestaurantMapSectionState {
  zoom: number
}

interface IF8RestaurantMapSectionDefaultProps {
  showRestaurantName: boolean
}

type F8RestaurantMapSectionPropsWithDefaults = IF8RestaurantMapSectionProps &
  IF8RestaurantMapSectionDefaultProps

export class F8RestaurantMapSection extends React.Component<
  IF8RestaurantMapSectionProps,
  IF8RestaurantMapSectionState
> {
  public static defaultProps: Partial<F8RestaurantMapSectionPropsWithDefaults> = {
    showRestaurantName: false
  }

  constructor(props: IF8RestaurantMapSectionProps) {
    super(props)
    this.state = {
      zoom: 18
    }
  }

  renderTopMap() {
    const { mapInfo } = this.props
    const { latitude, longitude, displayName, address, autoPopup } = mapInfo
    const position: any = [latitude, longitude]
    // debugger
    return (
      <Map center={position} zoom={this.state.zoom} maxZoom={28}>
        {() => {
          return (
            <React.Fragment>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup autoPopup={autoPopup}>
                  {displayName}
                  <br />
                  {address}
                </Popup>
              </Marker>
            </React.Fragment>
          )
        }}
      </Map>
    )
  }

  renderRightEditButton() {
    // console.log('editLink: ', this.props.mapInfo.editLink)
    return (
      <Link prefetch route={this.props.mapInfo.editLink}>
        <a className="link-more icon-wrapper mapbox-edit">
          <span
            id="icon_14X14"
            className="icon icon--14-pencil icon--size-14 icon--linked u-space-r-half">
            <svg className="icon_svg">
              <path d="M12.95 3.05c0-.512-.195-1.023-.586-1.414a1.996 1.996 0 0 0-2.83 0L8.122 3.05 2.465 8.707 1.05 12.95l4.243-1.414L10.95 5.88l1.414-1.416c.39-.39.586-.902.586-1.414zm-8.197 7.61l-2.122.71.71-2.123 5.49-5.49 1.415 1.415-5.49 5.49z" />
            </svg>
          </span>
          <span>Edit</span>
        </a>
      </Link>
    )
  }

  renderBottomText() {
    const { mapInfo } = this.props
    const { address, showEditButton } = mapInfo
    const rows = address.split(',')

    return (
      <ul>
        <li className="u-relative">
          <span
            id="icon_18X18"
            className="icon icon--18-marker icon--size-18 u-absolute u-sticky-top">
            <svg className="icon_svg">
              <path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
          </span>
          {showEditButton && this.renderRightEditButton()}

          <div className="map-box-address u-space-l4">
            {this.props.showRestaurantName && this.renderRestaurantName()}

            <strong className="street-address">
              {rows.map((item, index) => {
                return <div key={'address-' + index}>{item}</div>
              })}
            </strong>
          </div>
        </li>
      </ul>
    )
  }

  renderDirection() {
    return (
      <li className="clearfix">
        <div>
          <span id="icon_18X18" className="icon icon--18-directions icon--size-18">
            <svg className="icon_svg">
              <path d="M16.444 7.556l-5.957-5.958a2.145 2.145 0 0 0-3.034 0L1.598 7.453a2.145 2.145 0 0 0 0 3.034l5.958 5.957a2 2 0 0 0 2.828 0l6.06-6.06a2 2 0 0 0 0-2.828zM9.97 11.47v-2.5h-3v3h-1v-4h4v-2.5l3 3-3 3z" />
            </svg>
          </span>
          <a className="biz-directions">Get Directions</a>
        </div>
      </li>
    )
  }

  renderRestaurantName() {
    const { restaurant } = this.props
    return (
      <div className="media-title margin-bottom-4">
        <Link prefetch route={AppLinks.getRestaurantLink(restaurant)}>
          <a className="biz-name js-analytics-click">
            <span>{restaurant.displayName}</span>
          </a>
        </Link>
      </div>
    )
  }

  render() {
    const { onlyMap } = this.props.mapInfo

    if (onlyMap) {
      return this.renderTopMap()
    }
    return (
      <div className="mapbox">
        <div className="mapbox-map">{this.renderTopMap()}</div>

        <div className="mapbox-text">{this.renderBottomText()}</div>
      </div>
    )
  }
}
