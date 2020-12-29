import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Events.dart';

class EventItem extends StatelessWidget {
  final ParseModelEvents eventData;

  const EventItem({Key key, @required this.eventData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: Key(eventData.uniqueId),
      onDismissed: (direction) {
        Scaffold
            .of(context)
            .showSnackBar(SnackBar(content: Text("Event ${eventData.displayName} deleted!")));
      },
      background: Container(color: Colors.red),
      child: _buildBody(context),
    );
  }

  Widget _buildBody(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: ListTile(
          onTap: () {
            Navigator.of(context)
                .pushNamed(Routes.detail_event, arguments: eventData);
          },
          leading: Icon(Icons.event),
          trailing: Icon(Icons.keyboard_arrow_right),
          title: Text(eventData.displayName),
          subtitle: Text(
            eventData.want.substring(0, 35),
            overflow: TextOverflow.ellipsis,
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
