import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/details/event/select_waiter/select_waiter_provider.dart';
import 'package:ieatta/util/app_navigator.dart';

import 'waiter_item.dart';

class WaiterBody extends StatelessWidget {
  final Map<String, ParseModelPhotos> waitersDict;
  final List<ParseModelPhotos> waitersInEventList;
  final ParseModelEvents event;

  const WaiterBody({Key? key, required this.waitersDict, required this.event, required this.waitersInEventList})
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
          waiterIndex: index,
          waitersInEventList: waitersInEventList,
          waiterData: waitersDict[waiterId]!,
          event: event,
        );
      },
    );
  }

  Widget buildEmptyWaiters(BuildContext context) {
    Map<String, ParseModelPhotos> waitersDict = FilterModels.instance.getWaitersDict(context, event.restaurantId);
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          List<String> unselectedWaiterIds =
              FilterUtils.instance.getUnselectedWaiterIds(List.from(waitersDict.keys), event);
          AppNavigator.popFullScreen(
            context,
            SelectWaiterProvider(),
            SelectWaiterScreenObject(event: event, unselectedWaiterIds: unselectedWaiterIds),
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
