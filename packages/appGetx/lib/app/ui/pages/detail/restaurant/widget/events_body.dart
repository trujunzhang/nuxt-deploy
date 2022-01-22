import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

import '../index.dart';
import 'event_item.dart';

class EventsBody extends StatefulWidget {
  final String tag;

  const EventsBody({Key? key, required this.tag}) : super(key: key);

  @override
  _EventsBodyState createState() => _EventsBodyState();
}

class _EventsBodyState extends State<EventsBody> {
  late DetailRestaurantController controller;

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
    List<ParseModelEvents> eventsList = controller.state.eventsList;
    if (eventsList.isEmpty) {
      return Container(
        height: 60,
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: const Center(
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
        tag: widget.tag,
        eventData: eventsList[i],
      ));
      if (i < eventsList.length - 1) {
        list.add(const Divider(
          height: 1,
        ));
      }
    }
    return Column(children: list);
  }
}
