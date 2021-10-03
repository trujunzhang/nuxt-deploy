// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:collection/collection.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:location_platform_interface/location_platform_interface.dart';

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

  ParseModelUsers? getSingleUser(List<ParseModelUsers> list, String uniqueId) {
    return list
        .singleWhereOrNull((ParseModelUsers user) => user.id == uniqueId);
  }

  Map<String, ParseModelUsers> getUsersDict(List<ParseModelUsers> list) {
    Map<String, ParseModelUsers> hashMap = new Map<String, ParseModelUsers>();
    objectToMap(ParseModelUsers user) {
      hashMap[user.id] = user;
    }

    list.forEach(objectToMap);
    return hashMap;
  }

// ===========================================================
// Model: Restaurants
// ===========================================================
  List<ParseModelRestaurants> getAllRestaurantsList(
      List<ParseModelRestaurants> list) {
    return list;
  }

  List<ParseModelRestaurants> getTrackingExploreList(
      List<ParseModelRestaurants> list, LocationData locationVal) {
    List<ParseModelRestaurants> nextList = list
        .where((restaurant) =>
            FilterUtils.instance.matchLocation(restaurant, locationVal))
        .toList();
    return nextList;
  }

  List<ParseModelRestaurants> getSearchedExploreList(
      List<ParseModelRestaurants> list, String searchVal) {
    List<ParseModelRestaurants> nextList = list
        .where((restaurant) =>
            FilterUtils.instance.matchString(restaurant.displayName, searchVal))
        .toList();
    return nextList;
  }

  ParseModelRestaurants? getSingleRestaurant(
      List<ParseModelRestaurants> list, String uniqueId) {
    return list
        .singleWhereOrNull((restaurant) => restaurant.uniqueId == uniqueId);
  }

  List<ParseModelRestaurants> getRestaurantsListByUser(
      List<ParseModelRestaurants> list, String userId) {
    return list.where((restaurant) => restaurant.creatorId == userId).toList();
  }

// ===========================================================
// Model: Events
// ===========================================================

  List<ParseModelEvents> getEventsList(
      List<ParseModelEvents> list, String restaurantId) {
    return list.where((event) => event.restaurantId == restaurantId).toList();
  }

  ParseModelEvents? getSingleEvent(
      List<ParseModelEvents> list, String uniqueId) {
    return list.singleWhereOrNull((event) => event.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Recipes
// ===========================================================

  List<ParseModelRecipes> getRecipesList(
      List<ParseModelRecipes> list, String restaurantId) {
    return list.where((recipe) => recipe.restaurantId == restaurantId).toList();
  }

  ParseModelRecipes? getSingleRecipe(
      List<ParseModelRecipes> list, String uniqueId) {
    return list.singleWhereOrNull((recipe) => recipe.uniqueId == uniqueId);
  }

  Map<String, ParseModelRecipes> getRecipesDict(
      List<ParseModelRecipes> list, String restaurantId) {
    Map<String, ParseModelRecipes> hashMap =
        new Map<String, ParseModelRecipes>();
    objectToMap(ParseModelRecipes recipe) {
      hashMap[recipe.uniqueId] = recipe;
    }

    getRecipesList(list, restaurantId).forEach(objectToMap);
    return hashMap;
  }

// ===========================================================
// Model: Photos
// ===========================================================

  ParseModelPhotos? getSinglePhoto(
      List<ParseModelPhotos> list, String uniqueId) {
    return list.singleWhereOrNull((photo) => photo.uniqueId == uniqueId);
  }

  List<ParseModelPhotos> getPhotosInRestaurantList(
      List<ParseModelPhotos> list, String relatedId) {
    filterPhotoList(ParseModelPhotos photo) {
      return photo.restaurantId == relatedId &&
          photo.photoType == photoTypeToString(PhotoType.Restaurant);
    }

    return list.where(filterPhotoList).toList();
  }

  List<ParseModelPhotos> getPhotosList(
      List<ParseModelPhotos> list, String relatedId, PhotoType photoType) {
    filterPhotoList(ParseModelPhotos photo) {
      switch (photoType) {
        case PhotoType.Restaurant: // Contains restaurants and waiters.
          return photo.restaurantId == relatedId &&
              (photo.photoType == photoTypeToString(photoType) ||
                  photo.photoType == photoTypeToString(PhotoType.Waiter));
        case PhotoType.Recipe:
          return photo.recipeId == relatedId &&
              photo.photoType == photoTypeToString(photoType);
        case PhotoType.User:
          return photo.userId == relatedId &&
              photo.photoType == photoTypeToString(photoType);
        case PhotoType.Waiter:
          return photo.restaurantId == relatedId &&
              photo.photoType == photoTypeToString(photoType);
        case PhotoType.None:
          return false;
      }
    }

    return list.where(filterPhotoList).toList();
  }

  List<ParseModelPhotos> getPhotosListByUser(
      List<ParseModelPhotos> list, String userId) {
    return list.where((photo) => photo.creatorId == userId).toList();
  }

// ===========================================================
// Model: Reviews
// ===========================================================

  List<ParseModelReviews> getReviewsList(
      List<ParseModelReviews> list, String relatedId, ReviewType reviewType) {
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
        case ReviewType.None:
          return false;
      }
    }

    return list.where(filterReviewsList).toList();
  }

  List<ParseModelReviews> getReviewsListByUser(
      List<ParseModelReviews> list, String userId) {
    return list.where((review) => review.creatorId == userId).toList();
  }

  ParseModelReviews? getSingleReview(
      List<ParseModelReviews> list, String uniqueId) {
    return list.singleWhereOrNull((review) => review.uniqueId == uniqueId);
  }

// ===========================================================
// Model: PeopleInEvents
// ===========================================================
  List<ParseModelPeopleInEvent> getPeopleInEventsList(
      List<ParseModelPeopleInEvent> list,
      {required String restaurantId,
      required String eventId}) {
    return list
        .where((peopleInEvent) =>
            peopleInEvent.restaurantId == restaurantId &&
            peopleInEvent.eventId == eventId)
        .toList();
  }

  ParseModelPeopleInEvent? getSinglePeopleInEvent(
      List<ParseModelPeopleInEvent> list, String uniqueId) {
    return list.singleWhereOrNull(
        (peopleInEvent) => peopleInEvent.uniqueId == uniqueId);
  }

// ===========================================================
// Model: Waiters
// ===========================================================

  List<ParseModelPhotos> getWaitersList(
      List<ParseModelPhotos> list, String restaurantId) {
    return list
        .where((waiter) =>
            waiter.restaurantId == restaurantId &&
            waiter.photoType == photoTypeToString(PhotoType.Waiter))
        .toList();
  }

  List<ParseModelPhotos> getWaitersListForEvent(
      Map<String, ParseModelPhotos> waitersDict, ParseModelEvents event) {
    List<ParseModelPhotos> list = [];
    event.waiters.forEach((waiterId) {
      list.add(waitersDict[waiterId]!);
    });
    return list;
  }

  Map<String, ParseModelPhotos> getWaitersDict(
      List<ParseModelPhotos> list, String restaurantId) {
    Map<String, ParseModelPhotos> hashMap = new Map<String, ParseModelPhotos>();
    objectToMap(ParseModelPhotos waiter) {
      hashMap[waiter.uniqueId] = waiter;
    }

    getWaitersList(list, restaurantId).forEach(objectToMap);
    return hashMap;
  }
}
