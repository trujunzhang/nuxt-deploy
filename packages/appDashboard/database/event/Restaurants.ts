import firebase from 'firebase/compat'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { loadRestaurants } from '~/database/data/Restaurants'
import { FBCollections } from '~/database/constant'
import { getCreatorIdDict, fixCreatorId } from '~/database/event/userUid'

export const uploadRestaurants = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadRestaurants()) {
    // await uploadRestaurant($fireStore, creatorIdDict, loadRestaurants()[index])
  }

  // For debug firebase's function.
  await uploadRestaurant($fireStore, creatorIdDict, loadRestaurants()[0])
}

const uploadRestaurant = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, restaurant: IFBRestaurant) => {
  const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(restaurant.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, restaurant))
    }
  } catch (e) {
    alert(e)
  }
}
