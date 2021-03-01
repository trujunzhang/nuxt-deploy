import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/utils/rate_utils.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/reccipes/image.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';

var cardText = TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold);

class RecipeItem extends StatelessWidget {
  final ParseModelRecipes recipeData;

  const RecipeItem({Key key, @required this.recipeData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.of(context)
            .pushNamed(Routes.detail_recipe, arguments: recipeData);
      },
      child: Container(
        padding: EdgeInsets.only(left: 12, right: 12, top: 8, bottom: 8),
        child: _buildBody(context),
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
              SmoothStarRating(
                allowHalfRating: true,
                starCount: 5,
                rating: calcRateForRestaurant(
                    recipeData.rate, recipeData.reviewCount),
                size: 20,
                color: HotelAppTheme.buildLightTheme().primaryColor,
                borderColor: HotelAppTheme.buildLightTheme().primaryColor,
              ),
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

  Widget _buildBody(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.all(
        Radius.circular(10.0),
      ),
      child: Stack(
        children: <Widget>[
          Container(
            height: 230.0,
            width: MediaQuery.of(context).size.width,
            child: buildRecipeImage(recipeData),
          ),
          Positioned(
            left: 0.0,
            bottom: 0.0,
            width: MediaQuery.of(context).size.width,
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
                    // Text("Min order", style: TextStyle(color: Colors.grey))
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
