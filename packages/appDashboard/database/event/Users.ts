import firebase from 'firebase/compat'
import { IFBUser } from 'ieattatypes/types/index'
import { loadUsers, password } from '~/database/data/Users'
import { FBCollections } from '~/database/constant'

export const uploadUsers = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  for (const index in loadUsers()) {
    try {
      await createUser($fireAuth, $fireStore, loadUsers()[index])
    } catch (e) {
      await loginUser($fireAuth, $fireStore, loadUsers()[index])
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
      const nextUser = Object.assign({}, model)
      await messageRef.set(
        Object.assign(nextUser, { id: uid })
      )
    }
  } catch (e) {
    alert(e)
  }
}
