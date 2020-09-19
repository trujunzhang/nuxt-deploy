import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import * as Types from '@app/types'

import {
  OwnPhotoAnotherUser,
  OwnPhotoForRecipe,
  RemoveSelectedPhoto,
  WriteOnlineParseObjects
} from '@web/actions/utils'

async function _writeOnlineParseObject(params: IWriteWebParseObjectParams) {
  const { editModelType, objectSchemaName, model } = params
  const instance = new WriteOnlineParseObjects({ editModelType, objectSchemaName })
  await instance.write(model)
  const action = instance.end()
  return Promise.all([Promise.resolve(action)])
}

async function _uploadLoggedUser(model) {
  // step1: get logged user.
  const current = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_USERS).get(
    model.parseId
  )
  current.set('username', model.username)
  current.set('email', model.email)
  // step2: update user.
  await current.save()
  const action = {
    type: Types.editModelAction.SAVE_MODEL_REQUEST
  }
  return Promise.all([Promise.resolve(action)])
}

function invokeEventFromAction(action) {
  return (dispatch) => {
    action.then(([result]) => {
      dispatch(result)
    })
    return action
  }
}

async function _ownPhotoForRecipe(params: IOwnPhotoForRecipeParams) {
  const instance = new OwnPhotoForRecipe()
  await instance.change(params)
  const action = instance.end()
  return Promise.all([Promise.resolve(action)])
}

/**
 * http:   //docs.parseplatform.org/js/guide/#objects
 * @param photo
 * @returns {Promise.<*[]>}
 * @private
 */
async function _removeSelectedPhoto(photo: IParseModelPhotos) {
  const instance = new RemoveSelectedPhoto()
  await instance.remove(photo)
  const action = instance.end()
  return Promise.all([Promise.resolve(action)])
}

async function _ownAnotherPhotoUser(params: IOwnPhotoAnotherUserChangeParams) {
  const instance = new OwnPhotoAnotherUser()
  await instance.change(params)
  const action = instance.end()
  return Promise.all([Promise.resolve(action)])
}

export function writeOnlineParseObject(params: IWriteWebParseObjectParams) {
  const { editModelType, objectSchemaName, model } = params
  return invokeEventFromAction(_writeOnlineParseObject({ editModelType, objectSchemaName, model }))
}

// write Online parse Objects.

export function uploadLoggedUser(model) {
  return invokeEventFromAction(_uploadLoggedUser(model))
}

// Photos owner
export function ownAnotherPhotoUser(params: IOwnPhotoAnotherUserChangeParams) {
  return invokeEventFromAction(_ownAnotherPhotoUser(params))
}

// Remove Photos
export function removeSelectedPhoto(photo: IParseModelPhotos) {
  return invokeEventFromAction(_removeSelectedPhoto(photo))
}

// Relate photo for recipe.
export function ownPhotoForRecipe(params: IOwnPhotoForRecipeParams) {
  return invokeEventFromAction(_ownPhotoForRecipe(params))
}
