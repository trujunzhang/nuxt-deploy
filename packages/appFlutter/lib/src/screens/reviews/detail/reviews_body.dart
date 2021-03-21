import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';

import 'review_item.dart';

class ReviewsBody extends StatelessWidget {
  final List<ParseModelReviews> reviewsList;
  final bool useScrollView;

  const ReviewsBody(
      {Key key, @required this.reviewsList, this.useScrollView = false})
      : super(key: key);

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
    List<Widget> list = new List<Widget>();

    for (var i = 0; i < reviewsList.length; i++) {
      var review = reviewsList[i];
      Widget child = InkWell(
        onTap: () {
          Navigator.of(context)
              .pushNamed(Routes.detail_review, arguments: review);
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
    // if (useScrollView) {
    //   return SingleChildScrollView(
    //     child: Column(
    //       children: list,
    //     ),
    //   );
    // }
    return Column(children: list);
  }
}
