import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';

class AuthBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<AuthController>(AuthController());
  }
}
