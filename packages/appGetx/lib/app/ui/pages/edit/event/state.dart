import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/utils/timeago_utils.dart';

class EditEventState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> want = Rx<String>('');
  Rx<String> startDate = Rx<String>(getNowFormat());
  Rx<String> endDate = Rx<String>(getNowFormat());
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);

  ParseModelEvents? get editModel => _event.value;

  initEditModel(String eventId) {
    // Model
    _event.value = FilterModels.instance
        .getSingleEvent(firebaseController.eventsList, eventId);
    // Variables
    displayName.value = editModel!.displayName;
    want.value = editModel!.want;
    startDate.value = editModel!.start;
    endDate.value = editModel!.end;
  }
}
