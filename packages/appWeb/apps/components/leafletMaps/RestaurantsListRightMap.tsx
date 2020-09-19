import * as React from 'react'
import { Map, Marker, Popup, TileLayer } from '@web/vendor/react-leaflet-universal'

interface IRestaurantsListRightMapProps {
  markers: IRestaurantMarker[]
  defaultMarker: RestaurantMarkerWithNull
}

export class RestaurantsListRightMap extends React.Component<IRestaurantsListRightMapProps, {}> {
  renderHeader() {
    return (
      <div className="map-header clearfix">
        <a className="mo-map-trigger">
          <span id="icon_24X24" className="icon icon--24-chevron-left icon--size-24 mo-map-icon">
            <svg className="icon_svg">
              <path d="M14.475 18.364l1.414-1.414L10.94 12l4.95-4.95-1.415-1.414L8.11 12l6.365 6.364z" />
            </svg>
          </span>
          <span className="js-mo-map-label">{'Less Map'}</span>
        </a>

        <div className="cube-wrapper">
          <div className="cube show-face2">
            <div className="face face2">
              <a className="ybtn ybtn--primary ybtn--small redo-search">{'Redo Search in Map'}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onMarkerHover() {}

  renderContent() {
    const { defaultMarker } = this.props
    const mapProps = !!defaultMarker
      ? {
          center: defaultMarker
        }
      : {}
    return (
      <div id="map-container" className="yelp-map-container">
        <Map {...mapProps} zoom={18} maxZoom={28}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy <a href=&quothttp://osm.org/copyright&quot>OpenStreetMap</a> contributors"
          />
          <Marker position={defaultMarker}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className="search-map transform-style-support">
          {this.renderHeader()}
          {this.renderContent()}
        </div>
      </div>
    )
  }
}
