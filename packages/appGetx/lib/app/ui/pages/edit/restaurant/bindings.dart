import 'package:get/get.dart';

import 'index.dart';

class EditRestaurantBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<EditRestaurantController>(EditRestaurantController());
  }
}
