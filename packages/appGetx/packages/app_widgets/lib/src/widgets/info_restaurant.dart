import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:doc_widget/doc_widget.dart';

import 'rating_image.dart';

@docWidget
class RestaurantInfoPanel extends StatelessWidget {
  final ParseModelRestaurants? restaurant;

  final VoidCallback onEditPressed;

  /// action icon events.
  final VoidCallback onNewEventIconPress;
  final VoidCallback onNewReviewButtonPress;
  final VoidCallback onSeeAllReviewsButtonPress;

  const RestaurantInfoPanel({
    Key? key,
    required this.restaurant,
    required this.onEditPressed,
    required this.onNewEventIconPress,
    required this.onNewReviewButtonPress,
    required this.onSeeAllReviewsButtonPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 0.0),
      child: _buildBody(),
    );
  }

  Widget _buildBody() {
    return Column(
      children: [
        // Line 1
        const SizedBox(height: 4),
        TextButton.icon(
          onPressed: onEditPressed,
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
            restaurant!.displayName!,
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
    if (restaurant!.extraNote == '') {
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
            restaurant!.extraNote!.inCaps,
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
            onPressed: onNewEventIconPress,
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
