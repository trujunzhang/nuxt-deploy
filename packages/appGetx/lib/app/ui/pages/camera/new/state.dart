import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';

class CreatePhotoState {
  FirebaseController firebaseController = Get.find();

  Rx<String> extraNote = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);
}
