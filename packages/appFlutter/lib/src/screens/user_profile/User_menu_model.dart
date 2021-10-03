import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';

import 'user_profile_router.dart';

class UserMenu {
  final String title;
  final int value;
  final IconData icon;
  final String routePath;

  UserMenu(this.title, this.value, this.icon, this.routePath);

  static List<UserMenu> updateUserMenus(BuildContext context, String userId) {
    List<ParseModelRestaurants> restaurantsList = FilterModels.instance.getRestaurantsListByUser(context, userId);
    List<ParseModelPhotos> photosList = FilterModels.instance.getPhotosListByUser(context, userId);
    List<ParseModelReviews> reviewsList = FilterModels.instance.getReviewsListByUser(context, userId);

    UserMenu restaurantsMenu =
        UserMenu("Restaurants", restaurantsList.length, Icons.food_bank, UserProfileRouter.userRestaurantsPage);
    UserMenu photosMenu = UserMenu('Photos', photosList.length, Icons.photo_sharp, UserProfileRouter.userPhotosPage);
    UserMenu reviewsMenu =
        UserMenu('Reviews', reviewsList.length, Icons.rate_review, UserProfileRouter.userReviewsPage);
    return [restaurantsMenu, photosMenu, reviewsMenu];
  }
}
