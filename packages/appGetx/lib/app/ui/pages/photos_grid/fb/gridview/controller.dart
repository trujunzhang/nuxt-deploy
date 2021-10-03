import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class FBPhotosGridViewController extends GetxController {
  FirebaseController firebaseController = Get.find();

  final state = FBPhotosGridViewState();
  late String? relatedId;
  late PhotoType photoType;

  @override
  onInit() {
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    photoType = stringToPhotoType(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

    //stream coming from firebase
    state.fetchData(photoType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}
}
