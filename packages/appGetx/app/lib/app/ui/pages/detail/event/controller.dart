import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class DetailEventController extends GetxController {
  final ReviewType reviewType = ReviewType.Event;
  FirebaseController firebaseController = Get.find();

  Map<String, ParseModelUsers> usersDict = {};

  late String eventId;

  final state = DetailEventState();

  @override
  onInit() {
    eventId = Get.arguments[ParamsHelper.ID];

    //stream coming from firebase
    state.fetchData(eventId, reviewType);

    // Listen all model/list changed.
    state.listenChanged(eventId, reviewType);

    usersDict = firebaseController.usersList.getUsersDict();

    super.onInit();
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  // PeopleInEventItem
  onDeleteFBPeopleInEventIconPress(
      BuildContext context, ParseModelPeopleInEvent peopleInEvent) async {
    showModalBottomSheet<void>(
      context: context,
      builder: (BuildContext context) {
        return FBDeleteBottomSheet(
          onTapDelete: () async {
            try {
              await PeopleInEventsRepository.getInstance()
                  .delete(peopleInEvent.uniqueId);
            } catch (e) {
              Toast.show(S.of(context).ModelItemsDeleteFailure);
              return;
            }

            Toast.show(S.of(context).ModelItemsDeleteSuccess);
          },
        );
      },
    );
  }

  // WaiterItem
  onWaiterItemClick(BuildContext context, int selectedIndex) {
    Get.toNamed(ParamsHelper.getOnlinePageViewPath(selectedIndex,
        photoType: PhotoType.Waiter, relatedId: state.detailModel!.uniqueId!));
  }

  onDeleteFBWaiterIconPress(
      BuildContext context, ParseModelPhotos waiter) async {
    showModalBottomSheet<void>(
      context: context,
      builder: (BuildContext context) {
        return FBDeleteBottomSheet(
          onTapDelete: () async {
            ParseModelEvents nextModel = ParseModelEvents.removeWaiter(
              model: state.detailModel!,
              waiterId: waiter.uniqueId!,
            );
            await EventRepository.getInstance().setData(
              path: FirestorePath.singleEvent(nextModel.uniqueId!),
              data: nextModel.toJson(),
            );
            Toast.show(S.of(context).ModelItemsDeleteSuccess);
          },
        );
      },
    );
  }

  // InfoPart
  onEditEventIconPress() {
    Get.toNamed(
        '${Routes.EDIT_EVENT}?${ParamsHelper.ID}=${state.detailModel!.uniqueId}&${ParamsHelper.RESTAURANT_ID}=${state.restaurant!.uniqueId}');
  }

  onSelectPersonIconPress(BuildContext context) {
    Get.toNamed(
        '${Routes.SELECT_PERSON}?${ParamsHelper.RESTAURANT_ID}=${state.restaurant!.uniqueId}&${ParamsHelper.EVENT_ID}=${state.detailModel!.uniqueId}');
  }

  onSeeAllReviewsButtonPress() {
    Get.toNamed(ParamsHelper.getReviewListPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId!));
  }

  onNewReviewButtonPress() {
    Get.toNamed(ParamsHelper.getNewReviewPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId!));
  }

  // WaitersSectionTitle
  // WaiterBody
  onAddWaiterIconPress() {
    Get.toNamed(
        '${Routes.SELECT_WAITER}?${ParamsHelper.EVENT_ID}=${state.detailModel!.uniqueId}');
  }
}
