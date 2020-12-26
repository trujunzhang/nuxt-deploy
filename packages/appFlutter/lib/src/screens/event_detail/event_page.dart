import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:provider/provider.dart';

import 'widget/info_part.dart';

class EventDetail extends StatefulWidget {
  EventDetail({Key key}) : super(key: key);

  @override
  EventPageState createState() => EventPageState();
}

class EventPageState extends State<EventDetail> {
  ParseModelEvents _event;
  String _eventId = "";

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelEvents _eventModel =
        ModalRoute.of(context).settings.arguments;
    if (_eventModel != null) {
      _event = _eventModel;
      _eventId = _eventModel.uniqueId;
      setState(() {
        _event = _eventModel;
        _eventId = _eventModel.uniqueId;
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
        render: (AsyncSnapshot fbSnapshot) {
          return _buildBody(fbSnapshot.data, firestoreDatabase);
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
      ],
    );
  }
}
