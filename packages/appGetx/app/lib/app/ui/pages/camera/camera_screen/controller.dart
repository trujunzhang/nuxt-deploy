import 'dart:async';
import 'dart:io';

import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:path_provider/path_provider.dart';

import '../Camera_object.dart';
import 'index.dart';

class TakeCameraController extends GetxController {
  FirebaseController firebaseController = Get.find();
  AuthController authController = Get.find();
  final UserRepository userRepository = UserRepository.getInstance();

  final state = TakeCameraState();

  // UI variables

  /// use this to call a take picture
  final PictureController _pictureController = PictureController();

  ValueNotifier<Sensors> sensor = ValueNotifier(Sensors.BACK);

  ValueNotifier<Size> photoSize = ValueNotifier(Size.zero);
  ValueNotifier<CaptureModes> captureMode = ValueNotifier(CaptureModes.PHOTO);

  /// list of available sizes
  late List<Size> _availableSizes;

  // Route parameters
  late PhotoType? photoType;
  late String? relatedId;

  String timestamp() => DateTime.now().millisecondsSinceEpoch.toString();

  @override
  void onInit() {
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    photoType =
        PhotoTypeExtension.fromString(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

    super.onInit();
  }

  @override
  void dispose() {
    photoSize.dispose();
    captureMode.dispose();
  }

  Future<String> takePicture() async {
    Directory extDir;
    extDir = await getTemporaryDirectory();

    final String dirPath = '${extDir.path}/Pictures/flutter_test';
    await Directory(dirPath).create(recursive: true);
    final String filePath = '$dirPath/${timestamp()}.jpg';

    await _pictureController.takePicture(filePath);

    afterTakeHook(filePath, (val) {});
    return filePath;
  }

  void afterTakeHook(String filePath, Function cb) {
    state.imagePath.value = filePath;
    if (photoType == PhotoType.User) {
      state.cameraPanelType.value = CAMERA_PANEL.PANEL_UPLOADING;
    } else {
      Get.toNamed(ParamsHelper.getNewPhotoPath(
              photoType: photoType!, relatedId: relatedId!, imgPath: filePath))!
          .then((value) {
        cb();
      });
    }
  }

  onChangeSensorTap() {
    if (sensor.value == Sensors.FRONT) {
      sensor.value = Sensors.BACK;
    } else {
      sensor.value = Sensors.FRONT;
    }
  }

  uploadImageAsUserPhotoUrl(BuildContext context) async {
    var originalUrl;
    try {
      originalUrl = await CloudinaryUtils.uploadToCloudinary(
          imagePath: state.imagePath.value);
    } catch (e) {}
    if (originalUrl == null) {
      Toast.show(S.of(context).toastForSaveFailure);
      // Navigate
      Get.back();
      return;
    }

    AuthUserModel? authUserModel = authController.getAuthUserModel();

    ParseModelUsers? loggedUser =
        firebaseController.usersList.singleUser(authUserModel!.uid);
    // Update Firebase's user model.
    ParseModelUsers nextModel = ParseModelUsers.updateUserPhoto(
      model: loggedUser!,
      originalUrl: originalUrl,
    );
    // Save user.
    await userRepository.setData(
      path: FirestorePath.singleUser(nextModel.uniqueId!),
      data: nextModel.toJson(),
    );
    // Update Firebase's user's photo.
    await authController.updateFirebaseUserPhoto(originalUrl);

    Toast.show(S.of(context).toastForSaveSuccess);
    // Navigate
    AppNavigator.goBackWithParams(context, nextModel.originalUrl);
  }
}
