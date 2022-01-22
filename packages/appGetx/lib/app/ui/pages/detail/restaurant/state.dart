import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailRestaurantState {
  FirebaseController firebaseController = Get.find();
  final Rx<ParseModelRestaurants?> _restaurant =
      Rx<ParseModelRestaurants?>(null);
  RxList<ParseModelEvents> eventsList = RxList<ParseModelEvents>([]);
  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);
  RxList<ParseModelRecipes> recipesList = RxList<ParseModelRecipes>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  ParseModelRestaurants? get detailModel => _restaurant.value;

  listenChanged(
      String restaurantId, PhotoType photoType, ReviewType reviewType) {
    firebaseController.onRestaurantsChanged((value) {
      _restaurant.value = FilterModels.instance.getSingleRestaurant(
          firebaseController.restaurantsList, restaurantId);
    });
    firebaseController.onEventsChanged((value) {
      eventsList.value = FilterModels.instance
          .getEventsList(firebaseController.eventsList, restaurantId);
    });
    firebaseController.onRecipesChanged((value) {
      recipesList.value = FilterModels.instance
          .getRecipesList(firebaseController.recipesList, restaurantId);
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value = FilterModels.instance.getPhotosList(
          firebaseController.photosList, restaurantId, photoType);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance.getReviewsList(
          firebaseController.reviewsList, restaurantId, reviewType);
    });
  }

  fetchData(String restaurantId, PhotoType photoType, ReviewType reviewType) {
    // Model
    _restaurant.value = FilterModels.instance
        .getSingleRestaurant(firebaseController.restaurantsList, restaurantId);
    // List
    eventsList.value = FilterModels.instance
        .getEventsList(firebaseController.eventsList, restaurantId);
    recipesList.value = FilterModels.instance
        .getRecipesList(firebaseController.recipesList, restaurantId);
    photosList.value = FilterModels.instance
        .getPhotosList(firebaseController.photosList, restaurantId, photoType);
    reviewsList.value = FilterModels.instance.getReviewsList(
        firebaseController.reviewsList, restaurantId, reviewType);
  }
}
