import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/widgets/rating_image.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';

class InfoPart extends StatelessWidget {
  final ParseModelRecipes recipe;

  const InfoPart({Key? key, required this.recipe}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        // elevation: 0.0,
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
              color: Colors.white,
              child: _buildBody(context),
            )));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        // Line 1
        SizedBox(height: 4),
        TextButton.icon(
          onPressed: () {
            NavigatorUtils.push(context,
                '${EditRouter.editRecipePage}?${ParamsHelper.ID}=${recipe.uniqueId}&${ParamsHelper.RESTAURANT_ID}=${recipe.restaurantId}');
          },
          icon: Icon(Icons.edit),
          label: Text(
            'Edit Recipe',
            style: TextStyle(color: Color(0xff479EFF)),
          ),
        ),
        // Line 2
        Padding(
          padding: EdgeInsets.only(left: 24, right: 24),
          child: Text(
            recipe.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 22,
            ),
          ),
        ),
        SizedBox(height: 8),
        // Line 3
        Center(
          child: Text(
            '\$' + recipe.price,
            style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold, color: Colors.black.withOpacity(0.6)),
          ),
        ),
        SizedBox(height: 4),
        // Line 4
        RatingImage(baseReview: recipe),
        SizedBox(height: 8),
        // Line 5
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
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
              NavigatorUtils.push(
                  context, ParamsHelper.getNewReviewPath(reviewType: ReviewType.Recipe, relatedId: recipe.uniqueId));
            },
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
            onPressed: () {
              NavigatorUtils.push(
                  context, ParamsHelper.getReviewListPath(reviewType: ReviewType.Recipe, relatedId: recipe.uniqueId));
            },
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
