import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';

import 'photo_view.dart';

class PhotosBody extends StatelessWidget {
  final List<ParseModelPhotos> photosList;

  const PhotosBody({Key key, @required this.photosList}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (photosList.length == 0) {
      return buildEmptyPhotos(context);
    }
    return buildPhotosListView();
  }

  Widget buildPhotosListView() {
    return ListView.builder(
      itemCount: photosList.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        return PhotoView(
          callback: () {
            Navigator.of(context).pushNamed(Routes.online_photos_pageview,
                arguments: FBPhotosPageViewObject(
                    photos: photosList, selectedIndex: index));
          },
          photoData: photosList[index],
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
