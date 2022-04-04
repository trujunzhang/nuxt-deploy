import 'package:get/get.dart';

import 'index.dart';

class CreatePhotoBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<CreatePhotoController>(CreatePhotoController());
  }
}
