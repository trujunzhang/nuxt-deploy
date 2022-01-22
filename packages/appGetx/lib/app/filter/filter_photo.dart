
import 'package:getx_firebase/getx_firebase.dart';

import 'filter_models.dart';

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
          return FilterModels.instance
              .getPhotosList(list, relatedId, photoType);
        }
      case PhotoType.Waiter:
        {
          return FilterModels.instance
              .getWaitersListForEvent(waitersDict!, event!.waiters);
        }
      case PhotoType.User:
        {
          return FilterModels.instance.getPhotosListByUser(list, relatedId);
        }
    }
    return [];
  }

  static Map<String, ParseModelPhotos> getPhotosDict(
      List<ParseModelPhotos> list) {
    Map<String, ParseModelPhotos> hashMap = {};
    objectToMap(ParseModelPhotos waiter) {
      hashMap[waiter.uniqueId] = waiter;
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
      nextDict[photo.uniqueId] = photo;
    }

    nextPhotos.forEach(objectToMap);

    return nextDict;
  }
}
