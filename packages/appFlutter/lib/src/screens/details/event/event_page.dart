import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/screens/review_detail/reviews_body.dart';
import 'package:provider/provider.dart';

import 'widget/info_part.dart';
import 'widget/peopleInEvent_body.dart';

class EventDetail extends StatefulWidget {
  EventDetail({Key key}) : super(key: key);

  @override
  EventDetailState createState() => EventDetailState();
}

class EventDetailState extends State<EventDetail> {
  ParseModelEvents _event;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelEvents _eventModel =
        ModalRoute.of(context).settings.arguments;
    if (_eventModel != null) {
      _event = _eventModel;
      setState(() {
        _event = _eventModel;
      });
    }
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
          List<ParseModelUsers> users = fbUserSnapshot.data;
          return _buildBody(users, firestoreDatabase);
        },
      ),
    );
  }

  Widget _buildBody(
      List<ParseModelUsers> users, FirestoreDatabase firestoreDatabase) {
    return ListView(
      shrinkWrap: true,
      children: [
        InfoPart(
          event: _event,
        ),
        // Line 1: Ordered users list
        buildTextSectionTitle("People Ordered"),
        StreamBuilderView<List<ParseModelPeopleInEvent>>(
          stream: firestoreDatabase.peopleInEventsStream(
              _event.restaurantId, _event.uniqueId),
          render: (AsyncSnapshot fbSnapshot) {
            return PeopleInEventBody(
              peopleInEventsList: fbSnapshot.data,
              users: users,
            );
          },
        ),
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase.reviewsInEventStream( _event.restaurantId, _event.uniqueId),
            render: (AsyncSnapshot fbSnapshot){
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
      ],
    );
  }
}
