import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';

import '../index.dart';

class WaiterItem extends StatelessWidget {
  DetailEventController controller = Get.find<DetailEventController>();
  final int waiterIndex;
  final List<ParseModelPhotos> waitersInEventList;
  final ParseModelPhotos waiterData;

  WaiterItem(
      {Key? key,
      required this.waiterData,
      required this.waiterIndex,
      required this.waitersInEventList})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: InkWell(
              onTap: () {
                controller.onWaiterItemClick(context, waiterIndex);
              },
              child: _buildItem(context))),
    );
  }

  Widget _buildBody(BuildContext context) {
    return PhotoBaseView(photoData: waiterData);
  }

  Widget _buildItem(BuildContext context) {
    return Slidable(
      key: Key(waiterData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.35,
      child: _buildBody(context),
      secondaryActions: <Widget>[
        IconSlideAction(
          caption: 'Delete',
          color: Colors.red,
          icon: Icons.delete,
          onTap: () async {
            await controller.onDeleteWaiterIconPress(context, waiterData);
          },
        ),
      ],
    );
  }
}
