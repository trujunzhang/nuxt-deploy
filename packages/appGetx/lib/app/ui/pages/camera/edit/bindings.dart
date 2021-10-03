import 'package:get/get.dart';

import 'index.dart';

class EditPhotoBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditPhotoController>(EditPhotoController());
  }
}
