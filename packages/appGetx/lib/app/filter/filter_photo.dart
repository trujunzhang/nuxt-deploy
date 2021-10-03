import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';

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
              .getWaitersListForEvent(waitersDict!, event!);
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
    Map<String, ParseModelPhotos> hashMap = new Map<String, ParseModelPhotos>();
    objectToMap(ParseModelPhotos waiter) {
      hashMap[waiter.uniqueId] = waiter;
    }

    list.forEach(objectToMap);
    return hashMap;
  }

  static Map<String, ParseModelPhotos> refreshPhotosDict(
      Map<String, ParseModelPhotos> photosDict,
      List<ParseModelPhotos> nextPhotos) {
    Map<String, ParseModelPhotos> nextDict = {...photosDict};
    objectToMap(ParseModelPhotos photo) {
      nextDict[photo.uniqueId] = photo;
    }

    nextPhotos.forEach(objectToMap);

    return nextDict;
  }
}
