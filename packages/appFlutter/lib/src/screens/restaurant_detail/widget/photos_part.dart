import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/logic/photos_results.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';
import 'package:provider/provider.dart';

import 'photo_view.dart';

class PhotosPart extends StatefulWidget {
  PhotosPart({Key key, @required this.restaurant}) : super(key: key);

  final ParseModelRestaurants restaurant;

  @override
  _PhotosPartState createState() => _PhotosPartState();
}

class _PhotosPartState extends State<PhotosPart> {
  Widget buildPhotosListView(List<ParseModelPhotos> photoList) {
    return ListView.builder(
      itemCount: photoList.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        return PhotoView(
          callback: () {
            Navigator.of(context).pushNamed(Routes.online_photos_pageview,
                arguments: FBPhotosPageViewObject(
                    photos: photoList, selectedIndex: index));
          },
          photoData: photoList[index],
        );
      },
    );
  }

  Widget buildEmptyPhotos() {
    return Center(
      child: InkWell(
        onTap: () {
          Navigator.of(context).pushNamed(Routes.app_camera,
              arguments: CAMERA_EVENT.TAKE_FOR_RESTAURANT);
        },
        child: Icon(Icons.add_a_photo, size: 50,),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
    Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilder(
        stream: firestoreDatabase.photoStream(restaurant: widget.restaurant),
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {}
          if (!fbSnapshot.hasData) {
            return Center();
          }

          List<ParseModelPhotos> photoList = parsePhotosFilterByRestaurant(
              datas: fbSnapshot.data.documents, restaurant: widget.restaurant);

          if (photoList.length == 0) {
            return buildEmptyPhotos();
          }
          return buildPhotosListView(photoList);
        });
  }
}
