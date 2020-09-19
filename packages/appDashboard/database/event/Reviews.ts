import firebase from 'firebase'
import { IFBReview, IFBUser } from 'ieattatypes'
import { reviews } from '~/database/data/Reviews'
import { users, filterUser } from '~/database/data/Users'
import { FBCollections } from '~/database/constant'

export const uploadReviews = async ($fireStore: firebase.firestore.Firestore) => {
  for (const index in reviews) {
    await uploadReview($fireStore, reviews[index])
  }
}

const fixUserId = async ($fireStore: firebase.firestore.Firestore, review: IFBReview) => {
  const creatorId = review.creatorId
  const user: IFBUser | null = filterUser(creatorId)
  if (user !== null) {
    const messageRef = $fireStore.collection(FBCollections.Users).where('email', '==', user.email)
    const list = await messageRef.get()
    if (!list.empty) {
      const onlineUser = list.docs[0]
      const userId = onlineUser.id
      const username = onlineUser.data().username
      // debugger
      return userId
    }
  }
  return ''
}

const uploadReview = async ($fireStore: firebase.firestore.Firestore, review: IFBReview) => {
  const messageRef = $fireStore.collection(FBCollections.Reviews).doc(review.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      const userId = await fixUserId($fireStore, review)
      review.creatorId = userId
      await messageRef.set(review)
    }
  } catch (e) {
    alert(e)
  }
}
