import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';
import 'package:ieatta/util/app_navigator.dart';

class ReviewsListScreen extends StatelessWidget {
  ReviewsListScreen({
    Key? key,
    required this.reviewType,
    required this.relatedId,
  }) : super(key: key);

  final ReviewType reviewType;
  final String relatedId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).reviewsListPageAppBarTitleTxt),
        ),
        body: _buildListReviews(context));
  }

  Widget _buildListReviews(BuildContext context) {
    List<ParseModelReviews> reviewsList = FilterModels.instance.getReviewsList(context, relatedId, reviewType);
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 8.0),
        child: Container(
            decoration: new BoxDecoration(color: Colors.white), child: ReviewsBody(reviewsList: reviewsList)));
  }
}
