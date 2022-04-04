import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/flushbar_utils.dart';

import 'index.dart';

class SelectPersonController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();
  final PeopleInEventsRepository peopleInEventsRepository =
      PeopleInEventsRepository.getInstance();

  late String? restaurantId;
  late String? eventId;

  final state = SelectPersonState();

  Map<String, ParseModelUsers> usersDict = {};

  @override
  void onInit() {
    restaurantId = Get.parameters[ParamsHelper.RESTAURANT_ID];
    eventId = Get.parameters[ParamsHelper.EVENT_ID];

    usersDict = firebaseController.usersList.getUsersDict();

    //stream coming from firebase
    state.fetchData(usersDict, restaurantId: restaurantId!, eventId: eventId!);

    super.onInit();
  }

  onAddIconPress(BuildContext context, ParseModelUsers? user) async {
    if (state.isSaving.isTrue) {
      return;
    }
    state.isSaving.value = true;

    FlushBarUtils.show(context, title: 'Saving...', message: user!.username!);

    try {
      AuthUserModel? authUserModel = authController.getAuthUserModel();
      ParseModelPeopleInEvent lastModel = ParseModelPeopleInEvent.create(
        authUserModel: authUserModel,
      );

      ParseModelPeopleInEvent nextModel =
          ParseModelPeopleInEvent.updatePeopleInEvent(
              model: lastModel,
              restaurantId: restaurantId!,
              eventId: eventId!,
              userId: user.uniqueId!);
      await peopleInEventsRepository.setData(
        path: FirestorePath.singlePeopleInEvent(nextModel.uniqueId!),
        data: nextModel.toJson(),
      );
    } catch (e) {}

    state.pushId(user.uniqueId!);
    state.isSaving.value = false;
  }
}
