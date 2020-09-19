// import { expectedGoogleReverseModel, mockLocation, mockLocationArray } from '@app/mocks'
// import { GetAddressFromLocationUtils } from '../getAddressFromLocation'
// import { IGoogleReverseModel } from '@app/types'

// require('dotenv').config()

// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

// const googleMapsClient = require('@google/maps').createClient({
//   key: GOOGLE_API_KEY,
//   Promise: Promise
// })

describe('methods correctly for google services', () => {
  test('geocode client library', () => {
    //     function expectOK(response) {
    //       expect(response.status).toBe(200)
    //       expect(response.json.status).toBe('OK')
    //       return response
    //     }
    //     function expectOperaHouse(response) {
    //       const nextGoogleReverseModel: IGoogleReverseModel = GetAddressFromLocationUtils.parse_address(
    //         response.json
    //       )
    //       expect(nextGoogleReverseModel).toEqual(expectedGoogleReverseModel)
    //       return response
    //     }
    //     googleMapsClient
    //       .reverseGeocode({
    //         latlng: mockLocationArray
    //       })
    //       .asPromise()
    //       .then(expectOK)
    //       .then(expectOperaHouse)
    //       .catch((err) => {
    //         console.log(err)
    //       })
  })
})
