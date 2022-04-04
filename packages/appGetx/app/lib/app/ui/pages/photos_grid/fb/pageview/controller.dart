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

class FBPhotosPageViewController extends GetxController {
  AuthController authController = Get.find();
  FirebaseController firebaseController = Get.find();

  final PhotoRepository photoRepository = PhotoRepository.getInstance();

  final state = FBPhotosPageViewState();
  final pageIndexNotifier = ValueNotifier<int>(0);
  late PageController pageController;

  late String? relatedId;
  late PhotoType photoType;

  @override
  onInit() {
    state.selectedIndex.value =
        int.parse(Get.parameters[ParamsHelper.SELECTED_INDEX]!);
    relatedId = Get.parameters[ParamsHelper.RELATED_ID];
    photoType =
        PhotoTypeExtension.fromString(Get.parameters[ParamsHelper.PHOTO_TYPE]!);

    // Initialize ui available.
    pageController = PageController(initialPage: state.selectedIndex.value);

    //stream coming from firebase
    state.fetchData(photoType, relatedId!);

    // Generate the dict.
    state.firstInitPhotoDict();

    // Listen all model/list changed.
    state.listenChanged(photoType, relatedId!);

    super.onInit();
  }

  @override
  void onReady() {}

  showEditPhotoBtn() {
    ParseModelPhotos? photo = state.selectedPhoto();
    AuthUserModel? loggedUser = authController.getAuthUserModel();
    return loggedUser != null &&
        photo != null &&
        loggedUser.uid == photo.creatorId;
  }

//==========================================================
// UI Events
//==========================================================
  onEditPress() {
    ParseModelPhotos? photo = state.selectedPhoto();
    Get.toNamed('${Routes.EDIT_PHOTO}?${ParamsHelper.ID}=${photo!.uniqueId}');
  }

  onDeleteFBPhotoPress(BuildContext context) {
    showModalBottomSheet<void>(
      context: context,
      builder: (BuildContext context) {
        return FBDeleteBottomSheet(
          onTapDelete: () async {
            try {
              ParseModelPhotos? photo = state.selectedPhoto();
              await photoRepository.delete(photo!.uniqueId);
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
}
