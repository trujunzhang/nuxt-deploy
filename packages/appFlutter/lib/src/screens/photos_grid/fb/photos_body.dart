import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/util/app_navigator.dart';

import 'fb_photos_pageview.dart';

class PhotosBody extends StatefulWidget {
  final List<ParseModelPhotos> photoList;

  PhotosBody({Key? key, required this.photoList}) : super(key: key);

  @override
  _PhotosBodyState createState() => _PhotosBodyState();
}

class _PhotosBodyState extends State<PhotosBody> {
  Widget _buildGridItem(List<ParseModelPhotos> photos, int index) {
    ParseModelPhotos photo = photos[index];
    return InkWell(
      onTap: () {
        AppNavigator.popFullScreen(
            context, FBPhotosPageView(), FBPhotosPageViewObject(photos: photos, selectedIndex: index));
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: photo, fit: BoxFit.cover),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: widget.photoList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        return _buildGridItem(widget.photoList, index);
      },
    );
  }
}
