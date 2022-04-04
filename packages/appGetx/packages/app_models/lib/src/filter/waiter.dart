// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';

// ===========================================================
// Model: Waiters
// ===========================================================

extension FilterWaiterDict on Map<String, ParseModelPhotos> {
  // getWaitersListForEvent
  List<ParseModelPhotos> filterForEvent(List<String> waiters) {
    List<ParseModelPhotos> list = [];
    for (var waiterId in waiters) {
      ParseModelPhotos? photo = this[waiterId];
      if (photo != null) {
        list.add(photo);
      }
    }
    return list;
  }
}

extension FilterWaiterList on List<ParseModelPhotos> {
  List<ParseModelPhotos> filterWaitersList(String restaurantId) {
    return where((waiter) =>
        waiter.restaurantId == restaurantId &&
        waiter.photoType == PhotoType.Waiter.vnText).toList();
  }

  Map<String, ParseModelPhotos> getWaitersDict(String restaurantId) {
    Map<String, ParseModelPhotos> hashMap = {};
    objectToMap(ParseModelPhotos waiter) {
      hashMap[waiter.uniqueId!] = waiter;
    }

    filterWaitersList(restaurantId).forEach(objectToMap);
    return hashMap;
  }
}
