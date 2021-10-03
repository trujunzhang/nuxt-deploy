import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditPhotoController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditPhotoState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? photoId;

  final PhotoRepository photoRepository = PhotoRepository.getInstance();

  @override
  void onInit() {
    photoId = Get.parameters[ParamsHelper.ID];

    state.initEdit(photoId!);
    super.onInit();
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      ParseModelPhotos nextModel = ParseModelPhotos.updatePhoto(
          model: state.editModel!, nextExtraNote: state.extraNote.value);

      try {
        await photoRepository.setData(
          path: FirestorePath.singlePhoto(nextModel.uniqueId),
          data: nextModel.toMap(),
        );
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
