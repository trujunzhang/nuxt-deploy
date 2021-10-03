import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/helpers/images/recipe.dart';
import 'package:ieatta/app/ui/widgets/rating_image.dart';

import '../index.dart';

var cardText = TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold);

class RecipeItem extends StatelessWidget {
  DetailPeopleInEventController controller =
      Get.find<DetailPeopleInEventController>();
  final ParseModelRecipes recipeData;

  RecipeItem({
    Key? key,
    required this.recipeData,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Slidable(
      key: Key(recipeData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.25,
      child: _buildBody(context),
      secondaryActions: <Widget>[
        IconSlideAction(
          caption: 'Delete',
          color: Colors.red,
          icon: Icons.delete,
          onTap: () async {
            await controller.onDeleteRecipeIconPress(context, recipeData);
          },
        ),
      ],
    );
  }

  Widget _buildBody(BuildContext context) {
    return InkWell(
      onTap: () {
        controller.onRecipeItemClick(recipeData);
      },
      child: Container(
        padding: EdgeInsets.only(left: 24, right: 24, top: 12, bottom: 12),
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
            style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.white),
          ),
          Row(
            children: <Widget>[
              // Rating star view
              RatingImage(baseReview: recipeData),
              SizedBox(
                width: 10.0,
              ),
              Text(
                "(" + recipeData.reviewCount.toString() + " Reviews)",
                style: TextStyle(color: Colors.grey),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCard(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.all(
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
              decoration: BoxDecoration(
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
                      style: TextStyle(
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
