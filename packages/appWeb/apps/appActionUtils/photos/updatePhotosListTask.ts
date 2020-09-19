import { UnderscoreUtils } from '@app/tools'
export class UpdatePhotosListTask {
  static update(photosList: IListWithPhotosDictTask, updatedPhotoModel: IParseModelPhotos) {
    const { results } = photosList
    const updatedPhotoIndex = UnderscoreUtils.findIndexInArray({
      array: results,
      predicate: { id: updatedPhotoModel.id }
    })

    if (updatedPhotoIndex !== -1) {
      results[updatedPhotoIndex] = updatedPhotoModel
      return Object.assign({}, photosList, {
        results
      })
    }

    return photosList
  }
}
