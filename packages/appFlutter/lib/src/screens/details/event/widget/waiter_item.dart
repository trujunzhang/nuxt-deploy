import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';

class WaiterItem extends StatelessWidget {
  final ParseModelPhotos photoData;

  const WaiterItem({Key key, this.photoData}) : super(key: key);

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
              // Navigator.of(context).pushNamed(Routes.online_photos_pageview,
              //     arguments: FBPhotosPageViewObject(
              //         photos: photosList, selectedIndex: index));
            },
            child: PhotoBaseView(photoData: photoData),
          )),
    );
  }
}
