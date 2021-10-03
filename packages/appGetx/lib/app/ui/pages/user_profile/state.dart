import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

import 'User_menu_model.dart';

class UserProfileState {
  FirebaseController firebaseController = Get.find();

  List<UserMenu> userMenus = [];

  Rx<ParseModelUsers?> _user = Rx<ParseModelUsers?>(null);

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
    firebaseController.onRestaurantsChanged((value) {
      restaurantsList.value = FilterModels.instance
          .getRestaurantsListByUser(firebaseController.restaurantsList, userId);
    });
    firebaseController.onPhotosChanged((value) {
      photosList.value = FilterModels.instance
          .getPhotosListByUser(firebaseController.photosList, userId);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance
          .getReviewsListByUser(firebaseController.reviewsList, userId);
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
        UserMenu("Restaurant", restaurantsList.length, Icons.food_bank);
    UserMenu photosMenu =
        UserMenu('Photo', photosList.length, Icons.photo_sharp);
    UserMenu reviewsMenu =
        UserMenu('Review', reviewsList.length, Icons.rate_review);
    return [restaurantsMenu, photosMenu, reviewsMenu];
  }
}
