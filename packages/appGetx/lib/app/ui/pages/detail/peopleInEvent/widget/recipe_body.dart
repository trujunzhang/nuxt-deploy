import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

import '../index.dart';
import 'recipe_item.dart';

class RecipeBody extends StatefulWidget {
  final String tag;

  const RecipeBody({Key? key, required this.tag}) : super(key: key);

  @override
  _RecipeBodyState createState() => _RecipeBodyState();
}

class _RecipeBodyState extends State<RecipeBody> {
  late DetailPeopleInEventController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelRecipes> recipesInEvent = controller.state.recipesInEvent;
    if (recipesInEvent.isEmpty) {
      return Padding(
        padding: const EdgeInsets.only(top: 16),
        child: Container(
          height: 160,
          // decoration: BoxDecoration(
          //   color: Theme.of(context).colorScheme.primaryVariant,
          // ),
          child: const Center(
            child: Text(
              'no recipes',
              style: TextStyle(
                // color: Colors.grey,
                fontSize: 16,
                // fontWeight: FontWeight.w500
              ),
            ),
          ),
        ),
      );
    }
    return buildRecipesListView();
  }

  Widget buildRecipesListView() {
    List<ParseModelRecipes> recipesInEvent = controller.state.recipesInEvent;
    List<Widget> list = [];
    for (var i = 0; i < recipesInEvent.length; i++) {
      ParseModelRecipes? recipe = recipesInEvent[i];
      list.add(RecipeItem(
        recipeData: recipe,
        onDeleteRecipeIconPress: (BuildContext context) async {
          await controller.onDeleteRecipeIconPress(context, recipe);
        },
        onRecipeItemClick: () {
          controller.onRecipeItemClick(recipe);
        },
      ));
    }
    return Column(children: list);
  }
}
