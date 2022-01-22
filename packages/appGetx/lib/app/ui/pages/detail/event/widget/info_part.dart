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
  late DetailEventController controller;

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
            padding: const EdgeInsets.only(),
            child: Obx(() => _buildBody(context))));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelEvents? event = controller.state.detailModel;
    ParseModelRestaurants? restaurant = controller.state.restaurant;
    return Column(
      children: [
        // Line 1
        const SizedBox(height: 4),
        TextButton.icon(
          onPressed: controller.onEditEventIconPress,
          icon: const Icon(Icons.edit),
          label: const Text(
            'Edit Event',
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
              fontSize: 30,
            ),
          ),
        ),
        const SizedBox(height: 8),
        Padding(
          padding: const EdgeInsets.only(left: 32, right: 32),
          child: Text(
            event!.displayName,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w400,
              fontSize: 16,
            ),
          ),
        ),
        const SizedBox(height: 4),
        // Line 3
        _buildDateInfo(),
        const SizedBox(height: 16),
        // Line 4
        RatingImage(baseReview: event),
        const SizedBox(height: 8),
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
            event.want.inCaps,
            style: const TextStyle(fontSize: 14),
          ),
        ),
        const SizedBox(height: 8),
      ],
    );
  }

  Widget _buildDateInfo() {
    ParseModelEvents? event = controller.state.detailModel;
    return Table(
      children: [
        TableRow(children: [
          Container(
            padding: const EdgeInsets.only(right: 12),
            child: const Text(
              "Start Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event!.start),
            style: const TextStyle(fontSize: 15.0),
          ),
        ]),
        TableRow(children: [
          Container(
            padding: const EdgeInsets.only(right: 12),
            child: const Text(
              "End Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event.end),
            style: const TextStyle(fontSize: 15.0),
          ),
        ]),
      ],
    );
  }

  Widget _buildActionBar(BuildContext context) {
    return SizedBox(
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
            label: const Text(
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
