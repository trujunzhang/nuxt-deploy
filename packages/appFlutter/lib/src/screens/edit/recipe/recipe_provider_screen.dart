import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/providers/recipe_state.dart';
import 'package:provider/provider.dart';

import 'recipe_page.dart';

class CreateEditRecipeProviderScreen extends StatelessWidget {
  CreateEditRecipeProviderScreen({Key? key, required this.restaurantId, this.recipeId, required this.isNew})
      : super(key: key);

  final bool isNew;
  final String restaurantId;
  final String? recipeId;

  @override
  Widget build(BuildContext context) {
    ParseModelRecipes? recipe;
    if (isNew == false) {
      recipe = FilterModels.instance.getSingleRecipe(context, recipeId!);
    }
    return ChangeNotifierProvider<RecipeState>(
        create: (context) => RecipeState(
              restaurantId: restaurantId,
              displayName: recipe != null ? recipe.displayName : "",
              price: recipe != null ? recipe.price : "",
            ),
        child: RecipePage(recipe: recipe));
  }
}
