import 'dart:async';
import 'dart:io';

import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/utils/cloudinary_utils.dart';
import 'package:ieatta/common/langs/l10n.dart';
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
  PictureController _pictureController = new PictureController();

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
    photoType = stringToPhotoType(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

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

    ParseModelUsers? loggedUser = FilterModels.instance
        .getSingleUser(firebaseController.usersList, authUserModel!.uid);
    // Update Firebase's user model.
    ParseModelUsers nextModel = ParseModelUsers.updateUserPhoto(
      model: loggedUser!,
      originalUrl: originalUrl,
    );
    // Save user.
    await userRepository.setData(
      path: FirestorePath.singleUser(nextModel.id),
      data: nextModel.toMap(),
    );
    // Update Firebase's user's photo.
    await authController.updateFirebaseUserPhoto(originalUrl);

    Toast.show(S.of(context).toastForSaveSuccess);
    // Navigate
    AppNavigator.goBackWithParams(context, nextModel.originalUrl);
  }
}
