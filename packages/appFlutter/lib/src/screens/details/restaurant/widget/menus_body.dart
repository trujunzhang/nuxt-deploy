import 'package:flutter/material.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/screens/details/detail_router.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';

import 'menu_item.dart';

class MenusBody extends StatelessWidget {
  final List<ParseModelRecipes> recipesList;
  final String restaurantId;

  const MenusBody({Key? key, required this.recipesList, required this.restaurantId}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (recipesList.length == 0) {
      return buildEmptyRecipes(context);
    }
    return buildRecipesListView();
  }

  Widget buildRecipesListView() {
    return ListView.builder(
      itemCount: recipesList.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        ParseModelRecipes recipe = recipesList[index];
        return MenuItem(
          callback: () {
            NavigatorUtils.push(context, '${DetailRouter.detailRecipePage}?${ParamsHelper.ID}=${recipe.uniqueId}');
          },
          recipeData: recipe,
        );
      },
    );
  }

  Widget buildEmptyRecipes(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          NavigatorUtils.push(context, '${EditRouter.editRecipePage}?${ParamsHelper.RESTAURANT_ID}=$restaurantId');
        },
        child: Icon(
          Icons.add_box,
          color: Colors.deepOrangeAccent,
          size: 50,
        ),
      ),
    ));
  }
}
