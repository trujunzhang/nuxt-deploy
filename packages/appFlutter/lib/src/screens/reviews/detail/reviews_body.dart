import 'package:flutter/material.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/screens/reviews/review_router.dart';

import 'review_item.dart';

class ReviewsBody extends StatelessWidget {
  final List<ParseModelReviews> reviewsList;
  final bool useScrollView;

  const ReviewsBody({Key? key, required this.reviewsList, this.useScrollView = false}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (reviewsList.length == 0) {
      return Container(
        height: 60,
        child: Center(
          child: Text('no comments'),
        ),
      );
    }
    List<Widget> list = [];

    for (var i = 0; i < reviewsList.length; i++) {
      var review = reviewsList[i];
      Widget child = InkWell(
        onTap: () {
          NavigatorUtils.push(context, '${ReviewRouter.reviewDetailPage}?${ParamsHelper.ID}=${review.uniqueId}');
        },
        child: ReviewItem(
          reviewData: review,
        ),
      );
      list.add(child);
      if (i < reviewsList.length - 1) {
        list.add(Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }
}
