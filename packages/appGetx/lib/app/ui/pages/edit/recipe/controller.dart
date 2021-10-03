import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditRecipeController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditRecipeState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? recipeId;
  late String? restaurantId;

  final RecipeRepository recipeRepository = RecipeRepository.getInstance();

  @override
  void onInit() {
    recipeId = Get.parameters[ParamsHelper.ID];
    restaurantId = Get.parameters[ParamsHelper.RESTAURANT_ID];

    initEdit();

    // Listen all model/list changed.
    state.listenChanged();

    super.onInit();
  }

  initEdit() {
    if (recipeId != null) {
      state.initEditModel(recipeId!);
    }
  }

  onSelectCoverClick(ParseModelPhotos item) async {
    if (item.originalUrl == '') {
      // Offline mode.
      Get.snackbar(
        "Info",
        "Offline mode",
        icon: Icon(Icons.message, color: Colors.white),
        snackPosition: SnackPosition.BOTTOM,
        backgroundColor: Colors.green,
      );
      return;
    }
    // Update cover variable.
    state.selectedCover.value = item.originalUrl;
    // Update recipe model.
    ParseModelRecipes nextRecipe = ParseModelRecipes.updateCover(
        model: state.editModel!, originalUrl: item.originalUrl);
    // Update the database.
    await recipeRepository.setData(
      path: FirestorePath.singleRecipe(nextRecipe.uniqueId),
      data: nextRecipe.toMap(),
    );
  }

  showSelectCoverIcon(ParseModelPhotos item) {
    // define variable 'lastUrl' is so important.
    String lastUrl = state.selectedCover.value;
    if (item.originalUrl == '') {
      // Offline mode.
      return false;
    }
    return item.originalUrl == lastUrl;
  }

  onSavePressed(BuildContext context) async {
    if (formKey.currentState!.saveAndValidate()) {
      FocusScope.of(context).unfocus();

      state.isButtonDisabled.value = true;

      AuthUserModel? authUserModel = authController.getAuthUserModel();

      ParseModelRecipes lastModel = recipeId != null
          ? state.editModel
          : ParseModelRecipes.emptyRecipe(
              authUserModel: authUserModel, restaurantId: restaurantId!);

      ParseModelRecipes nextModel = ParseModelRecipes.updateRecipe(
        model: lastModel,
        nextDisplayName: state.displayName.value,
        nextPrice: state.price.value,
      );

      try {
        await recipeRepository.setData(
          path: FirestorePath.singleRecipe(nextModel.uniqueId),
          data: nextModel.toMap(),
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
