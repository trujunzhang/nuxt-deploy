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
import 'package:location/location.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditRestaurantController extends GetxController {
  final formKey = GlobalKey<FormBuilderState>();

  final state = EditRestaurantState();
  AuthController authController = Get.find();
  LocationController locationController = Get.find();
  FirebaseController firebaseController = Get.find();

  // Route parameters
  late String? restaurantId;

  final RestaurantRepository restaurantRepository =
      RestaurantRepository.getInstance();

  bool get isNew => restaurantId == null;

  @override
  void onInit() {
    restaurantId = Get.parameters[ParamsHelper.ID];

    initEdit();

    // Listen all model/list changed.
    state.listenChanged();

    super.onInit();
  }

  initEdit() {
    if (isNew == false) {
      state.initEditModel(restaurantId!);
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
    // Update restaurant model.
    ParseModelRestaurants nextRestaurant = ParseModelRestaurants.updateCover(
        model: state.editModel!, originalUrl: item.originalUrl);
    // Update the database.
    await restaurantRepository.setData(
      path: FirestorePath.singleRestaurant(nextRestaurant.uniqueId),
      data: nextRestaurant.toMap(),
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

      ParseModelRestaurants? lastModel = state.editModel;
      // New restaurant.
      if (isNew == true) {
        AuthUserModel? authUserModel = authController.getAuthUserModel();
        LocationData locationData = await locationController.getLocation();

        lastModel = ParseModelRestaurants.emptyRestaurant(
          authUserModel: authUserModel,
          latitude: locationData.latitude!,
          longitude: locationData.longitude!,
        );
      }

      ParseModelRestaurants nextModel = ParseModelRestaurants.updateRestaurant(
          model: lastModel!,
          nextDisplayName: state.displayName.value,
          nextExtraNote: state.note.value);

      try {
        await restaurantRepository.setData(
          path: FirestorePath.singleRestaurant(nextModel.uniqueId),
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
