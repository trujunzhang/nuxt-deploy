import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';

import 'menu_item.dart';

class MenusBody extends StatelessWidget {
  final List<ParseModelRecipes> recipesList;

  const MenusBody({Key key, @required this.recipesList}) : super(key: key);

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
        return MenuItem(
          callback: () {
            Navigator.of(context)
                .pushNamed(Routes.detail_recipe, arguments: recipesList[index]);
          },
          recipeData: recipesList[index],
        );
      },
    );
  }

  Widget buildEmptyRecipes(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          // Navigator.of(context).pushNamed(Routes.app_camera,
          //     arguments: CAMERA_EVENT.TAKE_FOR_RESTAURANT);
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
