import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class VerifyEmailBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<VerifyEmailController>(
        VerifyEmailController(authService: AuthentificationService()));
  }
}
