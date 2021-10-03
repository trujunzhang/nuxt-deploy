import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditUserController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditUserState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? userId;

  final UserRepository userRepository = UserRepository.getInstance();

  @override
  void onInit() {
    AuthUserModel? authUserModel = authController.getAuthUserModel();
    userId = authUserModel!.uid;

    initEdit();

    // Listen all model/list changed.
    state.listenChanged(userId!);

    super.onInit();
  }

  initEdit() {
    if (userId != null) {
      state.initEditModel(userId!);
    }
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      String displayName = state.getUsername();

      ParseModelUsers nextModel = ParseModelUsers.updateUserProfile(
        model: state.editModel!,
        username: displayName,
      );

      try {
        await userRepository.setData(
          path: FirestorePath.singleUser(nextModel.id),
          data: nextModel.toMap(),
        );

        // Update Firebase's user's name.
        await authController.updateFirebaseUserName(displayName);
      } catch (e) {
        state.isButtonDisabled.value = false;
        Toast.show(S.of(context).toastForSaveFailure);
        return;
      }

      Toast.show(S.of(context).toastForSaveSuccess);
      // Navigate
      Get.back();
    }
  }

//==========================================================
// UI Events
//==========================================================
  onAddPhotoIconPress() {
    Get.toNamed(ParamsHelper.getTakeCameraPath(
      photoType: PhotoType.User,
      relatedId: userId!,
    ));
  }
}
