import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/details/event/select_waiter/select_waiter_screen.dart';

import 'waiter_item.dart';

class WaiterBody extends StatelessWidget {
  final Map<String, ParseModelPhotos> waitersDict;
  final ParseModelEvents event;

  const WaiterBody({Key key, @required this.waitersDict, @required this.event})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (event.waiters.length == 0) {
      return buildEmptyWaiters(context);
    }
    return buildWaitersListView();
  }

  Widget buildWaitersListView() {
    return ListView.builder(
      itemCount: event.waiters.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        String waiterId = event.waiters[index];
        return WaiterItem(
          photoData: waitersDict[waiterId],
        );
      },
    );
  }

  Widget buildEmptyWaiters(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          Navigator.push<dynamic>(
            context,
            MaterialPageRoute<dynamic>(
                builder: (BuildContext context) => SelectWaiterScreen(),
                settings: RouteSettings(
                  arguments: SelectWaiterScreenObject(
                    event: event,
                  ),
                ),
                fullscreenDialog: true),
          );
        },
        child: Icon(
          Icons.add,
          color: Colors.deepOrangeAccent,
          size: 50,
        ),
      ),
    ));
  }
}
