import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import '../index.dart';

class WaiterBody extends StatefulWidget {
  final String tag;

  const WaiterBody({Key? key, required this.tag}) : super(key: key);

  @override
  _WaiterBodyState createState() => _WaiterBodyState();
}

class _WaiterBodyState extends State<WaiterBody> {
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
    List<ParseModelPhotos> waiters = controller.state.waitersInEvent;
    if (waiters.isEmpty) {
      return buildEmptyWaiters(context);
    }
    return buildWaitersListView(context);
  }

  Widget buildWaitersListView(BuildContext context) {
    List<ParseModelPhotos> waiters = controller.state.waitersInEvent;
    return ListView.builder(
      padding: const EdgeInsets.only(left: 6.0, right: 6.0),
      itemCount: waiters.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        ParseModelPhotos waiter = waiters[index];

        return WaiterItem(
          waiter: waiter,
          onTapItem: () {
            controller.onWaiterItemClick(context, index);
          },
          onTapDeleteIcon: () async {
            await controller.onDeleteFBWaiterIconPress(context, waiters[index]);
          },
        );

        // return SlidableRow(
        //   ratio: 0.6,
        //   rowKey: waiter.uniqueId!,
        //   row: WaiterItem(
        //     waiter: waiter,
        //     onTapItem: () {
        //       controller.onWaiterItemClick(context, index);
        //     },
        //   ),
        //   onPress: (BuildContext context) async {
        //     await controller.onDeleteFBWaiterIconPress(context, waiters[index]);
        //   },
        // );
      },
    );
  }

  Widget buildEmptyWaiters(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: controller.onAddWaiterIconPress,
        child: const Icon(
          Icons.add,
          color: Colors.deepOrangeAccent,
          size: 50,
        ),
      ),
    ));
  }
}
