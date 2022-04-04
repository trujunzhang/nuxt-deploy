// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';

// ===========================================================
// Model: Photos
// ===========================================================

extension FilterPhotoList on List<ParseModelPhotos> {
  ParseModelPhotos? singlePhoto(String uniqueId) {
    return singleWhereOrNull((photo) => photo.uniqueId == uniqueId);
  }

  List<ParseModelPhotos> filterInRestaurantList(String relatedId) {
    filterPhotoList(ParseModelPhotos photo) {
      return photo.restaurantId == relatedId &&
          photo.photoType == PhotoType.Restaurant.vnText;
    }

    return where(filterPhotoList).toList();
  }

  List<ParseModelPhotos> filterPhotosList(
    String relatedId,
    PhotoType photoType,
  ) {
    filterPhotoList(ParseModelPhotos photo) {
      switch (photoType) {
        case PhotoType.Restaurant: // Contains restaurants and waiters.
          return photo.restaurantId == relatedId &&
              (photo.photoType == photoType.vnText ||
                  photo.photoType == PhotoType.Waiter.vnText);
        case PhotoType.Recipe:
          return photo.recipeId == relatedId &&
              photo.photoType == photoType.vnText;
        case PhotoType.User:
          return photo.userId == relatedId &&
              photo.photoType == photoType.vnText;
        case PhotoType.Waiter:
          return photo.restaurantId == relatedId &&
              photo.photoType == photoType.vnText;
        case PhotoType.None:
          return false;
      }
    }

    return where(filterPhotoList).toList();
  }

  List<ParseModelPhotos> filterByUser(String userId) {
    return where((photo) => photo.creatorId == userId).toList();
  }
}
