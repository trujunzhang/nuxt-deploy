import 'package:get/get.dart';

import 'index.dart';

class DetailEventBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<DetailEventController>(DetailEventController());
  }
}
