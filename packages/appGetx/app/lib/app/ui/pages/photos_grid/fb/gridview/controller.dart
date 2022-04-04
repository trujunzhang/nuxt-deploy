import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
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
    photoType =
        PhotoTypeExtension.fromString(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

    //stream coming from firebase
    state.fetchData(photoType, relatedId!);

    // Listen all model/list changed.
    state.listenChanged(photoType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}
}
