import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';

class UserMenu {
  final String title;
  final int value;
  final IconData icon;
  final String routeName;

  UserMenu(this.title, this.value, this.icon, this.routeName);

  static List<UserMenu> updateUserMenus(BuildContext context, String userId) {
    List<ParseModelRestaurants> restaurantsList =
        FilterModels.instance.getRestaurantsListByUser(context, userId);
    List<ParseModelPhotos> photosList =
        FilterModels.instance.getPhotosListByUser(context, userId);
    List<ParseModelReviews> reviewsList =
        FilterModels.instance.getReviewsListByUser(context, userId);

    UserMenu restaurantsMenu = UserMenu("Restaurants", restaurantsList.length,
        Icons.food_bank, Routes.user_restaurants);
    UserMenu photosMenu = UserMenu(
        'Photos', photosList.length, Icons.photo_sharp, Routes.user_photos);
    UserMenu reviewsMenu = UserMenu(
        'Reviews', reviewsList.length, Icons.rate_review, Routes.user_reviews);
    return [restaurantsMenu, photosMenu, reviewsMenu];
  }
}
