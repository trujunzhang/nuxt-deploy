import 'package:flustars/flustars.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/app/app_header.dart';

import 'widget/info_part.dart';
import 'widget/recipe_body.dart';

class PeopleInEventDetail extends StatelessWidget {
  PeopleInEventDetail({Key? key, required this.peopleInEventId}) : super(key: key);

  final String peopleInEventId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: new AppBar(centerTitle: true, title: appHeaderTitle()), body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelPeopleInEvent? peopleInEvent = FilterModels.instance.getSinglePeopleInEvent(context, peopleInEventId);

    Map<String, ParseModelRecipes> recipesDict =
        FilterModels.instance.getRecipesDict(context, peopleInEvent!.restaurantId);

    // List<String> unorderedRecipeIds = FilterUtils.instance
    // .getUnorderedRecipeIds(List.from(recipesDict.keys), lastPeopleInEvent);

    // TODO:[2021-8-20] djzhang
    List<String> unorderedRecipeIds =
        FilterUtils.instance.getUnorderedRecipeIds(List.from(recipesDict.keys), peopleInEvent);

    return ListView(
      shrinkWrap: true,
      children: [
        Container(
          height: ScreenUtil.getInstance().screenWidth / 2 + 80,
          color: Colors.transparent,
          child: InfoPart(peopleInEvent: peopleInEvent, unorderedRecipeIds: unorderedRecipeIds),
        ),
        SizedBox(height: 12),
        // Line 1: Ordered recipes list
        // buildTextSectionTitle("Ordered Recipes"),
        RecipeBody(
          recipesDict: recipesDict,
          peopleInEvent: peopleInEvent,
        ),
        SizedBox(height: 12),
      ],
    );
  }
}
