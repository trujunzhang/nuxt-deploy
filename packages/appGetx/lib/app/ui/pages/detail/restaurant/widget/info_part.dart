import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';
import 'package:my_plugin/my_plugin.dart';

import '../index.dart';

class InfoPart extends StatefulWidget {
  final String tag;

  const InfoPart({Key? key, required this.tag}) : super(key: key);

  @override
  _InfoPartState createState() => _InfoPartState();
}

class _InfoPartState extends State<InfoPart> {
  late DetailRestaurantController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: const EdgeInsets.symmetric(horizontal: 0.0),
        child: Padding(
            padding: const EdgeInsets.only(), child: Obx(() => _buildBody())));
  }

  Widget _buildBody() {
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    return Column(
      children: [
        // Line 1
        const SizedBox(height: 4),
        TextButton.icon(
          onPressed: controller.onEditRestaurantIconPress,
          icon: const Icon(Icons.edit),
          label: const Text(
            'Edit Restaurant',
            style: TextStyle(color: Color(0xff479EFF)),
          ),
        ),
        // Line 2
        Padding(
          padding: const EdgeInsets.only(left: 24, right: 24),
          child: Text(
            restaurant!.displayName,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 22,
            ),
          ),
        ),
        const SizedBox(height: 8),
        // Line 3
        RatingImage(baseReview: restaurant),
        const SizedBox(height: 8),
        // Line 4
        _buildNote(),
        // Line 5
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(),
      ],
    );
  }

  Widget _buildNote() {
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    if (restaurant!.extraNote == '') {
      return const SizedBox.shrink();
    }
    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Divider(height: 10.0, thickness: 0.5),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 32, right: 32, top: 8),
          child: Text(
            restaurant.extraNote.inCaps,
            style: const TextStyle(fontSize: 14),
          ),
        ),
        const SizedBox(height: 8),
      ],
    );
  }

  Widget _buildActionBar() {
    return SizedBox(
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
            label: const Text(
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
            label: const Text(
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
            label: const Text(
              'Reviews',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
        ],
      ),
    );
  }
}
