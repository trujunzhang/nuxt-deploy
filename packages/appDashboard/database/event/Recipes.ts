import firebase from 'firebase'
import { IFBRecipe } from 'ieattatypes/types/index'
import { recipes } from '~/database/data/Recipes'
import { FBCollections } from '~/database/constant'

export const uploadRecipes = async ($fireStore: firebase.firestore.Firestore) => {
  for (const index in recipes) {
    await uploadRecipe($fireStore, recipes[index])
  }
}

const uploadRecipe = async ($fireStore: firebase.firestore.Firestore, recipe: IFBRecipe) => {
  const messageRef = $fireStore.collection(FBCollections.Recipes).doc(recipe.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(recipe)
    }
  } catch (e) {
    alert(e)
  }
}
