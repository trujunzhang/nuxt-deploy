import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';

import 'fb_photos_pageview.dart';

class PhotosBody extends StatefulWidget {
  final List<ParseModelPhotos> photoList;

  PhotosBody({Key key, @required this.photoList}) : super(key: key);

  @override
  _PhotosBodyState createState() => _PhotosBodyState();
}

class _PhotosBodyState extends State<PhotosBody> {
  Widget buildGridItem(List<ParseModelPhotos> photos, int index) {
    ParseModelPhotos photo = photos[index];
    return InkWell(
      onTap: () {
        Navigator.of(context).pushNamed(Routes.online_photos_pageview,
            arguments:
                FBPhotosPageViewObject(photos: photos, selectedIndex: index));
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: buildPhotoImage(photo),
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
        return buildGridItem(widget.photoList, index);
      },
    );
  }
}
