// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';

// ===========================================================
// Model: Events
// ===========================================================

extension FilterEventList on List<ParseModelEvents> {
  List<ParseModelEvents> filterByRestaurantId(String restaurantId) {
    return where((event) => event.restaurantId == restaurantId).toList();
  }

  ParseModelEvents? singleEvent(String uniqueId) {
    return singleWhereOrNull((event) => event.uniqueId == uniqueId);
  }
}
