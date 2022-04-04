import 'package:get/get.dart';

import 'index.dart';

class FBPhotosPageViewBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<FBPhotosPageViewController>(FBPhotosPageViewController());
  }
}
