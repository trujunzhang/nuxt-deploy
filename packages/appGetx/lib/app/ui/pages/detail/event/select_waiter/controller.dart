import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/flushbar_utils.dart';

import 'index.dart';

class SelectWaiterController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();
  final EventRepository eventsRepository = EventRepository.getInstance();

  late String? eventId;

  final state = SelectWaiterState();

  @override
  void onInit() {
    eventId = Get.parameters[ParamsHelper.EVENT_ID];

    //stream coming from firebase
    state.fetchData(eventId!);

    // Listen all model/list changed.
    state.listenChanged();

    super.onInit();
  }

  onAddIconPress(BuildContext context, ParseModelPhotos? waiter) async {
    if (state.isSaving.isTrue) {
      return;
    }
    state.isSaving.value = true;

    FlushBarUtils.show(
      context,
      title: 'Saving...',
      message: "Select a waiter photo",
    );

    try {
      ParseModelEvents nextModel = ParseModelEvents.addWaiter(
        model: state.event!,
        waiterId: waiter!.uniqueId,
      );

      await eventsRepository.setData(
        path: FirestorePath.singleEvent(nextModel.uniqueId),
        data: nextModel.toMap(),
      );
    } catch (e) {}

    state.pushId(waiter!.uniqueId);
    state.isSaving.value = false;
  }

//==========================================================
// UI Events
//==========================================================
  onNewWaiterButtonPress() {
    Get.toNamed(ParamsHelper.getTakeCameraPath(
      photoType: PhotoType.Waiter,
      relatedId: state.restaurantId,
    ));
  }
}
