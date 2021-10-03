import 'package:get/get.dart';

import 'index.dart';

class DetailRecipeBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<DetailRecipeController>(DetailRecipeController());
  }
}
