import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/flushbar_utils.dart';

import 'index.dart';

class SelectRecipeController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();
  final PeopleInEventsRepository peopleInEventsRepository =
      PeopleInEventsRepository.getInstance();

  late String? peopleInEventId;

  final state = SelectRecipeState();

  @override
  void onInit() {
    peopleInEventId = Get.parameters[ParamsHelper.PEOPLE_IN_EVENT_ID];

    //stream coming from firebase
    state.fetchData(peopleInEventId!);

    // Listen all model/list changed.
    state.listenChanged();

    super.onInit();
  }

  onAddIconPress(
    BuildContext context,
    ParseModelRecipes? recipe,
  ) async {
    if (state.isSaving.isTrue) {
      return;
    }
    state.isSaving.value = true;

    FlushBarUtils.show(context,
        title: 'Saving...', message: recipe!.displayName);

    try {
      ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.addRecipe(
        model: state.peopleInEvent!,
        recipeId: recipe.uniqueId,
      );
      await peopleInEventsRepository.setData(
        path: FirestorePath.singlePeopleInEvent(nextModel.uniqueId),
        data: nextModel.toMap(),
      );
    } catch (e) {}

    state.pushId(recipe.uniqueId);
    state.isSaving.value = false;
  }

//==========================================================
// UI Events
//==========================================================
  onNewRecipeButtonPress() {
    Get.toNamed(
        '${Routes.EDIT_RECIPE}?${ParamsHelper.RESTAURANT_ID}=$state. restaurantId');
  }
}
