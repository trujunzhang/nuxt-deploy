import 'package:flutter/material.dart';
import 'package:app_models/app_models.dart';
import 'package:doc_widget/doc_widget.dart';

import 'profile_avatar.dart';
import 'themed_box.dart';

@docWidget
class PeopleInEventItem extends StatelessWidget {
  const PeopleInEventItem({
    Key? key,
    required this.onTapItem,
    required this.peopleInEvent,
    this.user,
  }) : super(key: key);

  final ParseModelPeopleInEvent peopleInEvent;
  final ParseModelUsers? user;
  final GestureTapCallback? onTapItem;

  @override
  Widget build(BuildContext context) {
    return ThemedBox(
      child: ListTile(
        onTap: onTapItem,
        leading: ProfileAvatar(avatarUrl: user!.originalUrl),
        trailing: const Icon(Icons.keyboard_arrow_right),
        title: Text(user!.username!),
        subtitle: Text(
          '${peopleInEvent.recipes!.length} Recipes Ordered',
          style: const TextStyle(color: Colors.grey),
        ),
      ),
    );
  }
}
