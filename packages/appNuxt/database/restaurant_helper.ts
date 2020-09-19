import VueRouter, { Route, RawLocation, NavigationGuard } from 'vue-router'
import firebase from 'firebase'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'

export type SingleRestaurantCB = (restaurant: IFBRestaurant | null) => void

export class RestaurantHelper {
  static checkNewRestaurantPage (
    $route: Route
  ) {
    const restaurantId = $route.query.biz_id as string
    return restaurantId === undefined || restaurantId === null
  }

  static async saveRestaurant (
    $fireStore: firebase.firestore.Firestore,
    model: IFBRestaurant
  ) {
    const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(model.uniqueId)
    try {
      await messageRef.set(model)
      return true
      // eslint-disable-next-line no-empty
    } catch (e) {
      return false
    }
  }

  static getSingleRestaurantFromId (
    restaurantId: string,
    $fireStore: firebase.firestore.Firestore,
    cb: SingleRestaurantCB
  ) {
    const nextQuery = $fireStore.collection(FBCollections.Restaurants).doc(restaurantId)
    nextQuery.get().then(
      (documentSnapshot) => {
        // console.log('.........')
        // const size = docmentSnapshot.size
        // const empty = documentSnapshot.empty
        const data = documentSnapshot.data()
        const restaurant: IFBRestaurant | null = documentSnapshot.data() as IFBRestaurant
        cb(restaurant)
      }
    ).catch((ex) => {
      cb(null)
    })
  }

  static getSingleRestaurantFromSlug (
    $route: Route,
    $fireStore: firebase.firestore.Firestore,
    cb: SingleRestaurantCB
  ) {
    const restaurantSlug = $route.params.slug as string
    const nextQuery = $fireStore.collection(FBCollections.Restaurants)
      .where('slug', '==', restaurantSlug)
    nextQuery.get().then(
      (documentSnapshots) => {
        // console.log('.........')
        const size = documentSnapshots.size
        const empty = documentSnapshots.empty
        let restaurant: IFBRestaurant | null = null
        documentSnapshots.forEach((doc) => {
          restaurant = doc.data() as IFBRestaurant
        })
        cb(restaurant)
      }
    ).catch((ex) => {
      cb(null)
    })
  }
}
