import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';

class WaiterItem extends StatelessWidget {
  final int waiterIndex;
  final List<ParseModelPhotos> waitersInEventList;
  final ParseModelPhotos waiterData;

  const WaiterItem(
      {Key key,
      @required this.waiterData,
      @required this.waiterIndex,
      @required this.waitersInEventList})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 4.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: InkWell(
            onTap: () {
              Navigator.of(context).pushNamed(Routes.online_photos_pageview,
                  arguments: FBPhotosPageViewObject(
                      photos: waitersInEventList, selectedIndex: waiterIndex));
            },
            child: PhotoBaseView(photoData: waiterData),
          )),
    );
  }
}
