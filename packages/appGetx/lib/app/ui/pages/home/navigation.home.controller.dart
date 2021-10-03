import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/pages/setting/setting.page.dart';
import 'package:ieatta/app/ui/pages/user_profile/index.dart';

import '../restaurants/restaurants.permission.screen.dart';
import 'custom_drawer/draw_model.dart';
import 'sidebar_views/about_screen.dart';
import 'sidebar_views/feedback_screen.dart';
import 'sidebar_views/help_screen.dart';
import 'sidebar_views/invite_friend_screen.dart';

class NavigationHomeController extends GetxController {
  AuthController authController = Get.find();

  Rx<Widget> _screenView = Rx<Widget>(SizedBox.shrink());
  Rx<DrawerIndex> _drawerIndex = Rx<DrawerIndex>(DrawerIndex.NONE);

  Widget get screenView => _screenView.value;

  DrawerIndex get drawerIndex => _drawerIndex.value;

  @override
  onInit() {
    changeIndex(DrawerIndex.HOME); // used
    // changeIndex(DrawerIndex.Profile); // test
    // changeIndex(DrawerIndex.Settings); // test
    // screenView = EditUserScreen(); // test
    // screenView = HelpScreen(); // test
    // screenView = InviteFriend(); // test
    // screenView = AboutScreen(); // test

    // Listen all model/list changed.
    listenChanged();

    super.onInit();
  }

  listenChanged() {
    authController.onStateChanged((value) {
      if (drawerIndex != DrawerIndex.HOME) {
        changeIndex(DrawerIndex.HOME);
      }
    });
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================

  void changeIndex(DrawerIndex drawerIndexData) {
    if (drawerIndex != drawerIndexData) {
      _drawerIndex.value = drawerIndexData;
      if (drawerIndex == DrawerIndex.HOME) {
        _screenView.value = AppHomeScreen();
      } else if (drawerIndex == DrawerIndex.Profile) {
        AuthUserModel? authUserModel = authController.getAuthUserModel();
        Map<String, String?> newParameters = {};
        newParameters[ParamsHelper.ID] = authUserModel!.uid;
        newParameters[ParamsHelper.MENU_ARROW] = ParamsHelper.MENU_ARROW_TAG;
        Get.parameters = newParameters;
        _screenView.value = UserProfilePage();
      } else if (drawerIndex == DrawerIndex.Settings) {
        _screenView.value = SettingScreen();
      } else if (drawerIndex == DrawerIndex.Help) {
        _screenView.value = HelpScreen();
      } else if (drawerIndex == DrawerIndex.FeedBack) {
        _screenView.value = FeedbackScreen();
      } else if (drawerIndex == DrawerIndex.About) {
        _screenView.value = AboutScreen();
      } else if (drawerIndex == DrawerIndex.Invite) {
        _screenView.value = InviteFriend();
      } else {
        //do in your way......
      }
    }
  }
}
