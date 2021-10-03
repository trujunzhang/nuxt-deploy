import 'package:get/get.dart';

import 'index.dart';

class SelectWaiterBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<SelectWaiterController>(SelectWaiterController());
  }
}
