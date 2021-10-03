import 'package:geoflutterfire/geoflutterfire.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:location/location.dart';

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
    var distance = myLocation.distance(
        lat: secondVal.latitude!, lng: secondVal.longitude!);
    return distance <= 0.1;
  }

  // bool checkStreamsReady(BuildContext context) {
  // List<ParseModelUsers> users = Provider.of<List<ParseModelUsers>>(context);
  // List<ParseModelRestaurants> restaurants = Provider.of<List<ParseModelRestaurants>>(context);
  //
  // return (users != null && restaurants == null);
  // }

  List<String> getUnselectedWaiterIds(
      List<String> waiterIds, ParseModelEvents event) {
    // Get the waiters ids from the event's waiters.
    List<String> selectedWaiterIds = event.waiters;

    // Remove selected waiters ids.
    List<String> unselectedWaiterIds = [];
    filterSelectedWaiterIds(String userId) {
      if (!selectedWaiterIds.contains(userId)) {
        unselectedWaiterIds.add(userId);
      }
    }

    waiterIds.forEach(filterSelectedWaiterIds);

    return unselectedWaiterIds;
  }

  List<String> getUnorderedRecipeIds(
      List<String> recipeIds, ParseModelPeopleInEvent peopleInEvent) {
    // Get the ordered recipes ids from the peopleInEvent's recipes.
    List<String> orderedRecipeIds = peopleInEvent.recipes;

    // Remove ordered recipes ids.
    List<String> unorderedRecipeIds = [];
    filterOrderedRecipeIds(String userId) {
      if (!orderedRecipeIds.contains(userId)) {
        unorderedRecipeIds.add(userId);
      }
    }

    recipeIds.forEach(filterOrderedRecipeIds);

    return unorderedRecipeIds;
  }

  List<String> getDisorderedUserIds(
      List<String> userIds, List<ParseModelPeopleInEvent> peopleInEventsList) {
    // Get the userIds from the peopleInEventsList.
    List<String> orderedUserIds = [];
    objectToMap(ParseModelPeopleInEvent peopleInEvent) {
      orderedUserIds.add(peopleInEvent.userId);
    }

    peopleInEventsList.forEach(objectToMap);

    // Remove ordered userIds.
    List<String> disorderedUserIds = [];
    filterOrderedUserIds(String userId) {
      if (!orderedUserIds.contains(userId)) {
        disorderedUserIds.add(userId);
      }
    }

    userIds.forEach(filterOrderedUserIds);

    return disorderedUserIds;
  }
}
