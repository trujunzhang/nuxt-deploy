import { combineReducers } from 'redux'

import {
  alert,
  authReducer,
  authSessionReducer,
  configReducer,
  detailedModelsOverlayReducer,
  editModelReducer,
  listContainerReducer,
  photosOverlayReducer,
  realmModelsReducer,
  takenPhotosReducer
} from '@appRedux/index' //from '@app/library' //  '@app/redux'

export default combineReducers({
  authSession: authSessionReducer,
  detailedModelsOverlay: detailedModelsOverlayReducer,
  editModel: editModelReducer,
  authModel: authReducer,
  config: configReducer,
  listContainerTasks: listContainerReducer,
  appAlert: alert,
  photosOverlay: photosOverlayReducer,
  realmModels: realmModelsReducer,
  takenPhotosList: takenPhotosReducer
} as any)
