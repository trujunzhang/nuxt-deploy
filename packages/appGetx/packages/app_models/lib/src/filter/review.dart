// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';

// ===========================================================
// Model: Reviews
// ===========================================================

extension FilterReviewList on List<ParseModelReviews> {
  List<ParseModelReviews> filterReviewsList(
    String relatedId,
    ReviewType reviewType,
  ) {
    filterReviewsList(ParseModelReviews review) {
      switch (reviewType) {
        case ReviewType.Restaurant:
          return review.restaurantId == relatedId &&
              review.reviewType == reviewType.vnText;
        case ReviewType.Event:
          return review.eventId == relatedId &&
              review.reviewType == reviewType.vnText;
        case ReviewType.Recipe:
          return review.recipeId == relatedId &&
              review.reviewType == reviewType.vnText;
        case ReviewType.None:
          return false;
      }
    }

    return where(filterReviewsList).toList();
  }

  List<ParseModelReviews> filterByUser(String userId) {
    return where((review) => review.creatorId == userId).toList();
  }

  ParseModelReviews? singleReview(String uniqueId) {
    return singleWhereOrNull((review) => review.uniqueId == uniqueId);
  }
}
