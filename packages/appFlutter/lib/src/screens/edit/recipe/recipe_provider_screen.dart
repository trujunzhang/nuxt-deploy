import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/providers/recipe_state.dart';
import 'package:provider/provider.dart';

import 'recipe_page.dart';

class CreateEditRecipeScreenObject {
  final String restaurantId;
  final ParseModelRecipes recipeModel;

  CreateEditRecipeScreenObject({
    @required this.restaurantId,
    this.recipeModel,
  });
}

class CreateEditRecipeProviderScreen extends StatefulWidget {
  @override
  _CreateEditRecipeProviderScreenState createState() =>
      _CreateEditRecipeProviderScreenState();
}

class _CreateEditRecipeProviderScreenState
    extends State<CreateEditRecipeProviderScreen> {
  // Model
  CreateEditRecipeScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final CreateEditRecipeScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    ParseModelRecipes recipe = screenObject.recipeModel;
    return ChangeNotifierProvider<RecipeState>(
        create: (context) => RecipeState(
              restaurantId: screenObject.restaurantId,
              displayName: recipe != null ? recipe.displayName : "",
              price: recipe != null ? recipe.price : "",
            ),
        child: RecipePage(recipe: recipe));
  }
}
