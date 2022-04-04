import 'package:get/get.dart';

import 'index.dart';

class TakeCameraBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<TakeCameraController>(TakeCameraController());
  }
}
