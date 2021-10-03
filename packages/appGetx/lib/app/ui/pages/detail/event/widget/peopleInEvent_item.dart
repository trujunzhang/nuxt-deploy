import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/profile_avatar.dart';

import '../index.dart';

class PeopleInEventItem extends StatelessWidget {
  DetailEventController controller = Get.find<DetailEventController>();
  final ParseModelPeopleInEvent peopleInEventData;
  final ParseModelUsers? user;

  PeopleInEventItem(
      {Key? key, required this.peopleInEventData, required this.user})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Slidable(
      key: Key(peopleInEventData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.25,
      child: _buildBody(context),
      secondaryActions: <Widget>[
        IconSlideAction(
          caption: 'Delete',
          color: Colors.red,
          icon: Icons.delete,
          onTap: () async {
            await controller.onDeletePeopleInEventIconPress(
                context, peopleInEventData);
          },
        ),
      ],
    );
  }

  Widget _buildBody(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.primaryVariant,
        ),
        child: ListTile(
          onTap: () {
            Get.toNamed(Routes.DETAIL_PEOPLE_IN_EVENT,
                arguments: {ParamsHelper.ID: peopleInEventData.uniqueId});
          },
          leading: ProfileAvatar(avatarUrl: user!.originalUrl!),
          trailing: Icon(Icons.keyboard_arrow_right),
          title: Text(user!.username),
          subtitle: Text(
            peopleInEventData.recipes.length.toString() + ' Recipes Ordered',
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
