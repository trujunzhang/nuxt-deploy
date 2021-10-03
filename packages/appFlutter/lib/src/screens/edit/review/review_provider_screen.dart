import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/providers/review_state.dart';
import 'package:provider/provider.dart';

import 'review_page.dart';

class CreateEditReviewProviderScreen extends StatelessWidget {
  CreateEditReviewProviderScreen({Key? key, required this.isNew, this.reviewId, this.reviewType, this.relatedId})
      : super(key: key);

  final bool isNew;
  final String? reviewId;
  final ReviewType? reviewType;
  final String? relatedId;

  @override
  Widget build(BuildContext context) {
    ParseModelReviews? review;
    if (isNew == false) {
      review = FilterModels.instance.getSingleReview(context, reviewId!);
    }
    return ChangeNotifierProvider<ReviewState>(
        create: (context) => ReviewState(
            rate: review != null ? review.rate : 0,
            lastRate: review != null ? review.rate : 0,
            body: review != null ? review.body : '',
            reviewType: review != null ? stringToReviewType(review.reviewType) : reviewType!,
            relatedId: review != null ? ParseModelReviews.getRelatedId(review) : relatedId!),
        child: ReviewPage(review: review));
  }
}
