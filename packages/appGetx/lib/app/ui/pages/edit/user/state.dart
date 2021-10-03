import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class EditUserState {
  FirebaseController firebaseController = Get.find();
  Rx<String> firstName = Rx<String>('');
  Rx<String> secondName = Rx<String>('');
  Rx<String> coverUrl = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<ParseModelUsers?> _User = Rx<ParseModelUsers?>(null);

  ParseModelUsers? get editModel => _User.value;

  String getUsername() {
    return [firstName.value, secondName.value].join(' ');
  }

  listenChanged(String userId) {
    firebaseController.onUsersChanged((value) {
      _User.value = FilterModels.instance
          .getSingleUser(firebaseController.usersList, userId);
      coverUrl.value = editModel!.originalUrl!;
    });
  }

  initEditModel(String userId) {
    // Model
    _User.value = FilterModels.instance
        .getSingleUser(firebaseController.usersList, userId);
    // Variables
    var s = editModel!.username.split(' ');
    firstName.value = s[0];
    secondName.value = s.length == 2 ? s[1] : '';
    coverUrl.value = editModel!.originalUrl!;
  }
}
