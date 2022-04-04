import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditEventController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditEventState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? eventId;
  late String? restaurantId;

  final EventRepository eventRepository = EventRepository.getInstance();

  @override
  void onInit() {
    eventId = Get.parameters[ParamsHelper.ID];
    restaurantId = Get.parameters[ParamsHelper.RESTAURANT_ID];

    initEdit();

    super.onInit();
  }

  initEdit() {
    if (eventId != null) {
      state.initEditModel(eventId!);
    }
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      AuthUserModel? authUserModel = authController.getAuthUserModel();

      ParseModelEvents lastModel = eventId != null
          ? state.editModel
          : ParseModelEvents.create(
              authUserModel: authUserModel, restaurantId: restaurantId!);

      ParseModelEvents nextModel = ParseModelEvents.updateEvent(
          model: lastModel,
          nextDisplayName: state.displayName.value,
          nextWant: state.want.value,
          nextStartDate: state.startDate.value,
          nextEndDate: state.endDate.value);

      try {
        await eventRepository.setData(
          path: FirestorePath.singleEvent(nextModel.uniqueId!),
          data: nextModel.toJson(),
        );
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
