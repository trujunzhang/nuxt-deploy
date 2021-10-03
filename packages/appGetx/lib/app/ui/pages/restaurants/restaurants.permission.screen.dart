import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/enum/permission_status.dart';
import 'package:ieatta/app/ui/pages/splash/splash_screen.dart';

import 'empty/no_permission_view.dart';
import 'restaurants.controller.dart';
import 'restaurants.screen.dart';

class AppHomeScreen extends StatefulWidget {
  @override
  _AppHomeScreenState createState() => _AppHomeScreenState();
}

class _AppHomeScreenState extends State<AppHomeScreen>
    with TickerProviderStateMixin {
  RestaurantsController controller =
      Get.put<RestaurantsController>(RestaurantsController());

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    switch (controller.permissionStatus.value) {
      case AppPermissionStatus.Undetermined:
        {
          return SplashScreen();
        }
      case AppPermissionStatus.Granted:
        {
          return RestaurantsListScreen();
        }
      case AppPermissionStatus.Denied:
        {
          return NoPermissionView();
        }
    }

    return Container();
  }
}
