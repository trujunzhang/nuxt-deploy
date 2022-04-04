// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';

// ===========================================================
// Model: Recipes
// ===========================================================

extension FilterRecipeDict on Map<String, ParseModelRecipes> {
  List<ParseModelRecipes> getRecipesListForEvent(List<String> recipes) {
    List<ParseModelRecipes> list = [];
    for (var recipeId in recipes) {
      ParseModelRecipes? recipe = this[recipeId];
      if (recipe != null) {
        list.add(recipe);
      }
    }
    return list;
  }
}

extension FilterRecipeList on List<ParseModelRecipes> {
  List<ParseModelRecipes> filterByRestaurantId(String restaurantId) {
    return where((recipe) => recipe.restaurantId == restaurantId).toList();
  }

  ParseModelRecipes? singleRecipe(String uniqueId) {
    return singleWhereOrNull((recipe) => recipe.uniqueId == uniqueId);
  }

  Map<String, ParseModelRecipes> getRecipesDict(String restaurantId) {
    Map<String, ParseModelRecipes> hashMap = {};
    objectToMap(ParseModelRecipes recipe) {
      hashMap[recipe.uniqueId!] = recipe;
    }

    filterByRestaurantId(restaurantId).forEach(objectToMap);
    return hashMap;
  }
}
