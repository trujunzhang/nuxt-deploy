import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';

import '../index.dart';

class InfoPart extends StatefulWidget {
  final String tag;

  const InfoPart({Key? key, required this.tag}) : super(key: key);

  @override
  _InfoPartState createState() => _InfoPartState();
}

class _InfoPartState extends State<InfoPart> {
  late DetailRecipeController controller;

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
    ParseModelRecipes? recipe = controller.state.detailModel;
    return Column(
      children: [
        // Line 1
        const SizedBox(height: 4),
        TextButton.icon(
          onPressed: controller.onEditRecipeIconPress,
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
            recipe!.displayName,
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
            '\$' + recipe.price,
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
