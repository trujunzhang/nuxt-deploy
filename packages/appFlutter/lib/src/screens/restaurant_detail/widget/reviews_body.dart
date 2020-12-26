import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/review_detail/review_item.dart';
import 'package:ieatta/src/screens/review_detail/review_view.dart';

class ReviewsBody extends StatelessWidget {
  final bool useScrollView;
  final List<ParseModelReviews> reviewsList;

  const ReviewsBody(
      {Key key, @required this.reviewsList, this.useScrollView = false})
      : super(key: key);

  Widget _buildReviewsListView(
      BuildContext context, List<ParseModelReviews> reviewsList) {
    if (reviewsList.length == 0) {
      return Container(
        height: 60,
        child: Center(
          child: Text('no comments'),
        ),
      );
    }
    List<Widget> list = new List<Widget>();

    for (var i = 0; i < reviewsList.length; i++) {
      var reviewView = ReviewItem(
        reviewData: reviewsList[i],
        rate: reviewsList[i].rate,
        note: reviewsList[i].body,
      );
      Widget child = InkWell(
        child: reviewView,
        onTap: () {
          Navigator.of(context)
              .pushNamed(Routes.detail_review, arguments: reviewsList[i]);
        },
      );
      list.add(child);
      // list.add(pageLine);
    }
    if (useScrollView) {
      return SingleChildScrollView(
        child: Column(
          children: list,
        ),
      );
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    return _buildReviewsListView(context, reviewsList);
  }
}
