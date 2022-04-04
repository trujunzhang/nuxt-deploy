import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class RecipeInfoPanel extends StatelessWidget {
  final ParseModelRecipes? recipe;
  final VoidCallback onEditPressed;

  /// action icon events.
  final VoidCallback onNewReviewButtonPress;
  final VoidCallback onSeeAllReviewsButtonPress;

  const RecipeInfoPanel({
    Key? key,
    required this.recipe,
    required this.onEditPressed,
    required this.onNewReviewButtonPress,
    required this.onSeeAllReviewsButtonPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 0.0),
      child: Padding(
        padding: const EdgeInsets.only(),
        child: _buildBody(),
      ),
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
            'Edit Recipe',
            style: TextStyle(color: Color(0xff479EFF)),
          ),
        ),
        // Line 2
        Padding(
          padding: const EdgeInsets.only(left: 24, right: 24),
          child: Text(
            recipe!.displayName!,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 22,
            ),
          ),
        ),
        const SizedBox(height: 8),
        // Line 3
        Center(
          child: Text(
            '\$' + recipe!.price!,
            style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.black.withOpacity(0.6)),
          ),
        ),
        const SizedBox(height: 4),
        // Line 4
        RatingImage(baseReview: recipe),
        const SizedBox(height: 8),
        // Line 5
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(),
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
