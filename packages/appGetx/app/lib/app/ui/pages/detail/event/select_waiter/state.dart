import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class SelectWaiterState {
  FirebaseController firebaseController = Get.find();

  String get restaurantId => _event.value!.restaurantId!;

  final Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  RxList<String> unselectedWaiterIds = RxList<String>([]);

  RxList<String> selected = RxList<String>([]);
  Rx<bool> isSaving = Rx<bool>(false);

  RxMap<String, ParseModelPhotos> waitersDict =
      RxMap<String, ParseModelPhotos>({});

  ParseModelEvents? get event => _event.value;

  listenChanged() {
    firebaseController.onPhotosChanged((value) {
      waitersDict.value =
          firebaseController.photosList.getWaitersDict(restaurantId);
      List<String> newUnselectedWaiterIds = FilterUtils.instance
          .getUnselectedWaiterIds(List.from(waitersDict.keys), _event.value!);
      unselectedWaiterIds.value = FilterDict.instance
          .updateNewId(newUnselectedWaiterIds, unselectedWaiterIds);
    });
  }

  void pushId(String id) {
    selected.add(id);
  }

  bool contains(String id) {
    return selected.contains(id);
  }

  fetchData(String eventId) {
    _event.value = firebaseController.eventsList.singleEvent(eventId);

    waitersDict.value =
        firebaseController.photosList.getWaitersDict(restaurantId);

    unselectedWaiterIds.value = FilterUtils.instance
        .getUnselectedWaiterIds(List.from(waitersDict.keys), _event.value!);
  }
}
