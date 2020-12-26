import firebase from 'firebase'
import { IFBPhoto, IFBRestaurant, IFBRecipe, IFBReview, IFBEvent, IFBPeopleInEvent } from 'ieattatypes/types/index'
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
