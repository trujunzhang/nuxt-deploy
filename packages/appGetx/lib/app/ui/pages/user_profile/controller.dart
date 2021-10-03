import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class UserProfileController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();

  final state = UserProfileState();
  static const double INFO_PANEL_HEIGHT = 220;

  double getTabBarViewHeight(BuildContext context) {
    return Screen.safeAreaScreenHeight(context) - INFO_PANEL_HEIGHT;
  }

  AppBarBackType leadingType = AppBarBackType.Back;
  bool isLoggedUser = false;
  late String? userId;

  @override
  onInit() {
    userId = Get.parameters[ParamsHelper.ID];
    String arrowType = Get.parameters[ParamsHelper.MENU_ARROW] ?? '';
    if (arrowType == ParamsHelper.MENU_ARROW_TAG) {
      leadingType = AppBarBackType.None;
    }
    state.initEditModel(userId!);

    AuthUserModel? authUserModel = authController.getAuthUserModel();
    isLoggedUser = authUserModel!.uid == userId;

    //stream coming from firebase
    state.fetchData(userId!);

    // Listen all model/list changed.
    state.listenChanged(userId!);

    super.onInit();
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  void onTabBarViewChange(int index) {}
}
