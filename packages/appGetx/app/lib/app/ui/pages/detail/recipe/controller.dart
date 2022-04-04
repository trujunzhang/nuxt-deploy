import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class DetailRecipeController extends GetxController {
  final PhotoType photoType = PhotoType.Recipe;
  final ReviewType reviewType = ReviewType.Recipe;
  FirebaseController firebaseController = Get.find();

  late String? recipeId;

  final state = DetailRecipeState();

  @override
  onInit() {
    recipeId = Get.parameters[ParamsHelper.ID];

    //stream coming from firebase
    state.fetchData(recipeId!, photoType, reviewType);

    // Listen all model/list changed.
    state.listenChanged(recipeId!, photoType, reviewType);

    super.onInit();
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  // InfoPart
  onEditRecipeIconPress() {
    Get.toNamed(
        '${Routes.EDIT_RECIPE}?${ParamsHelper.ID}=${state.detailModel!.uniqueId}&${ParamsHelper.RESTAURANT_ID}=${state.detailModel!.restaurantId}');
  }

  onSeeAllPhotosButtonPress() {
    Get.toNamed(ParamsHelper.getOnlinePhotoGridViewPath(
      photoType: photoType,
      relatedId: state.detailModel!.uniqueId!,
    ));
  }

  onSeeAllReviewsButtonPress() {
    Get.toNamed(ParamsHelper.getReviewListPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId!));
  }

  onNewReviewButtonPress() {
    Get.toNamed(ParamsHelper.getNewReviewPath(
        reviewType: reviewType, relatedId: state.detailModel!.uniqueId!));
  }
}
