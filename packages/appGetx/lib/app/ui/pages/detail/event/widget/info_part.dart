import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';
import 'package:ieatta/app/utils/timeago_utils.dart';

import '../index.dart';

class InfoPart extends GetWidget<DetailEventController> {
  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
                // color: Colors.white,
                child: Obx(() => _buildBody(context)))));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelEvents? event = controller.state.detailModel;
    ParseModelRestaurants? restaurant = controller.state.restaurant;
    return Column(
      children: [
        // Line 1
        SizedBox(height: 4),
        TextButton.icon(
          onPressed: controller.onEditEventIconPress,
          icon: Icon(Icons.edit),
          label: Text(
            'Edit Event',
            style: TextStyle(color: Color(0xff479EFF)),
          ),
        ),
        // Line 2
        Padding(
          padding: EdgeInsets.only(left: 24, right: 24),
          child: Text(
            restaurant!.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 30,
            ),
          ),
        ),
        SizedBox(height: 8),
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Text(
            event!.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w200,
              fontSize: 16,
            ),
          ),
        ),
        SizedBox(height: 4),
        // Line 3
        _buildDateInfo(),
        SizedBox(height: 16),
        // Line 4
        RatingImage(baseReview: event),
        SizedBox(height: 8),
        // Line 5
        _buildWant(),
        // Line 6
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildWant() {
    ParseModelEvents? event = controller.state.detailModel;
    if (event!.want == '') {
      return SizedBox.shrink();
    }
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Divider(height: 10.0, thickness: 0.5),
        ),
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32, top: 8),
          child: Text(
            event.want,
            style: TextStyle(fontSize: 14),
          ),
        ),
        SizedBox(height: 8),
      ],
    );
  }

  Widget _buildDateInfo() {
    ParseModelEvents? event = controller.state.detailModel;
    return Table(
      children: [
        TableRow(children: [
          Container(
            padding: EdgeInsets.only(right: 12),
            child: Text(
              "Start Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event!.start),
            style: TextStyle(fontSize: 15.0),
          ),
        ]),
        TableRow(children: [
          Container(
            padding: EdgeInsets.only(right: 12),
            child: Text(
              "End Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event.end),
            style: TextStyle(fontSize: 15.0),
          ),
        ]),
      ],
    );
  }

  Widget _buildActionBar(BuildContext context) {
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          TextButton.icon(
            onPressed: () {
              controller.onSelectPersonIconPress(context);
            },
            icon: const Icon(
              Icons.add_box_outlined,
              color: Colors.red,
            ),
            label: Text(
              'Person',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          TextButton.icon(
            onPressed: controller.onNewReviewButtonPress,
            icon: const Icon(
              Icons.create,
              color: Colors.green,
            ),
            label: Text(
              'Review',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          TextButton.icon(
            onPressed: controller.onSeeAllReviewsButtonPress,
            icon: const Icon(
              Icons.card_membership,
              color: Colors.purpleAccent,
            ),
            label: Text(
              'Reviews',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
        ],
      ),
    );
  }
}
