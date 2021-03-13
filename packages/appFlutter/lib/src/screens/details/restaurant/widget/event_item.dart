import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

class EventItem extends StatelessWidget {
  final ParseModelEvents eventData;

  const EventItem({Key key, @required this.eventData}) : super(key: key);

  void _showSnackBar(BuildContext context, String text) {
    Scaffold.of(context).showSnackBar(SnackBar(content: Text(text)));
  }

  // Scaffold
  //     .of(context)
  //     .showSnackBar(SnackBar(content: Text("Event ${eventData.displayName} deleted!")));
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
              final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
              await firestoreDatabase
                  .deleteEvent(eventData); // For Restaurant.
            } catch (e) {}
            ToastUtils.showToast(AppLocalizations.of(context)
                .translate("ModelItemsDeleteSuccess"));
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
            Navigator.of(context)
                .pushNamed(Routes.detail_event, arguments: eventData);
          },
          leading: Icon(Icons.event),
          trailing: Icon(Icons.keyboard_arrow_right),
          title: Text(eventData.displayName),
          subtitle: Text(
            eventData.want.length <= 35
                ? eventData.want
                : eventData.want.substring(0, 35),
            overflow: TextOverflow.ellipsis,
            style: TextStyle(color: Colors.grey),
          ),
        ));
  }
}
