import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class CreatePhotoController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = CreatePhotoState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? imgPath;
  late PhotoType? photoType;
  late String? relatedId;

  final PhotoRepository photoRepository = PhotoRepository.getInstance();

  @override
  void onInit() {
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    photoType = stringToPhotoType(Get.parameters[ParamsHelper.PHOTO_TYPE]!);
    imgPath = Get.parameters[ParamsHelper.IMG_PATH];

    super.onInit();
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      AuthUserModel? authUserModel = authController.getAuthUserModel();

      ParseModelPhotos lastModel = ParseModelPhotos.emptyPhoto(
          authUserModel: authUserModel,
          filePath: imgPath!,
          photoType: photoType!,
          relatedId: relatedId!);
      ParseModelPhotos nextModel = ParseModelPhotos.updatePhoto(
          model: lastModel, nextExtraNote: state.extraNote.value);

      try {
        await photoRepository.setNewPhoto(
            imagePath: imgPath!, model: nextModel); // For photo.
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
}
