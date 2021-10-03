import 'package:get/get.dart';
import 'package:ieatta/app/controller/verify_email.controller.dart';
import 'package:ieatta/app/data/services/authentification.service.dart';

class VerifyEmailBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<VerifyEmailController>(
        VerifyEmailController(authService: new AuthentificationService()));
  }
}
