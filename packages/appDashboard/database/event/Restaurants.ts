import firebase from 'firebase'
import { IFBRestaurant } from 'ieattatypes'
import { restaurants, loadRestaurants } from '~/database/data/Restaurants'
import { FBCollections } from '~/database/constant'

export const uploadRestaurants = async ($fireStore: firebase.firestore.Firestore) => {
  for (const index in restaurants) {
    await uploadRestaurant($fireStore, restaurants[index])
  }
}

const uploadRestaurant = async ($fireStore: firebase.firestore.Firestore, restaurant: IFBRestaurant) => {
  const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(restaurant.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(restaurant)
    }
  } catch (e) {
    alert(e)
  }
}