import 'package:get/get.dart';

import 'index.dart';

class ReviewListBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<ReviewListController>(ReviewListController());
  }
}
