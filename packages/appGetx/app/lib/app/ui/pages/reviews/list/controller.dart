import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class ReviewListController extends GetxController {
  FirebaseController firebaseController = Get.find();

  final state = ReviewListState();
  late ReviewType reviewType;
  late String? relatedId;

  @override
  onInit() {
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    reviewType = ReviewTypeExtension.fromString(
        Get.parameters[ParamsHelper.REVIEW_TYPE]!);

    //stream coming from firebase
    state.fetchData(reviewType, relatedId!);

    // Listen all model/list changed.
    state.listenChanged(reviewType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}
}
