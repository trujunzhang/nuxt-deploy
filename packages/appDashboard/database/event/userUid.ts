import firebase from 'firebase'
import { password, users } from '~/database/data/Users'

export const getCreatorIdDict = async ($fireAuth: firebase.auth.Auth) => {
  const creatorIdDict = {}
  for (const index in users) {
    const cb = await $fireAuth.signInWithEmailAndPassword(
      users[index].email,
      password
    )
    const user: any = cb.user?.toJSON()
    creatorIdDict[users[index].id] = user.uid
  }
  return creatorIdDict
}
