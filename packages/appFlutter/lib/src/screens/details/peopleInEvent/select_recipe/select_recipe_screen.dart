import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/reccipes/image.dart';
import 'package:ieatta/src/screens/edit/recipe/recipe_provider_screen.dart';
import 'package:provider/provider.dart';
import 'package:another_flushbar/flushbar.dart';

import 'no_result.dart';

class SelectRecipeScreenObject {
  final ParseModelPeopleInEvent peopleInEvent;

  SelectRecipeScreenObject({
    @required this.peopleInEvent,
  });
}

class SelectRecipeScreen extends StatefulWidget {
  SelectRecipeScreen({Key key}) : super(key: key);

  @override
  _SelectRecipeScreenState createState() => _SelectRecipeScreenState();
}

class _SelectRecipeScreenState extends State<SelectRecipeScreen> {
  // Model
  SelectRecipeScreenObject screenObject;
  bool isSaving = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final SelectRecipeScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(AppLocalizations.of(context)
              .translate("peopleInEventSelectRecipeTitleTxt")),
          actions: [
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      String restaurantId =
                          screenObject.peopleInEvent.restaurantId;
                      Navigator.of(context).pushNamed(Routes.create_edit_recipe,
                          arguments: CreateEditRecipeScreenObject(
                              restaurantId: restaurantId));
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
    Map<String, ParseModelRecipes> recipesDict = FilterModels.instance
        .getRecipesDict(context, screenObject.peopleInEvent.restaurantId);

    List<String> unorderedRecipeIds = FilterUtils.instance
        .getUnorderedRecipeIds(List.from(recipesDict.keys), screenObject.peopleInEvent);

    if (unorderedRecipeIds.length == 0) {
      return RecipesEmpty(
        restaurantId: screenObject.peopleInEvent.restaurantId,
      );
    }

    return Container(
        padding: EdgeInsets.only(top: 16),
        child: ListView.separated(
          itemCount: unorderedRecipeIds.length,
          separatorBuilder: (BuildContext context, int index) => Divider(),
          itemBuilder: (BuildContext context, int index) {
            return _buildUserItem(context, recipesDict[unorderedRecipeIds[index]]);
          },
        ));
  }

  Widget _buildUserItem(BuildContext context, ParseModelRecipes recipe) {
    return ListTile(
      onTap: () async {
        if (isSaving == true) {
          return;
        }
        setState(() {
          isSaving = true;
        });

        var _flushBar = Flushbar(
          flushbarPosition: FlushbarPosition.TOP,
          flushbarStyle: FlushbarStyle.GROUNDED,
          backgroundColor: Colors.red,
          boxShadows: [
            BoxShadow(
              color: Colors.red[800],
              offset: Offset(0.0, 2.0),
              blurRadius: 3.0,
            )
          ],
          isDismissible: false,
          duration: Duration(seconds: 4),
          // now we want to swipe to the sides
          dismissDirection: FlushbarDismissDirection.HORIZONTAL,
          // The default curve is Curves.easeOut
          forwardAnimationCurve: Curves.fastLinearToSlowEaseIn,
          title: 'Saving...',
          message: recipe.displayName,
          icon: Icon(
            Icons.save_rounded,
            color: Colors.blue,
          ),
        );

        _flushBar.show(context);

        try {
          ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.addRecipe(
            model: screenObject.peopleInEvent,
            recipeId: recipe.uniqueId,
          );

          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setPeopleInEvent(
              model: nextModel); // For Restaurant.
        } catch (e) {}

        setState(() {
          isSaving = false;
        });
      },
      leading: CircleAvatar(
          radius: 25.0,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25.0),
            child: buildRecipeImage(recipe),
          )),
      title: Text(recipe.displayName),
    );
  }
}
