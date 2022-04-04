import 'package:get/get.dart';

import 'index.dart';

class EditReviewBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditReviewController>(EditReviewController());
  }
}
