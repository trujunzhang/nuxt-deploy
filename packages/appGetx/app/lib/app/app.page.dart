import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/app.controller.dart';
import 'package:ieatta/app/ui/layout/navigation.home.screen.dart';

import 'ui/helpers/loading.page.dart';
import 'ui/pages/authentification/social_login.dart';
import 'ui/pages/splash/splash_screen.dart';

class AppPage extends GetWidget<AppController> {
  const AppPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetX<AuthController>(builder: (AuthController authController) {
      if (authController.state is UnAuthenticated) {
        return SocialLoginScreen();
      }

      if (controller.isLoadWelcomePage.isTrue) {
        return const SplashScreen();
      }

      if (authController.state is Authenticated) {
        return NavigationHomeScreen();
      }

      return const LoadingPage();
    });
  }
}
