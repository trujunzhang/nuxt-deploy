import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/reccipes/image.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/util/flushbar_utils.dart';
import 'package:provider/provider.dart';

import 'no_result.dart';
import 'select_recipe_provider.dart';

class SelectRecipeScreen extends StatelessWidget {
  SelectRecipeScreen({Key? key, required this.screenObject}) : super(key: key);

  final SelectRecipeScreenObject screenObject;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(S.of(context).peopleInEventSelectRecipeTitleTxt),
          actions: [
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      String restaurantId = screenObject.peopleInEvent.restaurantId;
                      NavigatorUtils.push(
                          context, '${EditRouter.newRecipePage}?${ParamsHelper.RESTAURANT_ID}=$restaurantId');
                    },
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ))),
          ],
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelRecipes> recipesDict =
        FilterModels.instance.getRecipesDict(context, screenObject.peopleInEvent.restaurantId);

    if (screenObject.unorderedRecipeIds.length == 0) {
      return RecipesEmpty(
        restaurantId: screenObject.peopleInEvent.restaurantId,
      );
    }

    return Container(
        padding: EdgeInsets.only(top: 16),
        child: ListView.separated(
          itemCount: screenObject.unorderedRecipeIds.length,
          separatorBuilder: (BuildContext context, int index) => Divider(),
          itemBuilder: (BuildContext context, int index) {
            var unorderedRecipeId = screenObject.unorderedRecipeIds[index];
            return _buildUserItem(context, recipesDict[unorderedRecipeId]);
          },
        ));
  }

  Widget _buildUserItem(BuildContext context, ParseModelRecipes? recipe) {
    SelectState selectState = Provider.of<SelectState>(context, listen: true);
    bool isSelected = selectState.contains(recipe!.uniqueId);
    return ListTile(
      onTap: isSelected
          ? null
          : () async {
              if (selectState.getSaving() == true) {
                return;
              }

              selectState.setSaving(true);

              FlushBarUtils.show(context, title: 'Saving...', message: recipe.displayName);

              try {
                ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.addRecipe(
                  model: screenObject.peopleInEvent,
                  recipeId: recipe.uniqueId,
                );

                final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
                await firestoreDatabase.setPeopleInEvent(model: nextModel); // For Restaurant.
              } catch (e) {}

              selectState.pushId(recipe.uniqueId);
              selectState.setSaving(false);
            },
      leading: CircleAvatar(
          radius: 25.0,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25.0),
            child: buildRecipeImage(recipe),
          )),
      title: Text(recipe.displayName),
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
