import firebase from 'firebase'
import { IFBRecipe } from 'ieattatypes/types/index'
import { loadRecipes } from '~/database/data/Recipes'
import { FBCollections } from '~/database/constant'
import { fixCreatorId, getCreatorIdDict } from '~/database/event/userUid'

export const uploadRecipes = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadRecipes()) {
    await uploadRecipe($fireStore, creatorIdDict, loadRecipes()[index])
  }
}

const uploadRecipe = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, recipe: IFBRecipe) => {
  // const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(recipe.restaurantId)
  //   .collection(FBCollections.Recipes).doc(recipe.uniqueId)
  const messageRef = $fireStore.collection(FBCollections.Recipes).doc(recipe.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, recipe))
    }
  } catch (e) {
    alert(e)
  }
}
