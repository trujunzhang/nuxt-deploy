import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/navigate_helper.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';
import 'package:ieatta/util/app_navigator.dart';

import 'photo_view.dart';

class PhotosBody extends StatelessWidget {
  final List<ParseModelPhotos> photosList;
  final PhotoType photoType;
  final String relatedId;

  const PhotosBody({Key? key, required this.photosList, required this.photoType, required this.relatedId})
      : super(key: key);

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
            AppNavigator.popFullScreen(
                context, FBPhotosPageView(), FBPhotosPageViewObject(photos: photosList, selectedIndex: index));
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
          PhotoNavigatorHelper.pop(context, photoType: photoType, relatedId: relatedId);
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
