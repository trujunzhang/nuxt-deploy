export class UpdatePhotosOverlay {
  static update(state: any, updatedPhotoModel: IParseModelPhotos) {
    const { photosForPage } = state
    photosForPage[updatedPhotoModel.id] = updatedPhotoModel
    return {
      photosForPage,
      ownedUserPhoto: updatedPhotoModel
    }
  }
}
