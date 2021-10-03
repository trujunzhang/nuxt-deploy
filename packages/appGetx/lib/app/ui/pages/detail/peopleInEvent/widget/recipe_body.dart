import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

import '../index.dart';
import 'recipe_item.dart';

class RecipeBody extends GetWidget<DetailPeopleInEventController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelPeopleInEvent? peopleInEvent = controller.state.detailModel;
    if (peopleInEvent!.recipes.length == 0) {
      return Padding(
        padding: const EdgeInsets.only(top: 16),
        child: Container(
          height: 160,
          decoration: new BoxDecoration(
            color: Theme.of(context).colorScheme.primaryVariant,
          ),
          child: Center(
            child: Text('no recipes'),
          ),
        ),
      );
    }
    return buildRecipesListView();
  }

  Widget buildRecipesListView() {
    Map<String, ParseModelRecipes> recipesDict =
        controller.state.recipesDict.value;
    ParseModelPeopleInEvent? peopleInEvent = controller.state.detailModel;
    List<Widget> list = [];
    for (var i = 0; i < peopleInEvent!.recipes.length; i++) {
      ParseModelRecipes? recipe = recipesDict[peopleInEvent.recipes[i]];
      list.add(RecipeItem(
        recipeData: recipe!,
      ));
    }
    return Column(children: list);
  }
}
