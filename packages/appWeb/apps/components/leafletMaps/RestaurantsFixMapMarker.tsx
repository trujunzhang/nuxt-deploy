import * as Telescope from '@appComponents/index'
import * as React from 'react'
import OnClickOut from 'react-onclickoutside'
import * as Types from '@app/types'
import { Map, Popup, TileLayer } from '@web/vendor/react-leaflet-universal'
import { invokeParseCloudMethod } from '@appActions/index' // from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'

interface IRestaurantsFixMapMarkerStateProps {
  editModel: IEditModelState
  detailedModelsOverlay: any
}

interface IRestaurantsFixMapMarkerDispatchProps {
  actions: any
  invokeParseCloudMethodAction: InvokeParseCloudMethodActionForGoogleAddressFetchFun
}

interface IRestaurantsFixMapMarkerProps
  extends IRestaurantsFixMapMarkerStateProps,
  IRestaurantsFixMapMarkerDispatchProps {
  forObject: IParseModelRestaurants
  onCloseFixMapMaker: any
}

interface IRestaurantsFixMapMarkerState {
  popTitle: string
  currentAddress: any
  googleAddressReverse: any
  position: any[]
  currentZoom: any
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    actions: bindActionCreators(editModelActions, dispatch),
    invokeParseCloudMethodAction: (data: IGoogleAddressFetchParams, parseId) =>
      dispatch(
        invokeParseCloudMethod({
          methodType: Types.common.CLOUD_RESTAURANT_ADDRESS,
          data,
          parseId,
          type: Types.common.RESTAURANT_CLOUD_ADDRESS_MODEL
        })
      )
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    detailedModelsOverlay: store.detailedModelsOverlay
  }
}

@(OnClickOut as any)
class RestaurantsFixMapMarker extends React.Component<
IRestaurantsFixMapMarkerProps,
IRestaurantsFixMapMarkerState
> {
  constructor(props: IRestaurantsFixMapMarkerProps) {
    super(props)
    const { forObject, editModel } = props

    if (!forObject) {
      throw new Error('Fixing map marker, need a restaurant instance!')
    }
    this.state = {
      popTitle: editModel.form.fields.displayName,
      currentZoom: 18,
      currentAddress: editModel.form.fields.address,
      googleAddressReverse: null,
      position: ReducerHelper.getLocation(props)
    }
  }

  componentWillReceiveProps(nextProps: IRestaurantsFixMapMarkerProps) {
    const newAddress = FilterPosts.getModelByObjectId(
      nextProps,
      nextProps.forObject.id,
      this.state.googleAddressReverse,
      'googleAddressReverse'
    )

    // console.log('fix map, ', newAddress)

    if (!!newAddress) {
      this.setState({
        popTitle: 'Changed Address:',
        // Detailed object
        currentAddress: newAddress.address,
        googleAddressReverse: newAddress
      })
    }
  }

  fixedMapDragend = (e) => {
    const target = e.target
    const location = target.getLatLng()
    this._updateGoogleAddress(location)
  }

  _updateGoogleAddress(location) {
    this.setState({
      position: [location.lat, location.lng]
    })
    this.props.invokeParseCloudMethodAction(
      {
        lat: location.lat,
        lng: location.lng
      },
      this.props.forObject.id
    )
  }

  renderCloseIcon() {
    return (
      <a onClick={this.props.onCloseFixMapMaker} className="offscreen ypop-close-offscreen">
        {'Close popup'}
      </a>
    )
  }

  renderTitle() {
    return (
      <div className="ypop-title" id="locate-biz-pop-title">
        <div onClick={this.props.onCloseFixMapMaker} className="ypop-close">
          {'×'}
        </div>
        <h2>Move map marker</h2>
      </div>
    )
  }

  renderHint() {
    return (
      <div className="map-popup-info google-map">
        <p>
          Click the map, or Drag and drop the map marker to correct the location.
          <br />
          Use the tools in the map to zoom in for a closer look at the map.
        </p>
      </div>
    )
  }

  saveGoogleAddress() {
    const newAddress = {
      ...this.state.googleAddressReverse,
      geoLocation: {
        latitude: this.state.position[0],
        longitude: this.state.position[1]
      }
    }
    this.props.actions.onRestaurantFormAddressFieldChange(newAddress)
    this.props.actions.onRestaurantFormAddressFieldSuccess()
    this.props.onCloseFixMapMaker()
  }

  renderFooter() {
    const saveEnabled = !!this.state.googleAddressReverse
    return (
      <div className="ypop-footer clearfix" id="locate-biz-pop-footer">
        <div className="ypop-buttons" id="fix-new-restaurant-address">
          <button
            type="submit"
            onClick={this.saveGoogleAddress.bind(this)}
            disabled={!saveEnabled}
            value="submit"
            className="ybtn ybtn-primary ybtn-small">
            <span>{'Save Changes'}</span>
          </button>
          <a onClick={this.props.onCloseFixMapMaker}>{'Cancel'}</a>
        </div>
      </div>
    )
  }

  onZoomChanged(e) {
    this.setState({
      currentZoom: e.target.getZoom()
    })
  }

  onMapPress(e) {
    this._updateGoogleAddress(e.latlng)
  }

  renderMarker() {
    const { position, currentAddress, popTitle } = this.state
    const MapMarker: any = Telescope.ExtendedMarker
    return (
      <MapMarker
        draggable={true}
        autoPopup={true}
        onMoveend={this.fixedMapDragend}
        position={position}>
        <Popup>
          <span>
            {popTitle}
            <br />
            {currentAddress}
          </span>
        </Popup>
      </MapMarker>
    )
  }

  renderTopMap() {
    const { position, currentZoom } = this.state
    return (
      <Map
        center={position}
        onClick={this.onMapPress.bind(this)}
        onZoom={this.onZoomChanged.bind(this)}
        zoom={currentZoom}
        maxZoom={30}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy <a href=&quothttp://osm.org/copyright&quot>OpenStreetMap</a> contributors"
        />
        {this.renderMarker()}
      </Map>
    )
  }

  renderContent() {
    return (
      <div className="ypop-inner clearfix" id="locate-biz-pop-inner">
        <div className="map-popup-container hidden" style={{ display: 'block' }}>
          {this.renderHint()}

          <div className="popup-map">{this.renderTopMap()}</div>
        </div>
      </div>
    )
  }

  render() {
    const width = window.innerWidth
    const left = (width - 650) / 2
    return (
      <div className="ypop" id="locate-biz-pop" style={{ position: 'absolute', top: '50px', left }}>
        <div className="ypop-content clearfix" id="locate-biz-pop-content">
          {this.renderCloseIcon()}

          {this.renderTitle()}
          {this.renderContent()}
          {this.renderFooter()}
        </div>
      </div>
    )
  }

  handleClickOutside = (evt: any) => {
    this.props.onCloseFixMapMaker()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsFixMapMarker)
