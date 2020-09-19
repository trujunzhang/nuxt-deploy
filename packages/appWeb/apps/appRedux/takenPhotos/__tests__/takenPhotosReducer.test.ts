import { takenPhotosReducer as reducer } from '../takenPhotosReducer'
import { TakenPhotosList } from '../takenPhotosInitialState'

import * as actions from '@appActions/index'

import * as Types from '@app/types'

describe('Taken photos TESTS', () => {
  let firstState
  beforeAll(() => {
    const initialState = new TakenPhotosList([])
    firstState = reducer(initialState, {})
  })
  it('Should return taken photos list.', () => {
    // Step1: push one edited comment.
    const pushAction = actions.resetTakenPhotos()

    let nextState = reducer(firstState, pushAction)
    expect(nextState.size).toEqual(0)

    // Step2: push a new taken photo
    const newTakenPhotoAction = {
      type: Types.takePhotos.TAKEN_PHOTOS_LIST_SAVED,
      payload: {
        savedTakenPhotoInstance: {
          uniqueId: 'newPhotoUniqueId'
        }
      }
    }

    nextState = reducer(nextState, newTakenPhotoAction)
    expect(nextState.size).toEqual(1)
  })
})
