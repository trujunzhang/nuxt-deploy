import 'package:get/get.dart';

import 'index.dart';

class EditEventBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditEventController>(EditEventController());
  }
}
