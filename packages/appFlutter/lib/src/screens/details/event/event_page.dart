import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';
import 'package:provider/provider.dart';

import 'widget/info_part.dart';
import 'widget/peopleInEvent_body.dart';
import 'widget/waiter_body.dart';

class EventDetail extends StatefulWidget {
  EventDetail({Key key}) : super(key: key);

  @override
  EventDetailState createState() => EventDetailState();
}

class EventDetailState extends State<EventDetail> {
  ParseModelEvents _lastEvent;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelEvents _eventModel =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      _lastEvent = _eventModel;
    });
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
      appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
      body: StreamBuilderView<List<ParseModelUsers>>(
        stream: firestoreDatabase.allUsersStream(),
        render: (AsyncSnapshot fbUserSnapshot) {
          // Step1: fetch all users.
          List<ParseModelUsers> users = fbUserSnapshot.data;
          return StreamBuilderView<ParseModelRestaurants>(
              stream: firestoreDatabase
                  .singleRestaurantStream(_lastEvent.restaurantId),
              render: (AsyncSnapshot fbUserSnapshot) {
                // Step2: fetch restaurant model.
                ParseModelRestaurants restaurant = fbUserSnapshot.data;
                return StreamBuilderView<ParseModelEvents>(
                    stream: firestoreDatabase.singleEventStream(
                        _lastEvent.restaurantId, _lastEvent.uniqueId),
                    render: (AsyncSnapshot fbUserSnapshot) {
                      // Step2: fetch event model.
                      ParseModelEvents event = fbUserSnapshot.data;
                      return _buildBody(
                          firestoreDatabase, users, restaurant, event);
                    });
              });
        },
      ),
    );
  }

  Widget _buildBody(
      FirestoreDatabase firestoreDatabase,
      List<ParseModelUsers> users,
      ParseModelRestaurants restaurant,
      ParseModelEvents event) {
    return ListView(
      shrinkWrap: true,
      children: [
        InfoPart(
          restaurant: restaurant,
          event: event,
        ),
        // Line 1: Ordered users list
        buildTextSectionTitle("People Ordered"),
        StreamBuilderView<List<ParseModelPeopleInEvent>>(
          stream: firestoreDatabase.peopleInEventsStream(
              restaurant.uniqueId, event.uniqueId),
          render: (AsyncSnapshot fbSnapshot) {
            return PeopleInEventBody(
              peopleInEventsList: fbSnapshot.data,
              users: users,
            );
          },
        ),
        // Line 2: Waiters list
        buildTextSectionTitle("Waiters"),
        Container(
          height: 160,
          child: StreamBuilderView<List<ParseModelPhotos>>(
            stream: firestoreDatabase.waitersStream(restaurant.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return WaiterBody(
                photosList: fbSnapshot.data,
                event: event,
              );
            },
          ),
        ),
        // Line 3: Reviews list
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase.reviewsInEventStream(
                restaurant.uniqueId, event.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
      ],
    );
  }
}
