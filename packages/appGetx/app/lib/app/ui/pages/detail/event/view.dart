import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/detail/event/widget/section_waiter_title.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:ieatta/app/ui/widgets/page_section_see_all.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/peopleInEvent_body.dart';
import 'widget/waiter_body.dart';

class DetailEventPage extends StatefulWidget {
  const DetailEventPage({Key? key}) : super(key: key);

  @override
  _DetailEventPageState createState() => _DetailEventPageState();
}

class _DetailEventPageState extends State<DetailEventPage> {
  late DetailEventController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller =
        Get.put<DetailEventController>(DetailEventController(), tag: tag);
  }

  @override
  void dispose() {
    Get.delete<DetailEventController>(tag: tag);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: appHeaderTitle(),
          leadingType: AppBarBackType.Back,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    ParseModelRestaurants? restaurant = controller.state.restaurant;
    ParseModelEvents? event = controller.state.detailModel;
    return Column(
      children: [
        EventInfoPanel(
          restaurant: restaurant,
          event: event,
          onEditPressed: controller.onEditEventIconPress,

          /// action icon events.
          onSelectPersonIconPress: controller.onSelectPersonIconPress,
          onNewReviewButtonPress: controller.onNewReviewButtonPress,
          onSeeAllReviewsButtonPress: controller.onSeeAllReviewsButtonPress,
        ),
        // Line 1: Ordered users list
        buildTextSectionTitle("People Ordered"),
        PeopleInEventBody(tag: tag),
        // Line 2: Waiters list
        WaitersSectionTitle(
          onAddWaiterIconPress: controller.onAddWaiterIconPress,
        ),
        SizedBox(
          height: 160,
          child: WaiterBody(tag: tag),
        ),
        // Line 3: Reviews list
        buildTextSectionTitle("Review Highlights"),
        Padding(
          padding: EdgeInsets.only(bottom: reviewsList.isEmpty ? 16 : 0),
          child: ThemedBox(
              child: ReviewsBody(
                  reviewsList:
                      reviewsList.take(AppConfigs.pageReviewSize).toList())),
        ),
        seeAllList(reviewsList.length, controller.onSeeAllReviewsButtonPress),
      ],
    );
  }
}
