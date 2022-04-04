
import 'package:app_models/src/enum/index.dart';
import 'package:app_models/src/filter/photo.dart';
import 'package:app_models/src/filter/waiter.dart';
import 'package:app_models/src/parse_models/index.dart';

class FilterPhoto {
  static List<ParseModelPhotos> getPhotos(List<ParseModelPhotos> list,
      {required PhotoType photoType,
      required String relatedId,
      ParseModelEvents? event,
      Map<String, ParseModelPhotos>? waitersDict}) {
    switch (photoType) {
      case PhotoType.None:
        break;
      case PhotoType.Recipe:
      case PhotoType.Restaurant:
        {
          return list.filterPhotosList(relatedId, photoType);
        }
      case PhotoType.Waiter:
        {
          return waitersDict!.filterForEvent(event!.waiters!);
        }
      case PhotoType.User:
        {
          return list.filterByUser(relatedId);
        }
    }
    return [];
  }

  static Map<String, ParseModelPhotos> getPhotosDict(
      List<ParseModelPhotos> list) {
    Map<String, ParseModelPhotos> hashMap = {};
    objectToMap(ParseModelPhotos waiter) {
      hashMap[waiter.uniqueId!] = waiter;
    }

    list.forEach(objectToMap);
    return hashMap;
  }

  static Map<String, ParseModelPhotos> refreshPhotosDict(
      Map<String, ParseModelPhotos> photosDict,
      List<ParseModelPhotos> nextPhotos) {
    // When a photo has been deleted, only get the dict.
    if (photosDict.keys.length != nextPhotos.length) {
      return getPhotosDict(nextPhotos);
    }
    Map<String, ParseModelPhotos> nextDict = {...photosDict};
    objectToMap(ParseModelPhotos photo) {
      nextDict[photo.uniqueId!] = photo;
    }

    nextPhotos.forEach(objectToMap);

    return nextDict;
  }
}
