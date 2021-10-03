import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/screens/details/detail_router.dart';
import 'package:ieatta/util/toast_utils.dart';
import 'package:provider/provider.dart';

class EventItem extends StatelessWidget {
  final ParseModelEvents eventData;

  const EventItem({Key? key, required this.eventData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Slidable(
      key: Key(eventData.uniqueId),
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
              await firestoreDatabase.deleteEvent(eventData); // For Restaurant.
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
            NavigatorUtils.push(context, '${DetailRouter.detailEventPage}?${ParamsHelper.ID}=${eventData.uniqueId}');
          },
          leading: Icon(Icons.event),
          trailing: Icon(Icons.keyboard_arrow_right),
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
