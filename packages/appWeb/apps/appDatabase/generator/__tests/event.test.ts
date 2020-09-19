import { NewRealmObjectGenerator } from '../newRealmObjectGenerator'
import {
  mockedRealmRestaurant,
  mockedNormalRealmUserInstance,
  mackExpectedCallbackFacebookAction,
  mackExpectedCallbackTwitterAction
} from 'app/mocks'

import { ckeckRealmCommon } from './expectCommon'

describe('generateNewEventRealmObject', () => {
  test('should renturn object correctly,invoke generateNewEventRealmObject function', () => {
    const newRealmObject: IRealmModelEvents = NewRealmObjectGenerator.generateNewEventRealmObject({
      restaurant: mockedRealmRestaurant,
      realmUser: mockedNormalRealmUserInstance
    })
    ckeckRealmCommon(newRealmObject)

    expect(newRealmObject.start).toBeDefined()
    expect(newRealmObject.end).toBeDefined()
    expect(newRealmObject.displayName).toEqual('')
    expect(newRealmObject.want).toEqual('')
    expect(newRealmObject.restaurantUniqueId).toEqual(mockedRealmRestaurant.uniqueId)
  })
})
