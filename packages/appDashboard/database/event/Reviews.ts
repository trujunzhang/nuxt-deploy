import firebase from 'firebase'
import { IFBReview } from 'ieattatypes/types/index'
import { loadReviews } from '~/database/data/Reviews'
import { FBCollections } from '~/database/constant'
import { fixCreatorId, getCreatorIdDict } from '~/database/event/userUid'

export const uploadReviews = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadReviews()) {
    await uploadReview($fireStore, creatorIdDict, loadReviews()[index])
  }
}

const uploadReview = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, review: IFBReview) => {
  // let messageRef
  // if (review.reviewType === 'restaurant') {
  //   messageRef = $fireStore.collection(FBCollections.Restaurants).doc(review.restaurantId)
  //     .collection(FBCollections.Reviews).doc(review.uniqueId)
  // }
  // if (review.reviewType === 'event') {
  //   messageRef = $fireStore.collection(FBCollections.Restaurants).doc(review.restaurantId)
  //     .collection(FBCollections.Events).doc(review.eventId)
  //     .collection(FBCollections.Reviews).doc(review.uniqueId)
  // }
  // if (review.reviewType === 'recipe') {
  //   messageRef = $fireStore.collection(FBCollections.Restaurants).doc(review.restaurantId)
  //     .collection(FBCollections.Recipes).doc(review.recipeId)
  //     .collection(FBCollections.Reviews).doc(review.uniqueId)
  // }
  const messageRef = $fireStore.collection(FBCollections.Reviews).doc(review.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, review))
    }
  } catch (e) {
    alert(e)
  }
}
