import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

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
      _restaurant.value =
          firebaseController.restaurantsList.singleRestaurant(restaurantId);
    });
    firebaseController.onEventsChanged((value) {
      eventsList.value =
          firebaseController.eventsList.filterByRestaurantId(restaurantId);
    });
    firebaseController.onRecipesChanged((value) {
      recipesList.value =
          firebaseController.recipesList.filterByRestaurantId(restaurantId);
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value = firebaseController.photosList
          .filterPhotosList(restaurantId, photoType);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = firebaseController.reviewsList
          .filterReviewsList(restaurantId, reviewType);
    });
  }

  fetchData(String restaurantId, PhotoType photoType, ReviewType reviewType) {
    // Model
    _restaurant.value =
        firebaseController.restaurantsList.singleRestaurant(restaurantId);
    // List
    eventsList.value =
        firebaseController.eventsList.filterByRestaurantId(restaurantId);
    recipesList.value =
        firebaseController.recipesList.filterByRestaurantId(restaurantId);
    photosList.value =
        firebaseController.photosList.filterPhotosList(restaurantId, photoType);
    reviewsList.value = firebaseController.reviewsList
        .filterReviewsList(restaurantId, reviewType);
  }
}
