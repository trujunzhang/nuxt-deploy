import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailRecipeState {
  FirebaseController firebaseController = Get.find();
  Rx<ParseModelRecipes?> _recipe = Rx<ParseModelRecipes?>(null);
  Rx<ParseModelRestaurants?> _restaurant = Rx<ParseModelRestaurants?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  ParseModelRecipes? get detailModel => _recipe.value;

  listenChanged(String recipeId, PhotoType photoType, ReviewType reviewType) {
    firebaseController.onRecipesChanged((value) {
      _recipe.value = FilterModels.instance
          .getSingleRecipe(firebaseController.recipesList, recipeId);
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value = FilterModels.instance
          .getPhotosList(firebaseController.photosList, recipeId, photoType);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance
          .getReviewsList(firebaseController.reviewsList, recipeId, reviewType);
    });
  }

  fetchData(String recipeId, PhotoType photoType, ReviewType reviewType) {
    // Model
    _recipe.value = FilterModels.instance
        .getSingleRecipe(firebaseController.recipesList, recipeId);
    // List
    photosList.value = FilterModels.instance
        .getPhotosList(firebaseController.photosList, recipeId, photoType);
    reviewsList.value = FilterModels.instance
        .getReviewsList(firebaseController.reviewsList, recipeId, reviewType);
  }
}
