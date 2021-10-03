import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

import '../index.dart';
import 'event_item.dart';

class EventsBody extends GetWidget<DetailRestaurantController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
    List<ParseModelEvents> eventsList = controller.state.eventsList;
    if (eventsList.length == 0) {
      return Container(
        height: 60,
        // decoration: new BoxDecoration(color: Colors.white),
        child: Center(
          child: Text('no events'),
        ),
      );
    }
    return buildEventsListView();
  }

  Widget buildEventsListView() {
    List<ParseModelEvents> eventsList = controller.state.eventsList;
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
}
