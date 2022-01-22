import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/profile_avatar.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import '../index.dart';

class PeopleInEventItem extends StatefulWidget {
  final String tag;

  final ParseModelPeopleInEvent peopleInEventData;
  final ParseModelUsers? user;

  const PeopleInEventItem(
      {Key? key,
      required this.tag,
      required this.peopleInEventData,
      required this.user})
      : super(key: key);

  @override
  _PeopleInEventItemState createState() => _PeopleInEventItemState();
}

class _PeopleInEventItemState extends State<PeopleInEventItem> {
  late DetailEventController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return SlidableRow(
      rowKey: widget.peopleInEventData.uniqueId,
      row: _buildBody(context),
      onPress: (BuildContext context) async {
        await controller.onDeletePeopleInEventIconPress(
            context, widget.peopleInEventData);
      },
    );
  }

  Widget _buildBody(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: ListTile(
          onTap: () {
            Get.toNamed(Routes.DETAIL_PEOPLE_IN_EVENT, arguments: {
              ParamsHelper.ID: widget.peopleInEventData.uniqueId
            });
          },
          leading: ProfileAvatar(avatarUrl: widget.user!.originalUrl),
          trailing: const Icon(Icons.keyboard_arrow_right),
          title: Text(widget.user!.username),
          subtitle: Text(
            '${widget.peopleInEventData.recipes.length} Recipes Ordered',
            style: const TextStyle(color: Colors.grey),
          ),
        ));
  }
}
