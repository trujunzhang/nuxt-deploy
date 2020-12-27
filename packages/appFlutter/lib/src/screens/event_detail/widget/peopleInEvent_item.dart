import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/profile_avatar.dart';

class PeopleInEventItem extends StatelessWidget {
  final ParseModelPeopleInEvent peopleInEventData;
  final ParseModelUsers user;

  const PeopleInEventItem(
      {Key key, @required this.peopleInEventData, @required this.user})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: ListTile(
          onTap: () {
            Navigator.of(context)
                .pushNamed(Routes.detail_people_in_event, arguments: peopleInEventData);
          },
          leading: ProfileAvatar(avatarUrl: user.originalUrl),
          trailing: Icon(Icons.keyboard_arrow_right),
          title: Text(user.username),
          subtitle: Text(
            peopleInEventData.recipes.length.toString() + ' Recipes Ordered',
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
