import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/screens/photos_grid/sql/sql_photos_pageview.dart';

class SqlPhotosGridView extends StatefulWidget {
  SqlPhotosGridView({Key key}) : super(key: key);

  @override
  _SqlPhotosGridViewState createState() => _SqlPhotosGridViewState();
}

class _SqlPhotosGridViewState extends State<SqlPhotosGridView> {
  List<SqlPhotos> photos = [];
  bool isLoading = true;

  @override
  void initState() {
    readPhotosFromSqlite();
    super.initState();
  }

  readPhotosFromSqlite() async {
    photos = await SqlPhotos.readPhotos();
    setState(() {
      photos = photos;
      isLoading = false;
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
            .translate("photosLocalAppBarTitleTxt")),
        actions: <Widget>[],
      ),
      body: buildPhotos(context),
    );
  }

  Widget buildPhotos(BuildContext context) {
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }
    if (photos.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: NeverScrollableScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photos.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        return buildGridItem(index);
      },
    );
  }

  Widget buildGridItem(int index) {
    SqlPhotos photo = photos[index];
    return InkWell(
      onTap: () {
        Navigator.of(context).pushNamed(Routes.local_photos_pageview,
            arguments:
                SqlPhotosPageViewObject(photos: photos, selectedIndex: index));
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: buildLocalImageView(photo.offlinePath),
      ),
    );
  }
}
