import 'package:get/get.dart';
import 'package:ieatta/app/app.controller.dart';
import 'package:ieatta/app/ui/pages/reviews/body/review.body.controller.dart';

import 'controller/auth.controller.dart';
import 'controller/firebase.controller.dart';
import 'controller/location.controller.dart';

export './bindings/auth.binding.dart';
export './bindings/home.binding.dart';
export './bindings/verify.binding.dart';

class AppBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<AuthController>(AuthController());
    Get.put<FirebaseController>(FirebaseController());
    Get.put<LocationController>(LocationController());
    Get.put<AppController>(AppController());
    Get.put<ReviewBodyController>(ReviewBodyController());
  }
}
