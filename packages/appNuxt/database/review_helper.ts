import firebase from 'firebase'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'

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
}
