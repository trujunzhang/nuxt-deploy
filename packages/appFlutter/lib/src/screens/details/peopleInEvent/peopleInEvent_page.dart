import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/app/app_header.dart';

import 'widget/info_part.dart';
import 'widget/recipe_body.dart';

class PeopleInEventDetail extends StatefulWidget {
  PeopleInEventDetail({Key key}) : super(key: key);

  @override
  EventPageState createState() => EventPageState();
}

class EventPageState extends State<PeopleInEventDetail> {
  ParseModelPeopleInEvent lastPeopleInEvent;
  String peopleInEventId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelPeopleInEvent _lastPeopleInEventModel =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      lastPeopleInEvent = _lastPeopleInEventModel;
      peopleInEventId = _lastPeopleInEventModel.uniqueId;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
        body: _buildBody());
  }

  Widget _buildBody() {
    ParseModelPeopleInEvent peopleInEvent =
        FilterModels.instance.getSinglePeopleInEvent(context, peopleInEventId);

    Map<String, ParseModelRecipes> recipesDict =
        FilterModels.instance.getRecipesDict(context,peopleInEvent.restaurantId);

    List<String> unorderedRecipeIds = FilterUtils.instance
        .getUnorderedRecipeIds(List.from(recipesDict.keys), lastPeopleInEvent);

    return ListView(
      shrinkWrap: true,
      children: [
        Container(
          height: MediaQuery.of(context).size.width / 2 + 80,
          color: Colors.transparent,
          child: InfoPart(
              peopleInEvent: peopleInEvent,
              unorderedRecipeIds: unorderedRecipeIds),
        ),
        // Line 1: Ordered recipes list
        // buildTextSectionTitle("Ordered Recipes"),
        RecipeBody(
          recipesDict: recipesDict,
          peopleInEvent: peopleInEvent,
        ),
      ],
    );
  }
}
