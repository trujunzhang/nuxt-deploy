import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class EditUserState {
  FirebaseController firebaseController = Get.find();
  Rx<String> firstName = Rx<String>('');
  Rx<String> secondName = Rx<String>('');
  Rx<String> coverUrl = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  final Rx<ParseModelUsers?> _user = Rx<ParseModelUsers?>(null);

  ParseModelUsers? get editModel => _user.value;

  String getUsername() {
    return [firstName.value, secondName.value].join(' ');
  }

  listenChanged(String userId) {
    firebaseController.onUsersChanged((value) {
      _user.value = firebaseController.usersList.singleUser(userId);
      coverUrl.value = editModel!.originalUrl!;
    });
  }

  initEditModel(String userId) {
    // Model
    _user.value = firebaseController.usersList.singleUser(userId);
    // Variables
    var s = editModel!.username!.split(' ');
    firstName.value = s[0];
    secondName.value = s.length == 2 ? s[1] : '';
    coverUrl.value = editModel!.originalUrl!;
  }
}
