import 'package:get/get.dart';

import 'index.dart';

class UserProfileBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<UserProfileController>(UserProfileController());
  }
}
