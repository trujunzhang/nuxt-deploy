import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class ReviewListPage extends StatefulWidget {
  const ReviewListPage({Key? key}) : super(key: key);

  @override
  _ReviewListPageState createState() => _ReviewListPageState();
}

class _ReviewListPageState extends State<ReviewListPage> {
  late ReviewListController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller =
        Get.put<ReviewListController>(ReviewListController(), tag: tag);
  }

  @override
  void dispose() {
    Get.delete<ReviewListController>(tag: tag);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).reviewsListPageAppBarTitleTxt),
          leadingType: AppBarBackType.Back,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    return Column(
      children: [
        // Line 5: Reviews
        // buildTextSectionTitle("Review Highlights"),
        Padding(
          padding: EdgeInsets.only(bottom: reviewsList.isEmpty ? 16 : 0),
          child: Container(
              decoration: BoxDecoration(
                color: reviewsList.isEmpty
                    ? Colors.transparent
                    : Theme.of(context).colorScheme.primaryVariant,
              ),
              child: ReviewsBody(reviewsList: reviewsList)),
        ),
      ],
    );
  }
}
