// import { Md5Utils } from '@app/tools'
import firebase from 'firebase'
import { IFBUser } from 'ieattatypes/types/index'
import { users } from '~/database/data/Users'
import { FBCollections } from '~/database/constant'

const password = 'pwd123'

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

// const getEmailMd5 = (email: string) => {
//   return Md5Utils.getMd5String(email)
// }

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
  // const messageRef = $fireStore.collection(FBCollections.Users).doc(getEmailMd5(model.email))
  const messageRef = $fireStore.collection(FBCollections.Users).doc(uid)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(model)
    }
  } catch (e) {
    alert(e)
  }
}
