import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/helpers/review_helper.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditReviewController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditReviewState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? reviewId;
  late ReviewType? reviewType;
  late String? relatedId;

  final ReviewRepository reviewRepository = ReviewRepository.getInstance();

  bool get isNew => reviewId == null;

  ReviewType parseReviewType() {
    if (isNew == false) {
      return ReviewTypeExtension.fromString(state.editModel!.reviewType!);
    }
    return ReviewTypeExtension.fromString(
        Get.parameters[ParamsHelper.REVIEW_TYPE]!);
  }

  @override
  void onInit() {
    reviewId = Get.parameters[ParamsHelper.ID];
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];

    initEdit();

    reviewType = parseReviewType();

    super.onInit();
  }

  initEdit() {
    if (isNew == false) {
      state.initEditModel(reviewId!);
      relatedId = ParseModelReviews.getRelatedId(state.editModel!);
    }
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      AuthUserModel? authUserModel = authController.getAuthUserModel();

      ParseModelReviews lastModel = (isNew == false)
          ? state.editModel
          : ParseModelReviews.create(
              authUserModel: authUserModel,
              reviewType: reviewType!,
              relatedId: relatedId!);

      ParseModelReviews nextModel = ParseModelReviews.updateReview(
        model: lastModel,
        nextRate: state.rate.value,
        nextExtraNote: state.body.value,
      );

      try {
        await reviewRepository.setData(
          path: FirestorePath.singleReview(nextModel.uniqueId!),
          data: nextModel.toJson(),
        );
        ReviewHelper reviewHelper = ReviewHelper(
            lastReviewRate: state.lastRate,
            selectedStar: state.rate.value,
            isNew: isNew);
        await reviewHelper.onSaveOrRemoveReviewAfterHook(
            reviewHookType: ReviewHookType.Add,
            reviewType: reviewType!,
            relatedId: relatedId!);
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
