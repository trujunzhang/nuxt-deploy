import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

import 'models/User_menu_model.dart';

class UserProfileState {
  FirebaseController firebaseController = Get.find();

  List<UserMenu> userMenus = [];

  final Rx<ParseModelUsers?> _user = Rx<ParseModelUsers?>(null);

  ParseModelUsers? get detailModel => _user.value;

  RxList<ParseModelRestaurants> restaurantsList =
      RxList<ParseModelRestaurants>([]);
  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  initEditModel(String userId) {
    _user.value = FilterModels.instance
        .getSingleUser(firebaseController.usersList, userId);
  }

  listenChanged(String userId) {
    firebaseController.onUsersChanged((value) {
      _user.value = FilterModels.instance
          .getSingleUser(firebaseController.usersList, userId);
    });
    firebaseController.onRestaurantsChanged((value) {
      restaurantsList.value = FilterModels.instance
          .getRestaurantsListByUser(firebaseController.restaurantsList, userId);
      userMenus = generateUserMenus();
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value = FilterModels.instance
          .getPhotosListByUser(firebaseController.photosList, userId);
      userMenus = generateUserMenus();
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance
          .getReviewsListByUser(firebaseController.reviewsList, userId);
      userMenus = generateUserMenus();
    });
  }

  fetchData(String userId) {
    restaurantsList.value = FilterModels.instance
        .getRestaurantsListByUser(firebaseController.restaurantsList, userId);
    photosList.value = FilterModels.instance
        .getPhotosListByUser(firebaseController.photosList, userId);
    reviewsList.value = FilterModels.instance
        .getReviewsListByUser(firebaseController.reviewsList, userId);

    userMenus = generateUserMenus();
  }

  List<UserMenu> generateUserMenus() {
    UserMenu restaurantsMenu =
        UserMenu("Restaurants", restaurantsList.length, Icons.food_bank);
    UserMenu photosMenu =
        UserMenu('Photos', photosList.length, Icons.photo_sharp);
    UserMenu reviewsMenu =
        UserMenu('Reviews', reviewsList.length, Icons.rate_review);
    return [restaurantsMenu, photosMenu, reviewsMenu];
  }
}
