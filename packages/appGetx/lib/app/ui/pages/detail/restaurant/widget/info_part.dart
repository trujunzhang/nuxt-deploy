import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';

import '../index.dart';

class InfoPart extends GetWidget<DetailRestaurantController> {
  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
                // color: Colors.white,
                child: Obx(() => _buildBody()))));
  }

  Widget _buildBody() {
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    return Column(
      children: [
        // Line 1
        SizedBox(height: 4),
        TextButton.icon(
          onPressed: controller.onEditRestaurantIconPress,
          icon: Icon(Icons.edit),
          label: Text(
            'Edit Restaurant',
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
              fontSize: 22,
            ),
          ),
        ),
        SizedBox(height: 8),
        // Line 3
        RatingImage(baseReview: restaurant),
        SizedBox(height: 8),
        // Line 4
        _buildNote(),
        // Line 5
        Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(),
      ],
    );
  }

  Widget _buildNote() {
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    if (restaurant!.extraNote == '') {
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
            restaurant.extraNote,
            style: TextStyle(fontSize: 14),
          ),
        ),
        SizedBox(height: 8),
      ],
    );
  }

  Widget _buildActionBar() {
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          TextButton.icon(
            onPressed: controller.onNewEventIconPress,
            icon: const Icon(
              Icons.add,
              color: Colors.red,
            ),
            label: Text(
              'Event',
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
