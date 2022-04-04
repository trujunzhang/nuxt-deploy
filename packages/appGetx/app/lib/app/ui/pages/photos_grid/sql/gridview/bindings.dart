import 'package:get/get.dart';

import 'index.dart';

class SqlPhotosGridViewBinding implements Bindings {
  @override
  void dependencies() {
    Get.put<SqlPhotosGridViewController>(SqlPhotosGridViewController());
  }
}
