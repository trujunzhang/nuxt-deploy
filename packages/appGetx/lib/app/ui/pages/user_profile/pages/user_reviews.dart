import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';

import '../index.dart';

class UserReviews extends GetWidget<UserProfileController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    if (reviewsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 18.0),
        child: Container(
            decoration: new BoxDecoration(
              color: Theme.of(context).colorScheme.primaryVariant,
            ),
            child: ReviewsBody(reviewsList: reviewsList)));
  }
}
