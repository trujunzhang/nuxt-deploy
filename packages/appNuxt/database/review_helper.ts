import VueRouter, { Route, RawLocation, NavigationGuard } from 'vue-router'
import firebase from 'firebase'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'

export type SingleReviewCB = (review: IFBReview | null) => void

export class ReviewHelper {
  static async onSaveReviewAfterHook (
    $fireStore: firebase.firestore.Firestore,
    restaurantId: string,
    lastReviewRate: number,
    selectedStar: number,
    isNew: boolean
  ) {
    const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(restaurantId)
    const documentSnapshot = await messageRef.get()
    const restaurant: IFBRestaurant | null | any = documentSnapshot.data()
    const nextRate = restaurant.rate - lastReviewRate + selectedStar
    const reviewCount = restaurant.reviewCount
    const nextReviewCount = reviewCount + (isNew ? 1 : 0)

    const nextRestaurant = Object.assign(restaurant, {
      rate: nextRate,
      reviewCount: nextReviewCount
    })
    await messageRef.set(nextRestaurant)
  }

  static checkNewReviewPage (
    $route: Route
  ) {
    const reviewId = $route.query.rid as string
    return reviewId === undefined || reviewId === null
  }

  static async saveReview (
    $fireStore: firebase.firestore.Firestore,
    model: IFBReview
  ) {
    const messageRef = $fireStore.collection(FBCollections.Reviews).doc(model.uniqueId)
    try {
      await messageRef.set(model)
      return true
      // eslint-disable-next-line no-empty
    } catch (e) {
      return false
    }
  }

  static getSingleReviewFromRId (
    $route: Route,
    $fireStore: firebase.firestore.Firestore,
    cb: SingleReviewCB
  ) {
    const reviewId = $route.query.rid as string
    const nextQuery = $fireStore.collection(FBCollections.Reviews).doc(reviewId)
    nextQuery.get().then(
      (documentSnapshot) => {
        // console.log('.........')
        // const size = docmentSnapshot.size
        // const empty = documentSnapshot.empty
        const data = documentSnapshot.data()
        const review: IFBReview | null = documentSnapshot.data() as IFBReview
        cb(review)
      }
    ).catch((ex) => {
      cb(null)
    })
  }
}
