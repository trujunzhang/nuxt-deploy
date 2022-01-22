import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import '../index.dart';

class EventItem extends StatefulWidget {
  final String tag;
  final ParseModelEvents eventData;

  const EventItem({Key? key, required this.tag, required this.eventData})
      : super(key: key);

  @override
  _EventItemState createState() => _EventItemState();
}

class _EventItemState extends State<EventItem> {
  late DetailRestaurantController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return SlidableRow(
      rowKey: widget.eventData.uniqueId,
      row: _buildItem(context),
      onPress: (BuildContext context) async {
        await controller.onDeleteEventIconPress(context, widget.eventData);
      },
    );
  }

  Widget _buildItem(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: ListTile(
          onTap: () {
            Get.toNamed(Routes.DETAIL_EVENT,
                arguments: {ParamsHelper.ID: widget.eventData.uniqueId});
          },
          leading: Icon(Icons.event,
              color: Get.isDarkMode ? Colors.white : Colors.grey),
          trailing: Icon(Icons.keyboard_arrow_right,
              color: Get.isDarkMode ? Colors.white : Colors.grey),
          title: Text(widget.eventData.displayName),
          subtitle: Text(
            widget.eventData.want,
            overflow: TextOverflow.ellipsis,
            maxLines: 2,
            style: const TextStyle(color: Colors.grey),
          ),
        ));
  }
}
