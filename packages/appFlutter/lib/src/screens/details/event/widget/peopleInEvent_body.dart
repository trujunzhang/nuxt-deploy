import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';

import 'peopleInEvent_item.dart';

class PeopleInEventBody extends StatelessWidget {
  final List<ParseModelPeopleInEvent> peopleInEventsList;
  final Map<String, ParseModelUsers> usersDict;

  const PeopleInEventBody(
      {Key key, @required this.peopleInEventsList, @required this.usersDict})
      : super(key: key);

  Widget buildPeopleInEventsListView() {
    List<Widget> list = new List<Widget>();
    for (var i = 0; i < peopleInEventsList.length; i++) {
      ParseModelPeopleInEvent peopleInEvent = peopleInEventsList[i];
      ParseModelUsers user = usersDict[peopleInEvent.userId];
      list.add(PeopleInEventItem(
        peopleInEventData: peopleInEvent,
        user: user,
      ));
      if (i < peopleInEventsList.length - 1) {
        list.add(Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    if (peopleInEventsList.length == 0) {
      return Container(
        height: 60,
        decoration: new BoxDecoration(color: Colors.white),
        child: Center(
          child: Text('no ordered people'),
        ),
      );
    }
    return buildPeopleInEventsListView();
  }
}
