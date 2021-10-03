import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
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
    reviewType = stringToReviewType(Get.parameters[ParamsHelper.REVIEW_TYPE]!);

    //stream coming from firebase
    state.fetchData(reviewType, relatedId!);

    // Listen all model/list changed.
    state.listenChanged(reviewType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}
}
