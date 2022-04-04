import 'package:get/get.dart';

import 'index.dart';

class DetailReviewBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<DetailReviewController>(DetailReviewController());
  }
}
