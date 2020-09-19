export class PhotosPages {
  static addPhoto = {
    name: 'photosNew',
    pattern: '/photos/add/:modelType/:forObjectUniqueId',
    page: 'editPhotoForm'
  }

  static browserForRecipe = {
    name: 'photosBrowserForRecipe',
    pattern: '/recipe_photos/:recipeUniqueId/:oslug',
    page: 'recipeSingle'
  }
}
