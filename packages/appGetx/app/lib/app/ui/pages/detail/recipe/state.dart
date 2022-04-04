import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class DetailRecipeState {
  FirebaseController firebaseController = Get.find();
  final Rx<ParseModelRecipes?> _recipe = Rx<ParseModelRecipes?>(null);
  final Rx<ParseModelRestaurants?> _restaurant =
      Rx<ParseModelRestaurants?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  ParseModelRecipes? get detailModel => _recipe.value;

  listenChanged(String recipeId, PhotoType photoType, ReviewType reviewType) {
    firebaseController.onRecipesChanged((value) {
      _recipe.value = firebaseController.recipesList.singleRecipe(recipeId);
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value =
          firebaseController.photosList.filterPhotosList(recipeId, photoType);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = firebaseController.reviewsList
          .filterReviewsList(recipeId, reviewType);
    });
  }

  fetchData(String recipeId, PhotoType photoType, ReviewType reviewType) {
    // Model
    _recipe.value = firebaseController.recipesList.singleRecipe(recipeId);
    // List
    photosList.value =
        firebaseController.photosList.filterPhotosList(recipeId, photoType);
    reviewsList.value =
        firebaseController.reviewsList.filterReviewsList(recipeId, reviewType);
  }
}
