import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';

import '../index.dart';

class UserReviews extends StatefulWidget {
  final String tag;

  const UserReviews({Key? key, required this.tag}) : super(key: key);

  @override
  _UserReviewsState createState() => _UserReviewsState();
}

class _UserReviewsState extends State<UserReviews> {
  late UserProfileController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    if (reviewsList.isEmpty) {
      return const Center(
        child: Text('No Data'),
      );
    }
    return Container(
      color: Theme.of(context).scaffoldBackgroundColor,
      child: SingleChildScrollView(
        padding: const EdgeInsets.only(top: 8.0, bottom: 8.0),
        child: ThemedBox(
          child: ReviewsBody(reviewsList: reviewsList),
        ),
      ),
    );
  }
}
