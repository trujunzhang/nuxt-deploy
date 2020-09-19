import { BaseAfter } from './baseAfter'

import { StatusConstants } from '@app/types'

function checkEmptyLocation(location) {
  const { latitude: lat, longitude: lng } = location

  return (
    StatusConstants.emptyLocation.latitude === lat &&
    StatusConstants.emptyLocation.longitude === lng
  )
}

export class AfterSaveRestaurant extends BaseAfter {
  async handler(request) {
    const restaurant = request.object
    const restaurantId = restaurant.id

    const object = await new Parse.Query('Restaurant').get(restaurantId)
    if (!!object.get('address')) {
      console.log('(3.4) after query restaurant, @Exist[address]:', object.get('address'))
      return
    }

    const location = object.get('geoLocation')
    const { latitude: lat, longitude: lng } = location

    if (checkEmptyLocation(location)) {
      console.log('(3.5) after query restaurant, @Empty[location]:', object.get('geoLocation'))
      return
    }

    const params: IGoogleAddressFetchParams = {
      lat,
      lng
    }

    const result: IGoogleAddressFetchResult = await Parse.Cloud.run(
      'getAddressFromLocation',
      params
    )

    object.set('address', result.address)
    object.set('street_number', result.street_number)
    object.set('route', result.route)
    object.set('locality', result.locality)
    object.set('sublocality', result.sublocality)
    object.set('country', result.country)
    object.set('postal_code', result.postal_code)
    object.set('administrative_area', result.administrative_area)

    return object.save()
  }
}
