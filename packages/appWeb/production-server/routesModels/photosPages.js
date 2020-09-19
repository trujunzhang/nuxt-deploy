"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhotosPages {
}
exports.PhotosPages = PhotosPages;
PhotosPages.addPhoto = {
    name: 'photosNew',
    pattern: '/photos/add/:modelType/:forObjectUniqueId',
    page: 'editPhotoForm'
};
PhotosPages.browserForRecipe = {
    name: 'photosBrowserForRecipe',
    pattern: '/recipe_photos/:recipeUniqueId/:oslug',
    page: 'recipeSingle'
};
