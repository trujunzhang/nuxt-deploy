import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/providers/review_state.dart';
import 'package:provider/provider.dart';

import 'review_page.dart';

class CreateEditReviewScreenObject {
  final ReviewType reviewType;
  final String relatedId;
  final ParseModelReviews reviewModel;

  CreateEditReviewScreenObject(
      {@required this.reviewType, @required this.relatedId, this.reviewModel});
}

class CreateEditReviewProviderScreen extends StatefulWidget {
  @override
  _CreateEditReviewProviderScreenState createState() =>
      _CreateEditReviewProviderScreenState();
}

class _CreateEditReviewProviderScreenState
    extends State<CreateEditReviewProviderScreen> {
  // Model
  CreateEditReviewScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final CreateEditReviewScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    ParseModelReviews review = screenObject.reviewModel;
    return ChangeNotifierProvider<ReviewState>(
        create: (context) => ReviewState(
            rate: review != null ? review.rate : 0,
            lastRate: review != null ? review.rate : 0,
            body: review != null ? review.body : '',
            reviewType: screenObject.reviewType,
            relatedId: screenObject.relatedId),
        child: ReviewPage(review: review));
  }
}
