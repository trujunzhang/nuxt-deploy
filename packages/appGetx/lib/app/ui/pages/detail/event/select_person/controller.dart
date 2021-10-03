import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/Users.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
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

    usersDict =
        FilterModels.instance.getUsersDict(firebaseController.usersList);

    //stream coming from firebase
    state.fetchData(usersDict, restaurantId: restaurantId!, eventId: eventId!);

    super.onInit();
  }

  onAddIconPress(BuildContext context, ParseModelUsers? user) async {
    if (state.isSaving.isTrue) {
      return;
    }
    state.isSaving.value = true;

    FlushBarUtils.show(context, title: 'Saving...', message: user!.username);

    try {
      AuthUserModel? authUserModel = authController.getAuthUserModel();
      ParseModelPeopleInEvent lastModel =
          ParseModelPeopleInEvent.emptyPeopleInEvent(
        authUserModel: authUserModel,
      );

      ParseModelPeopleInEvent nextModel =
          ParseModelPeopleInEvent.updatePeopleInEvent(
              model: lastModel,
              restaurantId: restaurantId!,
              eventId: eventId!,
              userId: user.id);
      await peopleInEventsRepository.setData(
        path: FirestorePath.singlePeopleInEvent(nextModel.uniqueId),
        data: nextModel.toMap(),
      );
    } catch (e) {}

    state.pushId(user.id);
    state.isSaving.value = false;
  }
}
