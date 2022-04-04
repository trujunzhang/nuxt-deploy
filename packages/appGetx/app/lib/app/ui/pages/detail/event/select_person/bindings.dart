import 'package:get/get.dart';

import 'index.dart';

class SelectPersonBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<SelectPersonController>(SelectPersonController());
  }
}
