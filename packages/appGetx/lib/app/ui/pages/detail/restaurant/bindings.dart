import 'package:get/get.dart';

import 'index.dart';

class DetailRestaurantBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<DetailRestaurantController>(DetailRestaurantController());
  }
}
