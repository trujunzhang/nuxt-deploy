import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

import '../index.dart';
import 'menu_item.dart';

class MenusBody extends StatefulWidget {
  final String tag;

  const MenusBody({Key? key, required this.tag}) : super(key: key);

  @override
  _MenusBodyState createState() => _MenusBodyState();
}

class _MenusBodyState extends State<MenusBody> {
  late DetailRestaurantController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
    List<ParseModelRecipes> recipesList = controller.state.recipesList;
    if (recipesList.isEmpty) {
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
    return Card(
        child: Center(
      child: InkWell(
        onTap: controller.onCreateMenuPress,
        child: const Icon(
          Icons.add_box,
          color: Colors.deepOrangeAccent,
          size: 50,
        ),
      ),
    ));
  }
}
