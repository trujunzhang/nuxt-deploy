import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mix/mix.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import '../index.dart';

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
      return Box(
        mix: Mix(
          height(60),
          bgColor($onSecondary),
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
      ParseModelEvents event = eventsList[i];
      list.add(SlidableRow(
        rowKey: event.uniqueId!,
        row: EventItem(
          event: event,
          onTapItem: () {
            Get.toNamed(Routes.DETAIL_EVENT,
                arguments: {ParamsHelper.ID: event.uniqueId});
          },
        ),
        onPress: (BuildContext context) async {
          await controller.onDeleteFBEventIconPress(context, event);
        },
      ));
      if (i < eventsList.length - 1) {
        list.add(
          const Divider(
            height: 1,
          ),
        );
      }
    }
    return Column(children: list);
  }
}
