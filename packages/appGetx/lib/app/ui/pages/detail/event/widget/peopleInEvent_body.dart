import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

import '../index.dart';
import 'peopleInEvent_item.dart';

class PeopleInEventBody extends StatefulWidget {
  final String tag;

  const PeopleInEventBody({Key? key, required this.tag}) : super(key: key);

  @override
  _PeopleInEventBodyState createState() => _PeopleInEventBodyState();
}

class _PeopleInEventBodyState extends State<PeopleInEventBody> {
  late DetailEventController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPeopleInEvent> peopleInEventsList =
        controller.state.peopleInEventsList;
    if (peopleInEventsList.isEmpty) {
      return Container(
        height: 60,
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: const Center(
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
        tag: widget.tag,
        peopleInEventData: peopleInEvent,
        user: user,
      ));
      if (i < peopleInEventsList.length - 1) {
        list.add(const Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }
}
