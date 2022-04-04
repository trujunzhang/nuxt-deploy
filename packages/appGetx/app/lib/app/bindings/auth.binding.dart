import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class AuthBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<AuthController>(AuthController());
  }
}
