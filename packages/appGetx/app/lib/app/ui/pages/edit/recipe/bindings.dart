import 'package:get/get.dart';

import 'index.dart';

class EditRecipeBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditRecipeController>(EditRecipeController());
  }
}
