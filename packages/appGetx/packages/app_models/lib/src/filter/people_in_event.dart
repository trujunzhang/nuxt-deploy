// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';

// ===========================================================
// Model: PeopleInEvents
// ===========================================================

extension FilterPeopleInEventList on List<ParseModelPeopleInEvent> {
  List<ParseModelPeopleInEvent> filterPeopleInEventsList(
      {required String restaurantId, required String eventId}) {
    return where((peopleInEvent) =>
        peopleInEvent.restaurantId == restaurantId &&
        peopleInEvent.eventId == eventId).toList();
  }

  ParseModelPeopleInEvent? singlePeopleInEvent(String uniqueId) {
    return singleWhereOrNull(
        (peopleInEvent) => peopleInEvent.uniqueId == uniqueId);
  }
}
