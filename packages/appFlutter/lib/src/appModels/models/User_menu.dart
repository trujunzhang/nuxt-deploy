import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';

class UserMenu {
  final String title;
  final int value;
  final IconData icon;
  final String routeName;

  UserMenu(this.title, this.value, this.icon, this.routeName);

  static List<UserMenu> updateUserMenus() {
    UserMenu restaurantsMenu =
        UserMenu("Restaurants", 3, Icons.food_bank, Routes.user_restaurants);
    UserMenu photosMenu =
        UserMenu('Photos', 6, Icons.photo_sharp, Routes.user_photos);
    UserMenu reviewsMenu =
        UserMenu('Reviews', 12, Icons.rate_review, Routes.user_reviews);
    return [restaurantsMenu, photosMenu, reviewsMenu];
  }
}
