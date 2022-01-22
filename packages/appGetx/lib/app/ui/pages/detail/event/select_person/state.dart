import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/filter/filter_utils.dart';

class SelectPersonState {
  FirebaseController firebaseController = Get.find();

  RxList<String> disorderedUserIds = RxList<String>([]);

  RxList<ParseModelPeopleInEvent> peopleInEventsList =
      RxList<ParseModelPeopleInEvent>([]);

  // Select events.
  RxList<String> selected = RxList<String>([]);
  Rx<bool> isSaving = Rx<bool>(false);

  void pushId(String id) {
    selected.add(id);
  }

  bool contains(String id) {
    return selected.contains(id);
  }

  fetchData(Map<String, ParseModelUsers> usersDict,
      {required String restaurantId, required String eventId}) {
    // List
    peopleInEventsList.value = FilterModels.instance.getPeopleInEventsList(
        firebaseController.peopleInEventsList,
        restaurantId: restaurantId,
        eventId: eventId);
    disorderedUserIds.value = FilterUtils.instance
        .getDisorderedUserIds(List.from(usersDict.keys), peopleInEventsList);
  }
}
