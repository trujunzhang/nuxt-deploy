import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:geoflutterfire/geoflutterfire.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:location/location.dart';
import 'package:provider/provider.dart';

/*
This is the main class access/call for any UI widgets that require to perform
any CRUD activities operation in Firestore database.
This class work hand-in-hand with FirestoreService and FirestorePath.

Notes:
For cases where you need to have a special method such as bulk update specifically
on a field, then is ok to use custom code and write it here. For example,
setAllTodoComplete is require to change all todos item to have the complete status
changed to true.
 */
class FilterUtils {
  FilterUtils._();

  static final instance = FilterUtils._();

  bool matchString(String firstVal, String secondVal) {
    var result = (firstVal.toLowerCase().contains(secondVal.toLowerCase()));
    return result;
  }

  bool matchLocation(ParseModelRestaurants restaurant, LocationData secondVal) {
    Geoflutterfire geo = Geoflutterfire();
    GeoFirePoint myLocation = geo.point(
        latitude: restaurant.latitude, longitude: restaurant.longitude);
    var distance =
        myLocation.distance(lat: secondVal.latitude, lng: secondVal.longitude);
//  if (firstVal.data['displayName'] == 'city run') {
//    print('distance: ' + distance.toString());
//  }
    return distance <= 0.1;
  }

  bool checkStreamsReady(BuildContext context) {
    List<ParseModelUsers> users = Provider.of<List<ParseModelUsers>>(context);
    List<ParseModelRestaurants> restaurants =
        Provider.of<List<ParseModelRestaurants>>(context);

    return (users != null && restaurants == null);
  }

  List<String> getUnorderedRecipeIds(
      List<String> recipeIds, ParseModelPeopleInEvent peopleInEvent) {
    // Get the userIds from the peopleInEventsList.
    List<String> orderedRecipeIds = peopleInEvent.recipes;

    // Remove ordered userIds.
    List<String> unorderedRecipeIds = List<String>();
    filterOrderedUserIds(String userId) {
      if (!orderedRecipeIds.contains(userId)) {
        unorderedRecipeIds.add(userId);
      }
    }

    recipeIds.forEach(filterOrderedUserIds);

    return unorderedRecipeIds;
  }

  List<String> getDisorderedUserIds(
      List<String> userIds, List<ParseModelPeopleInEvent> peopleInEventsList) {
    // Get the userIds from the peopleInEventsList.
    List<String> orderedUserIds = List<String>();
    objectToMap(ParseModelPeopleInEvent peopleInEvent) {
      orderedUserIds.add(peopleInEvent.userId);
    }

    peopleInEventsList.forEach(objectToMap);

    // Remove ordered userIds.
    List<String> disorderedUserIds = List<String>();
    filterOrderedUserIds(String userId) {
      if (!orderedUserIds.contains(userId)) {
        disorderedUserIds.add(userId);
      }
    }

    userIds.forEach(filterOrderedUserIds);

    return disorderedUserIds;
  }
}
