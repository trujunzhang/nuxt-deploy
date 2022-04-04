import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class DetailReviewController extends GetxController {
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
    return (authUserModel != null &&
        authUserModel.uid == state.detailModel!.creatorId);
  }

//==========================================================
// UI Events
//==========================================================
  onEditReviewBtnPress() async {
    Get.toNamed(
        '${Routes.EDIT_REVIEW}?${ParamsHelper.ID}=${state.detailModel!.uniqueId}');
  }
}
