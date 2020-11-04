import firebase from 'firebase'
import { IFBUser } from 'ieattatypes/types/index'
import { users, password } from '~/database/data/Users'
import { FBCollections } from '~/database/constant'

export const uploadUsers = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  for (const index in users) {
    try {
      await createUser($fireAuth, $fireStore, users[index])
    } catch (e) {
      await loginUser($fireAuth, $fireStore, users[index])
      // alert(e)
    }
  }
}

const createUser = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore, model: IFBUser) => {
  const cb = await $fireAuth.createUserWithEmailAndPassword(
    model.email,
    password
  )
  const user = cb.user?.toJSON()
  if (user) {
    const uid = (user as any).uid
    await uploadUser($fireStore, model, uid)
    // debugger
  }
}

const loginUser = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore, model: IFBUser) => {
  const cb = await $fireAuth.signInWithEmailAndPassword(
    model.email,
    password
  )
  const user = cb.user?.toJSON()
  if (user) {
    const uid = (user as any).uid
    await uploadUser($fireStore, model, uid)
    // debugger
  }
}

const uploadUser = async ($fireStore: firebase.firestore.Firestore, model: IFBUser, uid: string) => {
  const messageRef = $fireStore.collection(FBCollections.Users).doc(uid)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(
        Object.assign(model, { id: uid })
      )
    }
  } catch (e) {
    alert(e)
  }
}
