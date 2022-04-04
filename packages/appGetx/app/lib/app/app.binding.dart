import 'package:get/get.dart';

import 'app.controller.dart';

class AppBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<AppController>(AppController());
  }
}
