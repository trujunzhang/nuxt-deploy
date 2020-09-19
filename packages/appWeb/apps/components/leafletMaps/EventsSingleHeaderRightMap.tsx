import * as React from 'react'
import { Map, Marker, Popup, TileLayer } from '@web/vendor/react-leaflet-universal'

interface IEventsSingleHeaderRightMapProps {
  forObject: IParseModelEvents
}

export class EventsSingleHeaderRightMap extends React.Component<
  IEventsSingleHeaderRightMapProps,
  {}
> {
  render() {
    const { restaurant } = this.props.forObject
    const latitude = restaurant.geoLocation.latitude
    const longitude = restaurant.geoLocation.longitude
    const position = [latitude, longitude]
    return (
      <div className="event-details_map-card">
        <div className="js-map-container yelp-map-container">
          <Map center={position} zoom={18} maxZoom={20}>
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution="&copy <a href=&quothttp://osm.org/copyright&quot>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>
                <span>
                  {restaurant.displayName}
                  <br />
                  {restaurant.address}
                </span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    )
  }
}
