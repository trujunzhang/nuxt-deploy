export * from './authSession/authSessionReducer'

export * from './authModel/authReducer'

export * from './realmModels'
export * from './alert'
export * from './photosOverlay/photosOverlayReducer'

export * from './config'

export * from './detailedModelsOverlay'
export * from './editModel/editModelReducer'
export * from './takenPhotos/takenPhotosReducer'

// Universal reducers.
export * from './listContainerReducer'

// Actions
import * as authParseActions from './authModel/authActions'
import * as editModelActions from './editModel/editModelActions'

// Only for jest
import { AuthFormState, AuthModelField } from './authModel/authInitialState'

import { EditFormState, EditModelField } from './editModel/editModelInitialState'

export {
  // Actions
  authParseActions,
  editModelActions,
  // Only for jest
  AuthFormState,
  AuthModelField,
  EditFormState,
  EditModelField
}
