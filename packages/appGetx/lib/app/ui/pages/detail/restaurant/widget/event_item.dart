import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import '../index.dart';

class EventItem extends StatelessWidget {
  DetailRestaurantController controller =
      Get.find<DetailRestaurantController>();
  final ParseModelEvents eventData;

  EventItem({Key? key, required this.eventData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Slidable(
      key: Key(eventData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.25,
      child: _buildItem(context),
      secondaryActions: <Widget>[
        IconSlideAction(
          caption: 'Delete',
          color: Colors.red,
          icon: Icons.delete,
          onTap: () async {
            await controller.onDeleteEventIconPress(context, eventData);
          },
        ),
      ],
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
                arguments: {ParamsHelper.ID: eventData.uniqueId});
          },
          leading: Icon(Icons.event,
              color: Get.isDarkMode ? Colors.white : Colors.grey),
          trailing: Icon(Icons.keyboard_arrow_right,
              color: Get.isDarkMode ? Colors.white : Colors.grey),
          title: Text(eventData.displayName),
          subtitle: Text(
            eventData.want,
            overflow: TextOverflow.ellipsis,
            maxLines: 2,
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
