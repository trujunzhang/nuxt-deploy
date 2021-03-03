import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/profile_avatar.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

class PeopleInEventItem extends StatelessWidget {
  final ParseModelPeopleInEvent peopleInEventData;
  final ParseModelUsers user;

  const PeopleInEventItem(
      {Key key, @required this.peopleInEventData, @required this.user})
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
            try {
              final firestoreDatabase =
                  Provider.of<FirestoreDatabase>(context, listen: false);
              await firestoreDatabase
                  .deletePeopleInEvent(peopleInEventData); // For Restaurant.
            } catch (e) {}
            ToastUtils.showToast(AppLocalizations.of(context)
                .translate("peopleInEventDeleteSuccess"));
          },
        ),
      ],
    );
  }

  Widget _buildBody(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: ListTile(
          onTap: () {
            Navigator.of(context).pushNamed(Routes.detail_people_in_event,
                arguments: peopleInEventData);
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
