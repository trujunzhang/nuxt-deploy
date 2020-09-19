const { Record } = require('immutable') // Using TypeScript with Immutable.js v4

const defaultPhotosOverlayRecord: IPhotosOverlayState = {
  ownedUserPhoto: null,
  overlayPhotos: {},
  currentPhoto: null,
  photosForPage: {},
  forObject: {}
}

export class PhotoOverlayStateRecord extends Record(defaultPhotosOverlayRecord) {}
