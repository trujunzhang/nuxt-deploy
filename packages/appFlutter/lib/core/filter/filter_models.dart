import 'package:flutter/src/widgets/framework.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:location_platform_interface/location_platform_interface.dart';
import 'package:provider/provider.dart';
import 'package:ieatta/src/logic/bloc.dart';

import 'filter_utils.dart';

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
class FilterModels {
  FilterModels._();

  static final instance = FilterModels._();

// ===========================================================
// Model: Users
// ===========================================================

  ParseModelUsers getSingleUser(BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelUsers>>(context)
        .singleWhere((user) => user.id == uniqueId);
  }

  Map<String, ParseModelUsers> getUsersDict(BuildContext context) {
    Map hashMap = new Map<String, ParseModelUsers>();
    objectToMap(ParseModelUsers user) {
      hashMap[user.id] = user;
    }

    Provider.of<List<ParseModelUsers>>(context).forEach(objectToMap);
    return hashMap;
  }

// ===========================================================
// Model: Restaurants
// ===========================================================

  List<ParseModelRestaurants> parseRestaurants(
      List<ParseModelRestaurants> list) {
    bloc.restaurantCountVal(list.length);
    return list;
  }

  List<ParseModelRestaurants> getAllRestaurantsList(BuildContext context) {
    return parseRestaurants(Provider.of<List<ParseModelRestaurants>>(context));
  }

  List<ParseModelRestaurants> getTrackingExploreList(
      BuildContext context, LocationData locationVal) {
    List<ParseModelRestaurants> nextList =
        Provider.of<List<ParseModelRestaurants>>(context)
            .where((restaurant) =>
                FilterUtils.instance.matchLocation(restaurant, locationVal))
            .toList();
    return parseRestaurants(nextList);
  }

  List<ParseModelRestaurants> getSearchedExploreList(
      BuildContext context, String searchVal) {
    List<ParseModelRestaurants> nextList =
        Provider.of<List<ParseModelRestaurants>>(context)
            .where((restaurant) => FilterUtils.instance
                .matchString(restaurant.displayName, searchVal))
            .toList();
    return parseRestaurants(nextList);
  }

  ParseModelRestaurants getSingleRestaurant(
      BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelRestaurants>>(context)
        .singleWhere((restaurant) => restaurant.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Events
// ===========================================================

  List<ParseModelEvents> getEventsList(
      BuildContext context, String restaurantId) {
    return Provider.of<List<ParseModelEvents>>(context)
        .where((event) => event.restaurantId == restaurantId)
        .toList();
  }

  ParseModelEvents getSingleEvent(BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelEvents>>(context)
        .singleWhere((event) => event.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Recipes
// ===========================================================

  List<ParseModelRecipes> getRecipesList(
      BuildContext context, String restaurantId) {
    return Provider.of<List<ParseModelRecipes>>(context)
        .where((recipe) => recipe.restaurantId == restaurantId)
        .toList();
  }

  ParseModelRecipes getSingleRecipe(BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelRecipes>>(context)
        .singleWhere((recipe) => recipe.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Photos
// ===========================================================

  List<ParseModelPhotos> getPhotosInRestaurantList(
      BuildContext context, String relatedId) {
    filterPhotoList(ParseModelPhotos photo) {
      return photo.restaurantId == relatedId &&
          photo.photoType == photoTypeToString(PhotoType.Restaurant);
    }

    return Provider.of<List<ParseModelPhotos>>(context)
        .where(filterPhotoList)
        .toList();
  }

  List<ParseModelPhotos> getPhotosList(
      BuildContext context, String relatedId, PhotoType photoType) {
    filterPhotoList(ParseModelPhotos photo) {
      switch (photoType) {
        case PhotoType.Restaurant: // Contains restaurants and waiters.
          return photo.restaurantId == relatedId &&
              (photo.photoType == photoTypeToString(photoType) ||
                  photo.photoType == photoTypeToString(PhotoType.Waiter));
        case PhotoType.Recipe:
          return photo.recipeId == relatedId &&
              photo.photoType == photoTypeToString(photoType);
        case PhotoType.Waiter:
          return photo.restaurantId == relatedId &&
              photo.photoType == photoTypeToString(photoType);
      }
      return false;
    }

    return Provider.of<List<ParseModelPhotos>>(context)
        .where(filterPhotoList)
        .toList();
  }

// ===========================================================
// Model: Reviews
// ===========================================================

  List<ParseModelReviews> getReviewsList(
      BuildContext context, String relatedId, ReviewType reviewType) {
    filterReviewsList(ParseModelReviews review) {
      switch (reviewType) {
        case ReviewType.Restaurant:
          return review.restaurantId == relatedId &&
              review.reviewType == reviewTypeToString(reviewType);
        case ReviewType.Event:
          return review.eventId == relatedId &&
              review.reviewType == reviewTypeToString(reviewType);
        case ReviewType.Recipe:
          return review.recipeId == relatedId &&
              review.reviewType == reviewTypeToString(reviewType);
      }
      return false;
    }

    return Provider.of<List<ParseModelReviews>>(context)
        .where(filterReviewsList)
        .toList();
  }

  ParseModelReviews getSingleReview(BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelReviews>>(context)
        .singleWhere((recipe) => recipe.uniqueId == uniqueId);
  }

// ===========================================================
// Model: PeopleInEvents
// ===========================================================
  List<ParseModelPeopleInEvent> getPeopleInEventsList(
      BuildContext context, String restaurantId, String eventId) {
    return Provider.of<List<ParseModelPeopleInEvent>>(context)
        .where((peopleInEvent) =>
            peopleInEvent.restaurantId == restaurantId &&
            peopleInEvent.eventId == eventId)
        .toList();
  }

  ParseModelPeopleInEvent getSinglePeopleInEvent(
      BuildContext context, String uniqueId) {
    return Provider.of<List<ParseModelPeopleInEvent>>(context)
        .singleWhere((peopleInEvent) => peopleInEvent.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Waiters
// ===========================================================

  List<ParseModelPhotos> getWaitersList(
      BuildContext context, String restaurantId) {
    return Provider.of<List<ParseModelPhotos>>(context)
        .where((waiter) =>
            waiter.restaurantId == restaurantId &&
            waiter.photoType == photoTypeToString(PhotoType.Waiter))
        .toList();
  }
}
