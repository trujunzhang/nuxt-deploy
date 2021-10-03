import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:ieatta/util/toast_utils.dart';
import 'package:provider/provider.dart';

class WaiterItem extends StatelessWidget {
  final int waiterIndex;
  final List<ParseModelPhotos> waitersInEventList;
  final ParseModelPhotos waiterData;
  final ParseModelEvents event;

  const WaiterItem(
      {Key? key,
      required this.waiterData,
      required this.waiterIndex,
      required this.waitersInEventList,
      required this.event})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 6.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: InkWell(
              onTap: () {
                AppNavigator.popFullScreen(context, FBPhotosPageView(),
                    FBPhotosPageViewObject(photos: waitersInEventList, selectedIndex: waiterIndex));
              },
              child: _buildItem(context))),
    );
  }

  Widget _buildBody(BuildContext context) {
    return PhotoBaseView(photoData: waiterData);
  }

  Widget _buildItem(BuildContext context) {
    return Slidable(
      key: Key(waiterData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.35,
      child: _buildBody(context),
      secondaryActions: <Widget>[
        IconSlideAction(
          caption: 'Delete',
          color: Colors.red,
          icon: Icons.delete,
          onTap: () async {
            ParseModelEvents nextModel = ParseModelEvents.removeWaiter(
              model: event,
              waiterId: waiterData.uniqueId,
            );
            try {
              final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
              await firestoreDatabase.setEvent(model: nextModel); // For event.
            } catch (e) {}
            Toast.show(S.of(context).ModelItemsDeleteSuccess);
          },
        ),
      ],
    );
  }
}
