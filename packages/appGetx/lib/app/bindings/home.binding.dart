import 'package:get/get.dart';
import 'package:ieatta/app/controller/home.controller.dart';

class HomeBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<HomeController>(HomeController());
  }
}
