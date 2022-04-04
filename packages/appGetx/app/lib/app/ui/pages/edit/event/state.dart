import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class EditEventState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> want = Rx<String>('');
  Rx<String> startDate = Rx<String>(getNowFormat());
  Rx<String> endDate = Rx<String>(getNowFormat());
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  final Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);

  ParseModelEvents? get editModel => _event.value;

  initEditModel(String eventId) {
    // Model
    _event.value = firebaseController.eventsList.singleEvent(eventId);
    // Variables
    displayName.value = editModel!.displayName!;
    want.value = editModel!.want!;
    startDate.value = editModel!.start!;
    endDate.value = editModel!.end!;
  }
}
