import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/app.controller.dart';
import 'package:ieatta/app/ui/pages/home/navigation.home.screen.dart';

import 'controller/auth.controller.dart';
import 'helpers/authentication_state.dart';
import 'ui/helpers/loading.page.dart';
import 'ui/pages/authentification/social_login.dart';
import 'ui/pages/splash/splash_screen.dart';

class AppPage extends GetWidget<AppController> {
  @override
  Widget build(BuildContext context) {
    return GetX<AuthController>(builder: (AuthController authController) {
      if (authController.state is UnAuthenticated) {
        return SocialLoginScreen();
      }

      if (controller.isLoadWelcomePage.isTrue) {
        return SplashScreen();
      }

      if (authController.state is Authenticated) {
        return NavigationHomeScreen();
      }

      return LoadingPage();
    });
  }
}
