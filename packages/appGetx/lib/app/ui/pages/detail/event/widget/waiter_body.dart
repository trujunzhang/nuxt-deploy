import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

import '../index.dart';
import 'waiter_item.dart';

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
    return buildWaitersListView();
  }

  Widget buildWaitersListView() {
    List<ParseModelPhotos> waiters = controller.state.waitersInEvent;
    return ListView.builder(
      itemCount: waiters.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        return WaiterItem(
          waiterData: waiters[index],
          onWaiterItemClick: () {
            controller.onWaiterItemClick(context, index);
          },
          onDeleteWaiterIconPress: (BuildContext context) async {
            await controller.onDeleteWaiterIconPress(context, waiters[index]);
          },
        );
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
