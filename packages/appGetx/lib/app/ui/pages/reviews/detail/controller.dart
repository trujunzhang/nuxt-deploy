import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class DetailReviewController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = DetailReviewState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? reviewId;

  @override
  void onInit() {
    reviewId = Get.parameters[ParamsHelper.ID];

    state.fetchData(reviewId!);

    // Listen all model/list changed.
    state.listenChanged(reviewId!);

    super.onInit();
  }

  bool shouldShowEditReviewBtn() {
    AuthUserModel? authUserModel = authController.getAuthUserModel();
    // return (authUserModel != null &&
    //     authUserModel.uid == detailModel!.creatorId);
    // TODO: DJZHANG(TEST)
    return true;
  }

//==========================================================
// UI Events
//==========================================================
  onEditReviewBtnPress() async {
    Get.toNamed(
        '${Routes.EDIT_REVIEW}?${ParamsHelper.ID}=${state.detailModel!.uniqueId}');
  }
}
