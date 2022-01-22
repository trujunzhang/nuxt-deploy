import firebase from 'firebase/compat'
import { IFBPhoto, IFBRestaurant, IFBRecipe, IFBReview, IFBEvent, IFBPeopleInEvent } from 'ieattatypes/types/index'
import { password, loadUsers } from '~/database/data/Users'

export const getCreatorIdDict = async ($fireAuth: firebase.auth.Auth) => {
  const creatorIdDict = {}
  const clone = loadUsers().slice()
  for (const index in clone) {
    const userId = clone[index].id
    const cb = await $fireAuth.signInWithEmailAndPassword(
      loadUsers()[index].email,
      password
    )
    const onlineUser: any = cb.user?.toJSON()
    creatorIdDict[userId] = onlineUser.uid
  }
  return creatorIdDict
}

export const fixCreatorId = (creatorIdDict, model: IFBPhoto | IFBRestaurant | IFBRecipe | IFBReview | IFBEvent | IFBPeopleInEvent) => {
  const creatorId: any = model.creatorId
  let fixedCreatorId = creatorId
  if (Object.keys(creatorIdDict).includes(creatorId)) {
    fixedCreatorId = creatorIdDict[creatorId]
  }
  let nextModel = Object.assign(
    model,
    {
      creatorId: fixedCreatorId
    }
  )
  if (Object.keys(model).includes('userId')) {
    nextModel = Object.assign(
      model,
      {
        userId: fixedCreatorId,
        creatorId: fixedCreatorId
      }
    )
  }
  return nextModel
}
