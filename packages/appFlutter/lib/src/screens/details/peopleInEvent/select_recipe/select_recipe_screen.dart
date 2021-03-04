import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/reccipes/image.dart';
import 'package:provider/provider.dart';

class SelectRecipeScreenObject {
  final ParseModelPeopleInEvent peopleInEvent;
  final List<String> unorderedRecipeIds;

  SelectRecipeScreenObject({
    @required this.peopleInEvent,
    @required this.unorderedRecipeIds,
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
    Map<String, ParseModelRecipes> recipesDict =
        FilterModels.instance.getRecipesDict(context);
    List<String> recipeIds = List.from(recipesDict.keys);
    List<String> unorderedRecipeIds = screenObject.unorderedRecipeIds;

    return Scaffold(
        appBar: AppBar(
            title: Text(AppLocalizations.of(context)
                .translate("peopleInEventSelectRecipeTitleTxt"))),
        body: Container(
            padding: EdgeInsets.only(top: 16),
            child: ListView.separated(
              itemCount: unorderedRecipeIds.length,
              separatorBuilder: (BuildContext context, int index) => Divider(),
              itemBuilder: (BuildContext context, int index) {
                return _buildUserItem(context, recipesDict[recipeIds[index]]);
              },
            )));
  }

  Widget _buildUserItem(BuildContext context, ParseModelRecipes recipe) {
    return ListTile(
      onTap: () async {
        ParseModelPeopleInEvent lastModel = screenObject.peopleInEvent;

        ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.addRecipe(
          model: lastModel,
          recipeId: recipe.uniqueId,
        );

        try {
          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setPeopleInEvent(
              model: nextModel); // For Restaurant.
        } catch (e) {}

        // Navigate
        Navigator.of(context).pop();
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
