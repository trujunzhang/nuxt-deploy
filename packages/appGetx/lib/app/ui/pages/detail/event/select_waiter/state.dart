import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_dict.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/filter/filter_utils.dart';

class SelectWaiterState {
  FirebaseController firebaseController = Get.find();

  String get restaurantId => _event.value!.restaurantId;

  Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  RxList<String> unselectedWaiterIds = RxList<String>([]);

  RxList<String> selected = RxList<String>([]);
  Rx<bool> isSaving = Rx<bool>(false);

  RxMap<String, ParseModelPhotos> waitersDict =
      RxMap<String, ParseModelPhotos>({});

  ParseModelEvents? get event => _event.value;

  listenChanged() {
    firebaseController.onPhotosChanged((value) {
      waitersDict.value = FilterModels.instance
          .getWaitersDict(firebaseController.photosList, restaurantId);
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
    _event.value = FilterModels.instance
        .getSingleEvent(firebaseController.eventsList, eventId);

    waitersDict.value = FilterModels.instance
        .getWaitersDict(firebaseController.photosList, restaurantId);

    unselectedWaiterIds.value = FilterUtils.instance
        .getUnselectedWaiterIds(List.from(waitersDict.keys), _event.value!);
  }
}
