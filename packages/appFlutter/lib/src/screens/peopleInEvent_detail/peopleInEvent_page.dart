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

class PeopleInEventDetail extends StatefulWidget {
  PeopleInEventDetail({Key key}) : super(key: key);

  @override
  EventPageState createState() => EventPageState();
}

class EventPageState extends State<PeopleInEventDetail> {
  ParseModelPeopleInEvent _peopleInEvent;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelPeopleInEvent _peopleInEventModel =
        ModalRoute.of(context).settings.arguments;
    if (_peopleInEventModel != null) {
      _peopleInEvent = _peopleInEventModel;
      setState(() {
        _peopleInEvent = _peopleInEventModel;
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
          peopleInEvent: _peopleInEvent,
        ),
        // Line 1: Ordered users list
        buildTextSectionTitle("People Ordered"),
      ],
    );
  }
}
