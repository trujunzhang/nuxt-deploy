import 'package:get/get.dart';

import 'index.dart';

class FBPhotosGridViewBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<FBPhotosGridViewController>(FBPhotosGridViewController());
  }
}
