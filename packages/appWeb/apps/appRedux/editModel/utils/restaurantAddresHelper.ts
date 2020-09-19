export class RestaurantAddresHelper {
  static updateRestaurantAddress(state, restaurant) {
    const nextState = state
      .setIn(['form', 'fields', 'address'], restaurant.address || '')
      .setIn(['form', 'fields', 'street_number'], restaurant.street_number || '')
      .setIn(['form', 'fields', 'route'], restaurant.route || '')
      .setIn(['form', 'fields', 'locality'], restaurant.locality || '')
      .setIn(['form', 'fields', 'sublocality'], restaurant.sublocality || '')
      .setIn(['form', 'fields', 'country'], restaurant.country || '')
      .setIn(['form', 'fields', 'postal_code'], restaurant.postal_code || '')
      .setIn(['form', 'fields', 'administrative_area'], restaurant.administrative_area || '')
      .setIn(['form', 'fields', 'latitude'], restaurant.geoLocation.latitude || 0)
      .setIn(['form', 'fields', 'longitude'], restaurant.geoLocation.longitude || 0)

    return nextState
  }
}
