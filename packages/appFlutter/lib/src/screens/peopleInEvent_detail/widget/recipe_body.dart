import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';

import 'recipe_item.dart';

class RecipeBody extends StatelessWidget {
  final List<ParseModelRecipes> recipesList;
  final ParseModelPeopleInEvent peopleInEvent;

  const RecipeBody(
      {Key key, @required this.recipesList, @required this.peopleInEvent})
      : super(key: key);

  ParseModelRecipes filterRecipe(String recipeId) {
    for (ParseModelRecipes e in recipesList) {
      if (e.uniqueId == recipeId) {
        return e;
      }
    }
  }

  Widget buildRecipesListView() {
    List<Widget> list = new List<Widget>();
    for (var i = 0; i < peopleInEvent.recipes.length; i++) {
      ParseModelRecipes recipe = filterRecipe(peopleInEvent.recipes[i]);
      list.add(RecipeItem(
        recipeData: recipe,
      ));
      if (i < peopleInEvent.recipes.length - 1) {
        list.add(Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    if (recipesList.length == 0) {
      return Container(
        height: 60,
        decoration: new BoxDecoration(color: Colors.white),
        child: Center(
          child: Text('no recipes'),
        ),
      );
    }
    return buildRecipesListView();
  }
}
