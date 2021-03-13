import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_path.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/src/appModels/models/Base_Review.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

enum ReviewHookType { Add, Remove }

class ReviewHelper {
  final double lastReviewRate;
  final double selectedStar;
  final bool isNew;

  ReviewHelper({@required this.lastReviewRate, this.selectedStar, this.isNew});

  updateSavedReview(BaseReview baseReview) {
    baseReview.rate = baseReview.rate - lastReviewRate.round() + selectedStar.round();
    baseReview.reviewCount = baseReview.reviewCount + (isNew ? 1 : 0);
  }

  updateRemovedReview(BaseReview baseReview) {
    baseReview.rate = baseReview.rate - lastReviewRate.round();
    baseReview.reviewCount = baseReview.reviewCount - 1;
  }

  onSaveOrRemoveReviewAfterHook({
    @required ReviewHookType reviewHookType,
    @required ReviewType reviewType,
    @required String relatedId,
  }) async {
    // Get the related models.
    var relatedModel;
    if (reviewType == ReviewType.Restaurant) {
      relatedModel = await FirestoreService.instance.getData(
        path: FirestorePath.singleRestaurant(relatedId),
        builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
      );
    } else if (reviewType == ReviewType.Event) {
      relatedModel = await FirestoreService.instance.getData(
        path: FirestorePath.singleEvent(relatedId),
        builder: (data, documentId) => ParseModelEvents.fromJson(data),
      );
    } else if (reviewType == ReviewType.Recipe) {
      relatedModel = await FirestoreService.instance.getData(
        path: FirestorePath.singleRecipe(relatedId),
        builder: (data, documentId) => ParseModelRecipes.fromJson(data),
      );
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
      await FirestoreService.instance.setData(
          path: FirestorePath.singleRestaurant(relatedId),
          data: relatedModel.toMap());
    } else if (reviewType == ReviewType.Event) {
      await FirestoreService.instance.setData(
          path: FirestorePath.singleEvent(relatedId),
          data: relatedModel.toMap());
    } else if (reviewType == ReviewType.Recipe) {
      await FirestoreService.instance.setData(
          path: FirestorePath.singleRecipe(relatedId),
          data: relatedModel.toMap());
    }
  }
}
