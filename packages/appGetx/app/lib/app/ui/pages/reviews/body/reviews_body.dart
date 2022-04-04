import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import 'review.body.controller.dart';

class ReviewsBody extends StatelessWidget {
  ReviewBodyController controller = Get.find<ReviewBodyController>();
  final List<ParseModelReviews> reviewsList;

  ReviewsBody({Key? key, required this.reviewsList}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (reviewsList.isEmpty) {
      return const SizedBox(
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
        child: SlidableRow(
          rowKey: review.uniqueId!,
          row: ReviewItem(
            review: review,
            showPreview: true,
            onUserItemTap: () => Get.toNamed(
                '${Routes.USER_PROFILE}?${ParamsHelper.ID}=${review.creatorId}'),
          ),
          onPress: (BuildContext context) async {
            await controller.onDeleteFBReviewIconPress(context, review);
          },
        ),
      );
      list.add(child);
      if (i < reviewsList.length - 1) {
        list.add(const Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }
}
