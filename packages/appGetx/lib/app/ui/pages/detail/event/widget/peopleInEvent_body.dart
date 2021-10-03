import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

import '../index.dart';
import 'peopleInEvent_item.dart';

class PeopleInEventBody extends GetWidget<DetailEventController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPeopleInEvent> peopleInEventsList =
        controller.state.peopleInEventsList;
    if (peopleInEventsList.length == 0) {
      return Container(
        height: 60,
        decoration: new BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: Center(
          child: Text('no ordered people'),
        ),
      );
    }
    return buildPeopleInEventsListView();
  }

  Widget buildPeopleInEventsListView() {
    List<ParseModelPeopleInEvent> peopleInEventsList =
        controller.state.peopleInEventsList;
    Map<String, ParseModelUsers> usersDict = controller.usersDict;
    List<Widget> list = [];
    for (var i = 0; i < peopleInEventsList.length; i++) {
      ParseModelPeopleInEvent peopleInEvent = peopleInEventsList[i];
      ParseModelUsers? user = usersDict[peopleInEvent.userId];
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
}
