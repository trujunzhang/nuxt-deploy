import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:my_plugin/my_plugin.dart';

import 'app/controller/location.controller.dart';
import 'app/ui/pages/reviews/body/review.body.controller.dart';

/// 全局配置
class Global {
  /// 是否第一次打开
  static bool isFirstOpen = false;

  /// 是否离线登录
  static bool isOfflineLogin = false;

  /// 是否 release
  static bool get isRelease => const bool.fromEnvironment("dart.vm.product");

  /// init
  static Future init({Function? configFlavor}) async {
    WidgetsFlutterBinding.ensureInitialized();

    // firebase initialize
    await FirebaseConfig.setup();

    // Global Services/Controllers
    FirebaseConfig.initServices();

    // Local Services/Controllers
    Get.put(LocationController(), permanent: true);
    Get.put(ReviewBodyController(), permanent: true);

    await GetStorage.init();
    Log.init();

    if (configFlavor != null) {
      configFlavor();
    }
  }
}
