import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class RecipeItem extends StatelessWidget {
  final ParseModelRecipes recipe;
  final Function() onTapItem;

  const RecipeItem({
    Key? key,
    required this.recipe,
    required this.onTapItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTapItem,
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
            recipe.displayName!,
            style: const TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.white),
          ),
          Row(
            children: <Widget>[
              // Rating star view
              RatingImage(baseReview: recipe),
              const SizedBox(
                width: 10.0,
              ),
              Text(
                "( ${recipe.reviewCount} Reviews)",
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
            child: buildRecipeImage(recipe),
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
                      '\$' + recipe.price!,
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
