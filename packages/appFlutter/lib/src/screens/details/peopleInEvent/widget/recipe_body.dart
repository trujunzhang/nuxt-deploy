import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';

import 'recipe_item.dart';

class RecipeBody extends StatelessWidget {
  final Map<String, ParseModelRecipes> recipesDict;
  final ParseModelPeopleInEvent peopleInEvent;

  const RecipeBody({Key? key, required this.recipesDict, required this.peopleInEvent}) : super(key: key);

  Widget buildRecipesListView() {
    List<Widget> list = [];
    for (var i = 0; i < peopleInEvent.recipes.length; i++) {
      ParseModelRecipes? recipe = recipesDict[peopleInEvent.recipes[i]];
      list.add(RecipeItem(
        peopleInEvent: peopleInEvent,
        recipeData: recipe!,
      ));
      // if (i < peopleInEvent.recipes.length - 1) {
      //   list.add(Divider(
      //     height: 1,
      //   ));
      // }
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    if (peopleInEvent.recipes.length == 0) {
      return Padding(
        padding: const EdgeInsets.only(top: 16),
        child: Container(
          height: 160,
          decoration: new BoxDecoration(color: Colors.white),
          child: Center(
            child: Text('no recipes'),
          ),
        ),
      );
    }
    return buildRecipesListView();
  }
}
