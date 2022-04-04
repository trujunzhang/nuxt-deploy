// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';
import 'package:location/location.dart';

// ===========================================================
// Model: Restaurants
// ===========================================================

extension FilterRestaurantList on List<ParseModelRestaurants> {
  ParseModelRestaurants? singleRestaurant(String? uniqueId) {
    return singleWhereOrNull((restaurant) => restaurant.uniqueId == uniqueId);
  }

  List<ParseModelRestaurants> filterByUser(String? userId) {
    return where((restaurant) => restaurant.creatorId == userId).toList();
  }

  List<ParseModelRestaurants> filterBySearchedString(String searchVal) {
    List<ParseModelRestaurants> nextList = where((restaurant) => FilterUtils
        .instance
        .matchString(restaurant.displayName!, searchVal)).toList();
    return nextList;
  }

  List<ParseModelRestaurants> filterByTracking(LocationData locationVal) {
    List<ParseModelRestaurants> nextList = where((restaurant) =>
        FilterUtils.instance.matchLocation(restaurant, locationVal)).toList();
    return nextList;
  }
}
