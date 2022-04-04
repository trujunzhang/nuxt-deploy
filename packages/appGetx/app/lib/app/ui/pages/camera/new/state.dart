import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class CreatePhotoState {
  FirebaseController firebaseController = Get.find();

  Rx<String> extraNote = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);
}
