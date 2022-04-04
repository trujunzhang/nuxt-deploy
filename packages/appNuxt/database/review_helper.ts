import firebase from 'firebase/compat'
import { IFBRestaurant, IFBReview, IFBEvent, IFBRecipe } from 'ieattatypes/types/index'
import { FBCollections, getReviewRelatedPath } from '~/database/constant'

export class ReviewHelper {
  static async onSaveReviewAfterHook (
    $fireStore: firebase.firestore.Firestore,
    relatedtId: string,
    reviewType: string,
    lastReviewRate: number,
    selectedStar: number,
    isNew: boolean
  ) {
    // Step1: get the online model.
    const messageRef = $fireStore.collection(getReviewRelatedPath(reviewType)).doc(relatedtId)
    const documentSnapshot = await messageRef.get()
    const relatedModel: IFBRestaurant | IFBEvent | IFBRecipe | null | any = documentSnapshot.data()
    // Step2: Add rating to the model.
    const nextRate = relatedModel.rate - lastReviewRate + selectedStar
    const reviewCount = relatedModel.reviewCount
    const nextReviewCount = reviewCount + (isNew ? 1 : 0)

    // Step3: Save the online model.
    const nextRestaurant = Object.assign(relatedModel, {
      rate: nextRate,
      reviewCount: nextReviewCount
    })
    await messageRef.set(nextRestaurant)
  }
}
