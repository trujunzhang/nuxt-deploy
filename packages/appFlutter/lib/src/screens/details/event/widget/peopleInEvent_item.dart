import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/profile_avatar.dart';
import 'package:ieatta/src/screens/details/detail_router.dart';
import 'package:ieatta/util/toast_utils.dart';
import 'package:provider/provider.dart';

class PeopleInEventItem extends StatelessWidget {
  final ParseModelPeopleInEvent peopleInEventData;
  final ParseModelUsers? user;

  const PeopleInEventItem({Key? key, required this.peopleInEventData, required this.user}) : super(key: key);

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
              final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
              await firestoreDatabase.deletePeopleInEvent(peopleInEventData); // For Restaurant.
            } catch (e) {}
            Toast.show(S.of(context).ModelItemsDeleteSuccess);
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
            NavigatorUtils.push(
                context, '${DetailRouter.detailPeopleInEventPage}?${ParamsHelper.ID}=${peopleInEventData.uniqueId}');
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
