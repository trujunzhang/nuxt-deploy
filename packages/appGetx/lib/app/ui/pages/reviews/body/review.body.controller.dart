import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/helpers/review_helper.dart';
import 'package:my_plugin/my_plugin.dart';

class ReviewBodyController extends GetxController {
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  @override
  void onInit() {
    super.onInit();
  }

//==========================================================
// UI Events
//==========================================================
  onDeleteReviewIconPress(
      BuildContext context, ParseModelReviews review) async {
    try {
      // First, Update the related model's review fields.
      ReviewHelper reviewHelper = ReviewHelper(
        lastReviewRate: review.rate,
      );
      await reviewHelper.onSaveOrRemoveReviewAfterHook(
          reviewHookType: ReviewHookType.Remove,
          reviewType: stringToReviewType(review.reviewType),
          relatedId: ParseModelReviews.getRelatedId(review));
      // Then, delete the review.
      await ReviewRepository.getInstance().delete(review.uniqueId);
    } catch (e) {
      Toast.show(S.of(context).ModelItemsDeleteFailure);
      return;
    }
    Toast.show(S.of(context).ModelItemsDeleteSuccess);
  }
}
