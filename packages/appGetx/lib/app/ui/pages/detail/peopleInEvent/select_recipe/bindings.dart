import 'package:get/get.dart';

import 'index.dart';

class SelectRecipeBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<SelectRecipeController>(SelectRecipeController());
  }
}
