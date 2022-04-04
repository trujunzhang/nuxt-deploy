import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mix/mix.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import '../index.dart';

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
      return Box(
        mix: Mix(
          paddingTop(16),
          height(160),
        ),
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
      );
    }
    return buildRecipesListView();
  }

  Widget buildRecipesListView() {
    List<ParseModelRecipes> recipesInEvent = controller.state.recipesInEvent;
    List<Widget> list = [];
    for (var i = 0; i < recipesInEvent.length; i++) {
      ParseModelRecipes? recipe = recipesInEvent[i];
      list.add(SlidableRow(
        rowKey: recipe.uniqueId!,
        row: RecipeItem(
          recipe: recipe,
          onTapItem: () {
            controller.onRecipeItemClick(recipe);
          },
        ),
        onPress: (BuildContext context) async {
          await controller.onDeleteFBRecipeIconPress(context, recipe);
        },
      ));
    }
    return Column(children: list);
  }
}
