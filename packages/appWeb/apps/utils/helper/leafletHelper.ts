import { AppLinks } from '@appUtils/index'
import { LocationHelper } from '@appModels/index' //from '@app/library' //  '@app/models'

declare interface ILeafletHelperGetMapInfoParams {
  currentUser?: IParseModelUsers
  model: IRestaurantObjectForMapInfo
  location: IParseGeoPointWithNull
  showEditButton: boolean
  autoPopup: boolean
  onlyMap: boolean
}

export class LeafletHelper {
  static getMapInfo(params: ILeafletHelperGetMapInfoParams): IRestaurantMapInfo {
    const {
      currentUser,
      model,
      location,
      showEditButton,
      autoPopup,
      onlyMap // : boolean = false
    } = params

    const fixedLocation = LocationHelper.fixLocation(location)

    return {
      latitude: fixedLocation.latitude,
      longitude: fixedLocation.longitude,
      displayName: model.displayName,
      address: model.address,
      editLink: AppLinks.getEditRestaurantLink(model),
      showEditButton: showEditButton && !!currentUser,
      autoPopup,
      onlyMap
    }
  }

  static generateMarkers({ listContainerTasks, listId }) {
    const task = listContainerTasks[listId] || {}
    const markers: IRestaurantMarker[] = (task.results || []).map((restaurant, index) => {
      return LeafletHelper.getMarker(restaurant)
    })

    const defaultMarker: RestaurantMarkerWithNull = markers.length > 0 ? markers[0] : null
    return {
      markers,
      defaultMarker
    }
  }

  static getMarker(restaurant: IParseModelRestaurants) {
    return {
      lat: restaurant.geoLocation.latitude,
      lng: restaurant.geoLocation.longitude
    }
  }
}
