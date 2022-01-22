import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/images/recipe.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';

var cardText = const TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold);

class RecipeItem extends StatelessWidget {
  final ParseModelRecipes recipeData;
  final Function(BuildContext context) onDeleteRecipeIconPress;
  final Function() onRecipeItemClick;

  const RecipeItem({
    Key? key,
    required this.recipeData,
    required this.onDeleteRecipeIconPress,
    required this.onRecipeItemClick,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SlidableRow(
      rowKey: recipeData.uniqueId,
      row: _buildBody(context),
      onPress: onDeleteRecipeIconPress,
    );
  }

  Widget _buildBody(BuildContext context) {
    return InkWell(
      onTap: onRecipeItemClick,
      child: Container(
        padding:
            const EdgeInsets.only(left: 24, right: 24, top: 12, bottom: 12),
        child: _buildCard(context),
      ),
    );
  }

  Widget _buildInfo() {
    return Positioned(
      left: 10.0,
      bottom: 10.0,
      right: 10.0,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text(
            recipeData.displayName,
            style: const TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.white),
          ),
          Row(
            children: <Widget>[
              // Rating star view
              RatingImage(baseReview: recipeData),
              const SizedBox(
                width: 10.0,
              ),
              Text(
                "( ${recipeData.reviewCount} Reviews)",
                style: const TextStyle(color: Colors.grey),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCard(BuildContext context) {
    return ClipRRect(
      borderRadius: const BorderRadius.all(
        Radius.circular(10.0),
      ),
      child: Stack(
        children: <Widget>[
          Container(
            height: 230.0,
            width: Get.width,
            child: buildRecipeImage(recipeData),
          ),
          Positioned(
            left: 0.0,
            bottom: 0.0,
            width: Get.width,
            height: 60.0,
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  colors: [Colors.black, Colors.black12],
                ),
              ),
            ),
          ),
          _buildInfo(),
          Positioned(
            left: 10.0,
            bottom: 10.0,
            right: 10.0,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Container(),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: <Widget>[
                    Text(
                      '\$' + recipeData.price,
                      style: const TextStyle(
                          fontSize: 18.0,
                          fontWeight: FontWeight.bold,
                          color: Colors.orangeAccent),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
