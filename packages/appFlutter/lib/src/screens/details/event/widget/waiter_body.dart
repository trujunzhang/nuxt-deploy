import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';

import 'waiter_item.dart';

class WaiterBody extends StatelessWidget {
  final List<ParseModelPhotos> waitersList;
  final ParseModelEvents event;

  const WaiterBody({Key key, @required this.waitersList, @required this.event})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (event.waiters.length == 0) {
      return buildEmptyWaiters(context);
    }
    return buildwaitersListView();
  }

  ParseModelPhotos filterWaiter(String waiterId) {
    for (ParseModelPhotos e in waitersList) {
      if (e.uniqueId == waiterId) {
        return e;
      }
    }
  }

  Widget buildwaitersListView() {
    return ListView.builder(
      itemCount: event.waiters.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        return WaiterItem(
          photoData: filterWaiter(event.waiters[index]),
        );
      },
    );
  }

  Widget buildEmptyWaiters(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          Navigator.of(context).pushNamed(Routes.app_camera,
              arguments: CameraScreenObject(
                  photoType: PhotoType.Waiter, relatedId: event.restaurantId));
        },
        child: Icon(
          Icons.add_a_photo,
          color: Colors.blueGrey,
          size: 50,
        ),
      ),
    ));
  }
}
