import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/logic/photos_results.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';
import 'package:provider/provider.dart';
import 'fb_photos_pageview.dart';

class FBPhotosGridView extends StatefulWidget {
  FBPhotosGridView({Key key}) : super(key: key);

  @override
  _FBPhotosGridViewState createState() => _FBPhotosGridViewState();
}

class _FBPhotosGridViewState extends State<FBPhotosGridView> {
  ParseModelRestaurants restaurant;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final ParseModelRestaurants _restaurant =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      restaurant = _restaurant;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.cancel),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: Text(AppLocalizations.of(context)
            .translate("photosBusinessPhotoAppBarTitleTxt")),
        actions: <Widget>[],
      ),
      body: buildPhotos(context),
    );
  }

  Widget buildPhotos(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);

    return StreamBuilder(
        stream: firestoreDatabase.photoStream(restaurant: restaurant),
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {}
          if (!fbSnapshot.hasData) {
            return Container();
          }

          List<ParseModelPhotos> photos = parsePhotosFilterByRestaurant(
              datas: fbSnapshot.data.documents, restaurant: restaurant);
          if (photos.length == 0) {
            return Center(
              child: Text('No Data'),
            );
          }
          return PhotosBody(
            photoList: photos,
          );
        });
  }
}
