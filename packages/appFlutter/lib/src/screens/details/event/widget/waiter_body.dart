import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';

import 'waiter_item.dart';

class WaiterBody extends StatelessWidget {
  final List<ParseModelPhotos> photosList;
  final ParseModelEvents event;

  const WaiterBody({Key key, @required this.photosList, @required this.event})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (photosList.length == 0) {
      return buildEmptyPhotos(context);
    }
    return buildPhotosListView();
  }

  ParseModelPhotos filterWaiter(String waiterId) {
    for (ParseModelPhotos e in photosList) {
      if (e.uniqueId == waiterId) {
        return e;
      }
    }
  }

  Widget buildPhotosListView() {
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

  Widget buildEmptyPhotos(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          Navigator.of(context).pushNamed(Routes.app_camera,
              arguments: CAMERA_EVENT.TAKE_FOR_RESTAURANT);
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
