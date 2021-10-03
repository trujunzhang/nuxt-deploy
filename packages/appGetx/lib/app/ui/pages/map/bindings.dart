import 'package:get/get.dart';

import 'index.dart';

class RestaurantsMapBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<RestaurantsMapController>(RestaurantsMapController());
  }
}
