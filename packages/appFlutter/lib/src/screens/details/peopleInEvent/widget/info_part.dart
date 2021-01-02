import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/components/restaurants/image.dart';
import 'package:ieatta/src/components/users/image.dart';
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
              stream: firestoreDatabase
                  .singleRestaurantStream(peopleInEvent.restaurantId),
              render: (AsyncSnapshot fbUserSnapshot) {
                // Step2: fetch restaurant model.
                ParseModelRestaurants restaurant = fbUserSnapshot.data;
                return StreamBuilderView<ParseModelEvents>(
                    stream: firestoreDatabase.singleEventStream(
                        peopleInEvent.restaurantId, peopleInEvent.eventId),
                    render: (AsyncSnapshot fbUserSnapshot) {
                      // Step2: fetch event model.
                      ParseModelEvents event = fbUserSnapshot.data;
                      return _buildCard(context, user, restaurant, event);
                    });
              });
        });
  }

  Widget _buildCard(BuildContext context, ParseModelUsers user,
      ParseModelRestaurants restaurant, ParseModelEvents event) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        elevation: 0.0,
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
              height: MediaQuery.of(context).size.width / 2 + 80,
              color: Colors.white,
              child: _buildBody(context, user, restaurant, event),
            )));
  }

  Widget _buildBody(BuildContext context, ParseModelUsers user,
      ParseModelRestaurants restaurant, ParseModelEvents event) {
    return Stack(
      children: [
        AspectRatio(
          aspectRatio: 2,
          child: buildRestaurantImage(restaurant),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [_buildUserInfo(context, user)],
        )
      ],
    );
  }

  Widget _buildUserInfo(BuildContext context, ParseModelUsers user) {
    return Container(
      padding: EdgeInsets.only(left: 24),
      height: 115,
      // color: Colors.red,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 60,
            height: 60,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: buildParseModelUsersImage(user),
            ),
          ),
          SizedBox(height: 4),
          Text(user.username,
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22)),
          // SizedBox(height: 4),
          Text(peopleInEvent.recipes.length.toString() + ' Recipes Ordered',
              style: TextStyle(
                  fontWeight: FontWeight.w200,
                  color: Colors.grey,
                  fontSize: 14)),
        ],
      ),
    );
  }
}
