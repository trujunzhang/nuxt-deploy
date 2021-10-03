import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class FBPhotosPageViewController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();

  final state = FBPhotosPageViewState();
  final pageIndexNotifier = ValueNotifier<int>(0);
  late PageController pageController;

  late String? relatedId;
  late PhotoType photoType;

  @override
  onInit() {
    state.selectedIndex.value =
        int.parse(Get.parameters[ParamsHelper.SELECTED_INDEX]!);
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    photoType = stringToPhotoType(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

    // Initialize ui available.
    pageController = PageController(initialPage: state.selectedIndex.value);

    //stream coming from firebase
    state.fetchData(photoType, relatedId!);

    // Generate the dict.
    state.firstInitPhotoDict();

    // Listen all model/list changed.
    state.listenChanged(photoType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}

  showEditPhotoBtn() {
    AuthUserModel? loggedUser = authController.getAuthUserModel();
    // TODO: DJZHANG(TEST)
    // return loggedUser != null && loggedUser.uid == selectedPhoto.creatorId;
    return true;
  }
}
