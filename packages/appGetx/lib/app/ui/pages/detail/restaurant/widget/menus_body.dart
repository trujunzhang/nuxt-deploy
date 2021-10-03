import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

import '../index.dart';
import 'menu_item.dart';

class MenusBody extends GetWidget<DetailRestaurantController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
    List<ParseModelRecipes> recipesList = controller.state.recipesList;
    if (recipesList.length == 0) {
      return buildEmptyRecipes();
    }
    return buildRecipesListView();
  }

  Widget buildRecipesListView() {
    List<ParseModelRecipes> recipesList = controller.state.recipesList;
    return ListView.builder(
      itemCount: recipesList.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        ParseModelRecipes recipe = recipesList[index];
        return MenuItem(
          callback: () {
            controller.onMenuItemPress(recipe);
          },
          recipeData: recipe,
        );
      },
    );
  }

  Widget buildEmptyRecipes() {
    String restaurantId;
    return Card(
        child: Center(
      child: InkWell(
        onTap: controller.onCreateMenuPress,
        child: Icon(
          Icons.add_box,
          color: Colors.deepOrangeAccent,
          size: 50,
        ),
      ),
    ));
  }
}
