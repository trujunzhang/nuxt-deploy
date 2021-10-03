import 'package:get/get.dart';

import 'index.dart';

class DetailPeopleInEventBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<DetailPeopleInEventController>(DetailPeopleInEventController());
  }
}
