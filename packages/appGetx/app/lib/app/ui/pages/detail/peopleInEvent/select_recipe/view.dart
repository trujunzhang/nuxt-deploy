import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/no_result.dart';

class SelectRecipePage extends StatelessWidget {
  SelectRecipeController controller = Get.find<SelectRecipeController>();

  SelectRecipePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).peopleInEventSelectRecipeTitleTxt),
          leadingType: AppBarBackType.Close,
          actions: [
            Padding(
                padding: const EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      controller.onNewRecipeButtonPress();
                    },
                    child: const Icon(
                      Icons.add,
                      color: Colors.white,
                    ))),
          ],
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelRecipes> recipesDict = controller.state.recipesDict;
    List<String> unorderedRecipeIds = controller.state.unorderedRecipeIds;

    if (unorderedRecipeIds.isEmpty) {
      return const RecipesEmpty();
    }

    return Container(
        padding: const EdgeInsets.only(top: 16),
        child: ListView.separated(
          itemCount: unorderedRecipeIds.length,
          separatorBuilder: (BuildContext context, int index) => Divider(),
          itemBuilder: (BuildContext context, int index) {
            var recipeId = unorderedRecipeIds[index];
            return Obx(() => _buildUserItem(context, recipesDict[recipeId]));
          },
        ));
  }

  Widget _buildUserItem(BuildContext context, ParseModelRecipes? recipe) {
    bool isSelected = controller.state.contains(recipe!.uniqueId!);
    return ListTile(
      onTap: isSelected
          ? null
          : () async {
              await controller.onAddIconPress(context, recipe);
            },
      leading: CircleAvatar(
          radius: 25.0,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25.0),
            child: buildRecipeImage(recipe),
          )),
      title: Text(recipe.displayName!),
      trailing: isSelected
          ? const Icon(
              Icons.check,
              semanticLabel: 'ADDED',
              color: Colors.blue,
            )
          : const Text(
              'ADD',
              style: TextStyle(color: Colors.blue),
            ),
    );
  }
}
