import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/screens/review_detail/reviews_body.dart';
import 'package:provider/provider.dart';

import 'widget/info_part.dart';
import 'widget/recipe_body.dart';

class PeopleInEventDetail extends StatefulWidget {
  PeopleInEventDetail({Key key}) : super(key: key);

  @override
  EventPageState createState() => EventPageState();
}

class EventPageState extends State<PeopleInEventDetail> {
  ParseModelPeopleInEvent lastPeopleInEvent;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelPeopleInEvent lastPeopleInEventModel =
        ModalRoute.of(context).settings.arguments;
    if (lastPeopleInEventModel != null) {
      lastPeopleInEvent = lastPeopleInEventModel;
      setState(() {
        lastPeopleInEvent = lastPeopleInEventModel;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
        appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
        body: StreamBuilderView<ParseModelPeopleInEvent>(
            stream: firestoreDatabase.singlePeopleInEventStream(
                lastPeopleInEvent.restaurantId,
                lastPeopleInEvent.eventId,
                lastPeopleInEvent.uniqueId),
            render: (AsyncSnapshot fbUserSnapshot) {
              ParseModelPeopleInEvent peopleInEvent = fbUserSnapshot.data;
              return _buildBody(firestoreDatabase, peopleInEvent);
            }));
  }

  Widget _buildBody(FirestoreDatabase firestoreDatabase,
      ParseModelPeopleInEvent peopleInEvent) {
    return ListView(
      shrinkWrap: true,
      children: [
        InfoPart(
          peopleInEvent: peopleInEvent,
        ),
        // Line 1: Ordered users list
        buildTextSectionTitle("Ordered Recipes"),
        StreamBuilderView<List<ParseModelRecipes>>(
          stream: firestoreDatabase.recipesStream(peopleInEvent.restaurantId),
          render: (AsyncSnapshot fbSnapshot) {
            return RecipeBody(
              recipesList: fbSnapshot.data,
              peopleInEvent: peopleInEvent,
            );
          },
        ),
      ],
    );
  }
}
