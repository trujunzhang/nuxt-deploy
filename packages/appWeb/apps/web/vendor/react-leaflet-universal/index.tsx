import { decorate } from './decorator'

const COMPONENTS = [
  'AttributionControl',
  'Circle',
  'CircleMarker',
  'FeatureGroup',
  'GeoJSON',
  'GridLayer',
  'ImageOverlay',
  'LayerGroup',
  'LayersControl',
  'Map',
  'MapComponent',
  'MapControl',
  'MapLayer',
  'Marker',
  'Pane',
  'Path',
  'Polygon',
  'Polyline',
  'Popup',
  'Rectangle',
  'ScaleControl',
  'TileLayer',
  'Tooltip',
  'WMSTileLayer',
  'ZoomControl'
]

const {
  AttributionControl,
  Circle,
  CircleMarker,
  FeatureGroup,
  GeoJSON,
  GridLayer,
  ImageOverlay,
  LayerGroup,
  LayersControl,
  Map,
  MapComponent,
  MapControl,
  MapLayer,
  Marker,
  Pane,
  Path,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  ScaleControl,
  TileLayer,
  Tooltip,
  WMSTileLayer,
  ZoomControl
}: any = COMPONENTS.reduce((map, name) => {
  map[name] = decorate(name)
  return map
}, {})

// module.exports = COMPONENT_MAP

export {
  AttributionControl,
  Circle,
  CircleMarker,
  FeatureGroup,
  GeoJSON,
  GridLayer,
  ImageOverlay,
  LayerGroup,
  LayersControl,
  Map,
  MapComponent,
  MapControl,
  MapLayer,
  Marker,
  Pane,
  Path,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  ScaleControl,
  TileLayer,
  Tooltip,
  WMSTileLayer,
  ZoomControl
}
