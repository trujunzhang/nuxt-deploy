import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';

import 'event_item.dart';

class EventsBody extends StatelessWidget {
  final List<ParseModelEvents> eventsList;

  const EventsBody({Key? key, required this.eventsList}) : super(key: key);

  Widget buildEventsListView() {
    List<Widget> list = [];
    for (var i = 0; i < eventsList.length; i++) {
      list.add(EventItem(
        eventData: eventsList[i],
      ));
      if (i < eventsList.length - 1) {
        list.add(Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    if (eventsList.length == 0) {
      return Container(
        height: 60,
        decoration: new BoxDecoration(color: Colors.white),
        child: Center(
          child: Text('no events'),
        ),
      );
    }
    return buildEventsListView();
  }
}
