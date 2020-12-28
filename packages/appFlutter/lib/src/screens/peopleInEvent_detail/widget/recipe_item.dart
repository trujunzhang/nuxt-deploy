import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/components/reccipes/image.dart';

class RecipeItem extends StatelessWidget {
  final ParseModelRecipes recipeData;

  const RecipeItem({Key key, @required this.recipeData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: ListTile(
          onTap: () {
            // Navigator.of(context)
            //     .pushNamed(Routes.detail_people_in_event, arguments: recipeData);
          },
          leading: Container(
            width: 50,
            height: 50,
            child: buildRecipeImage(recipeData),
          ),
          trailing: Icon(Icons.keyboard_arrow_right),
          title: Text(recipeData.displayName),
          subtitle: Text(
            '€' + recipeData.price,
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
