import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class DetailRestaurantController extends GetxController {
  final PhotoType photoType = PhotoType.Restaurant;
  final ReviewType reviewType = ReviewType.Restaurant;
  FirebaseController firebaseController = Get.find();

  late String restaurantId;

  final state = DetailRestaurantState();

  @override
  onInit() {
    restaurantId = Get.arguments[ParamsHelper.ID];

    //stream coming from firebase
    state.fetchData(restaurantId, photoType, reviewType);

    // Listen all model/list changed.
    state.listenChanged(restaurantId, photoType, reviewType);

    super.onInit();
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  // EventItem
  onDeleteEventIconPress(BuildContext context, ParseModelEvents event) async {
    try {
      await EventRepository.getInstance().delete(event.uniqueId);
    } catch (e) {
      Toast.show(S.of(context).ModelItemsDeleteFailure);
      return;
    }
    Toast.show(S.of(context).ModelItemsDeleteSuccess);
  }

  // MenusSectionTitle
  onNewMenuIconPress() {
    Get.toNamed(
        '${Routes.EDIT_RECIPE}?${ParamsHelper.RESTAURANT_ID}=$restaurantId');
  }

  // MenusBody
  onMenuItemPress(ParseModelRecipes recipe) {
    Get.toNamed(
        '${Routes.DETAIL_RECIPE}?${ParamsHelper.ID}=${recipe.uniqueId}');
  }

  onCreateMenuPress() async {
    Get.toNamed(
        '${Routes.EDIT_RECIPE}?${ParamsHelper.RESTAURANT_ID}=$restaurantId');
  }

  // InfoPart
  onEditRestaurantIconPress() {
    Get.toNamed(
        '${Routes.EDIT_RESTAURANT}?${ParamsHelper.ID}=${state.detailModel!.uniqueId}');
  }

  onNewEventIconPress() {
    Get.toNamed(
        '${Routes.EDIT_EVENT}?${ParamsHelper.RESTAURANT_ID}=${state.detailModel!.uniqueId}');
  }

  onSeeAllPhotosButtonPress() {
    Get.toNamed(ParamsHelper.getOnlinePhotoGridViewPath(
      photoType: photoType,
      relatedId: state.detailModel!.uniqueId,
    ));
  }

  onSeeAllReviewsButtonPress() {
    Get.toNamed(ParamsHelper.getReviewListPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId));
  }

  onNewReviewButtonPress() {
    Get.toNamed(ParamsHelper.getNewReviewPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId));
  }
}
