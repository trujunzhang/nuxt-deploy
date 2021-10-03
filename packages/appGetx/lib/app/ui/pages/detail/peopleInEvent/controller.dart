import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class DetailPeopleInEventController extends GetxController {
  FirebaseController firebaseController = Get.find();

  late String peopleInEventId;
  final state = DetailPeopleInEventState();

  @override
  onInit() {
    peopleInEventId = Get.arguments[ParamsHelper.ID];

    //stream coming from firebase
    state.fetchData(peopleInEventId);

    // Listen all model/list changed.
    state.listenChanged(peopleInEventId);

    super.onInit();
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  // RecipeItem
  onDeleteRecipeIconPress(
      BuildContext context, ParseModelRecipes recipe) async {
    ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.removeRecipe(
      model: state.detailModel!,
      recipeId: recipe.uniqueId,
    );

    await PeopleInEventsRepository.getInstance().setData(
      path: FirestorePath.singlePeopleInEvent(nextModel.uniqueId),
      data: nextModel.toMap(),
    );
    Toast.show(S.of(context).ModelItemsDeleteSuccess);
  }

  onRecipeItemClick(ParseModelRecipes recipe) {
    Get.toNamed(
        '${Routes.DETAIL_RECIPE}?${ParamsHelper.ID}=${recipe.uniqueId}');
  }

  // InfoPart
  onSelectRecipesIconPress(BuildContext context) {
    Get.toNamed(
        '${Routes.SELECT_RECIPE}?${ParamsHelper.PEOPLE_IN_EVENT_ID}=$peopleInEventId');
  }
}
