import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

import '../index.dart';
import 'waiter_item.dart';

class WaiterBody extends GetWidget<DetailEventController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    if (controller.state.waiters.length == 0) {
      return buildEmptyWaiters(context);
    }
    return buildWaitersListView();
  }

  Widget buildWaitersListView() {
    List<String> waiters = controller.state.waiters;
    Map<String, ParseModelPhotos> waitersDict = controller.state.waitersDict;
    List<ParseModelPhotos> waitersInEventList =
        controller.state.waitersInEventList;
    return ListView.builder(
      itemCount: waiters.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        String waiterId = waiters[index];
        return WaiterItem(
            waiterIndex: index,
            waitersInEventList: waitersInEventList,
            waiterData: waitersDict[waiterId]!);
      },
    );
  }

  Widget buildEmptyWaiters(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          controller.onAddWaiterIconPress(context);
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
