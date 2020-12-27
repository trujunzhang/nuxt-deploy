import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:provider/provider.dart';

class InfoPart extends StatelessWidget {
  final ParseModelPeopleInEvent peopleInEvent;

  const InfoPart({Key key, @required this.peopleInEvent}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilderView<ParseModelUsers>(
        stream: firestoreDatabase.singleUserStream(peopleInEvent.userId),
        render: (AsyncSnapshot fbUserSnapshot) {
          // Step1: fetch single user model.
          ParseModelUsers user = fbUserSnapshot.data;

          return StreamBuilderView<ParseModelRestaurants>(
              stream: firestoreDatabase.singleRestaurantStream(peopleInEvent.restaurantId),
              render: (AsyncSnapshot fbUserSnapshot) {
                // Step2: fetch single restaurant model.
                ParseModelRestaurants restaurant = fbUserSnapshot.data;
                return _buildCard(context);
              });
        });
  }

  Widget _buildCard(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        elevation: 0.0,
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
              color: Colors.white,
            )));
  }
}
