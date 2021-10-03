import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'review_item.dart';

class ReviewsBody extends StatelessWidget {
  final List<ParseModelReviews> reviewsList;

  ReviewsBody({Key? key, required this.reviewsList}) : super(key: key);

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
          Get.toNamed(
              '${Routes.DETAIL_REVIEW}?${ParamsHelper.ID}=${review.uniqueId}');
        },
        child: ReviewItem(
          reviewData: review,
          canDelete: true,
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
