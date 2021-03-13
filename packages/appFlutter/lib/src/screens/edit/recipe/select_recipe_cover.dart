import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/src/providers/recipe_state.dart';
import 'package:provider/provider.dart';

class SelectRecipeCover extends StatefulWidget {
  final ParseModelRecipes recipe;

  SelectRecipeCover({
    Key key,
    @required this.recipe,
  }) : super(key: key);

  @override
  _SelectRecipeCoverState createState() => _SelectRecipeCoverState();
}

class _SelectRecipeCoverState extends State<SelectRecipeCover> {
  onSelectCoverClick(RecipeState recipeState, ParseModelPhotos item) async {
    recipeState.setCoverUrl(item.originalUrl);
    ParseModelRecipes nextRecipe= ParseModelRecipes.updateCover(
        model: widget.recipe, originalUrl: item.originalUrl);
    await FirestoreDatabase().setRecipe(model: nextRecipe);
  }

  @override
  Widget build(BuildContext context) {
    RecipeState recipeState = Provider.of<RecipeState>(context, listen: false);
    List<ParseModelPhotos> photosList = FilterModels.instance
        .getPhotosList(context, widget.recipe.uniqueId, PhotoType.Recipe);
    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        ParseModelPhotos photo = photosList[index];
        return buildGridItem(context, recipeState, photo);
      },
    );
  }

  showSelectCoverIcon(RecipeState recipeState, ParseModelPhotos item) {
    if (item.originalUrl == '') {
      // Offline mode.
      return false;
    }
    return item.originalUrl == recipeState.coverUrl;
  }

  Widget buildGridItem(
      BuildContext context, RecipeState recipeState, ParseModelPhotos photo) {
    var body = InkWell(
      onTap: () {
        onSelectCoverClick(recipeState, photo);
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: photo),
      ),
    );
    var selection = Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [buildSelectedIcon()],
    );
    List<Widget> list = new List<Widget>();
    list.add(body);
    if (showSelectCoverIcon(recipeState, photo)) {
      list.add(selection);
    }
    return Stack(children: list);
  }
}
