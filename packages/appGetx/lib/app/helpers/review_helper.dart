import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/repository/index.dart';

import 'firestore_path.dart';

enum ReviewHookType { Add, Remove }

class ReviewHelper {
  final double lastReviewRate;
  final double selectedStar;
  final bool isNew;

  ReviewHelper(
      {required this.lastReviewRate,
      this.selectedStar = 0.0,
      this.isNew = false});

  updateSavedReview(BaseReview baseReview) {
    baseReview.rate =
        baseReview.rate - lastReviewRate.round() + selectedStar.round();
    baseReview.reviewCount = baseReview.reviewCount + (isNew ? 1 : 0);
  }

  updateRemovedReview(BaseReview baseReview) {
    baseReview.rate = baseReview.rate - lastReviewRate.round();
    baseReview.reviewCount = baseReview.reviewCount - 1;
  }

  onSaveOrRemoveReviewAfterHook({
    required ReviewHookType reviewHookType,
    required ReviewType reviewType,
    required String relatedId,
  }) async {
    // Get the related models.
    var relatedModel;
    if (reviewType == ReviewType.Restaurant) {
      relatedModel = await RestaurantRepository.getInstance().getId(relatedId);
    } else if (reviewType == ReviewType.Event) {
      relatedModel = await EventRepository.getInstance().getId(relatedId);
    } else if (reviewType == ReviewType.Recipe) {
      relatedModel = await RecipeRepository.getInstance().getId(relatedId);
    }

    // Update the rate/count.
    switch (reviewHookType) {
      case ReviewHookType.Add:
        {
          updateSavedReview(relatedModel);
          break;
        }
      case ReviewHookType.Remove:
        {
          updateRemovedReview(relatedModel);
          break;
        }
    }

    // Save the related models.
    if (reviewType == ReviewType.Restaurant) {
      await RestaurantRepository.getInstance().setData(
          path: FirestorePath.singleRestaurant(relatedId),
          data: relatedModel.toMap());
    } else if (reviewType == ReviewType.Event) {
      await EventRepository.getInstance().setData(
          path: FirestorePath.singleEvent(relatedId),
          data: relatedModel.toMap());
    } else if (reviewType == ReviewType.Recipe) {
      await RecipeRepository.getInstance().setData(
          path: FirestorePath.singleRecipe(relatedId),
          data: relatedModel.toMap());
    }
  }
}
