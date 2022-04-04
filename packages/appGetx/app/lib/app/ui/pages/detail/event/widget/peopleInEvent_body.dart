import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:get/get.dart';
import 'package:mix/mix.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import '../index.dart';

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
      return Box(
        mix: Mix(
          height(60),
          bgColor($onSecondary),
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
      list.add(SlidableRow(
        rowKey: peopleInEvent.uniqueId!,
        row: PeopleInEventItem(
          peopleInEvent: peopleInEvent,
          user: user,
          onTapItem: () {
            Get.toNamed(Routes.DETAIL_PEOPLE_IN_EVENT,
                arguments: {ParamsHelper.ID: peopleInEvent.uniqueId});
          },
        ),
        onPress: (BuildContext context) async {
          await controller.onDeleteFBPeopleInEventIconPress(
              context, peopleInEvent);
        },
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
