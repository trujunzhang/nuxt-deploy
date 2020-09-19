import * as Types from '@app/types'

import { StatusConstants } from '@app/types'

const initialState: IDetailedModelsOverlayState = {
  currentModel: null,
  overlayModel: null,
  statistic: null,
  googleAddressReverse: null
}

export function detailedModelsOverlayReducer(state = initialState, action) {
  const payload = action.payload
  switch (action.type) {
    case Types.common.OVERLAY_LOADED_MODEL_PAGE: {
      /**
       * The following is the payload's format:
       *    1. const payload = {parseId, model}
       */
      return Object.assign({}, state, {
        currentModel: payload as IFetchedParseModel
      })
    }
    case Types.common.STATISTIC_CLOUD_MODEL: {
      // debugger
      return Object.assign({}, state, {
        statistic: action.payload
      })
    }

    case Types.common.RESTAURANT_CLOUD_ADDRESS_MODEL: {
      const nextGoogleReverseModel: IGoogleReverseModelPayload = action.payload as IGoogleReverseModelPayload
      if (
        typeof nextGoogleReverseModel.model === 'string' &&
        nextGoogleReverseModel.model === StatusConstants.fetchedGoogleReverseModelError
      ) {
        // throw exception.
      } else {
        return Object.assign({}, state, {
          googleAddressReverse: nextGoogleReverseModel
        })
      }
      break
    }
    /**
     * Update the current model after saved the model.
     */
    case Types.editModelAction.UPDATE_MODEL_REQUEST: {
      return Object.assign({}, state, {
        currentModel: action.payload
      })
    }
    case Types.common.OVERLAY_LOADED_MODEL_RESET: {
      return Object.assign({}, state, {
        currentModel: null
      })
    }
    case Types.global.APP_OVERLAY_SHOW_MODEL: {
      return Object.assign({}, state, {
        overlayModel: action.payload
      })
    }
    case Types.global.APP_OVERLAY_DISMISS_MODEL: {
      return Object.assign({}, state, {
        overlayModel: null
      })
    }
  }
  return state
}
