import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:app_config/app_config.dart';

import 'rating_image.dart';

@docWidget
class EventInfoPanel extends StatelessWidget {
  final ParseModelRestaurants? restaurant;
  final ParseModelEvents? event;

  final VoidCallback onEditPressed;

  /// action icon events.
  final Function(BuildContext context) onSelectPersonIconPress;
  final VoidCallback onNewReviewButtonPress;
  final VoidCallback onSeeAllReviewsButtonPress;

  const EventInfoPanel({
    Key? key,
    required this.restaurant,
    required this.event,
    required this.onEditPressed,
    required this.onSelectPersonIconPress,
    required this.onNewReviewButtonPress,
    required this.onSeeAllReviewsButtonPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 0.0),
      child: Padding(
        padding: const EdgeInsets.only(),
        child: _buildBody(context),
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        // Line 1
        Gaps.vGap4,
        TextButton.icon(
          onPressed: onEditPressed,
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
            restaurant!.displayName!,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: Dimens.font_sp22,
            ),
          ),
        ),
        Gaps.vGap8,
        Padding(
          padding: const EdgeInsets.only(left: 32, right: 32),
          child: Text(
            event!.displayName!,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w400,
              fontSize: Dimens.font_sp16,
            ),
          ),
        ),
        Gaps.vGap8,
        // Line 3
        _buildDateInfo(),
        Gaps.vGap16,
        // Line 4
        RatingImage(baseReview: event),
        Gaps.vGap8,
        // Line 5
        _buildWant(),
        // Line 6
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildWant() {
    if (event!.want == '') {
      return Gaps.empty;
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
            event!.want!.inCaps,
            style: const TextStyle(fontSize: 14),
          ),
        ),
        const SizedBox(height: 8),
      ],
    );
  }

  Widget _buildDateInfo() {
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
            formatDateString(event!.start!),
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
            formatDateString(event!.end!),
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
              onSelectPersonIconPress(context);
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
            onPressed: onNewReviewButtonPress,
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
            onPressed: onSeeAllReviewsButtonPress,
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
