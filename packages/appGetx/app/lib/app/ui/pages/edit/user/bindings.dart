import 'package:get/get.dart';

import 'index.dart';

class EditUserBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditUserController>(EditUserController());
  }
}
