import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/review_detail/review_view.dart';

class ReviewsBody extends StatefulWidget {
  final bool useScrollview;
  final List<ParseModelReviews> reviewList;

  ReviewsBody({Key key, @required this.reviewList, this.useScrollview = false})
      : super(key: key);

  @override
  ReviewsBodyState createState() => ReviewsBodyState();
}

class ReviewsBodyState extends State<ReviewsBody> {
  Widget _buildReviewsListView(List<ParseModelReviews> reviewList) {
    if (reviewList.length == 0) {
      return Container(
        height: 60,
        child: Center(
          child: Text('no comments'),
        ),
      );
    }
    List<Widget> list = new List<Widget>();

    list.add(pageLine);
    for (var i = 0; i < reviewList.length; i++) {
      var reviewView = ReviewView(
        reviewData: reviewList[i],
        rate: reviewList[i].rate,
        note: reviewList[i].body,
      );
      Widget child = InkWell(
        child: reviewView,
        onTap: () {
          Navigator.of(context)
              .pushNamed(Routes.detail_review, arguments: reviewList[i]);
        },
      );
      list.add(child);
      list.add(pageLine);
    }
    if (widget.useScrollview) {
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
    return _buildReviewsListView(widget.reviewList);
  }
}
