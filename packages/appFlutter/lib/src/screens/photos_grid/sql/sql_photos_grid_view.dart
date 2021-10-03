import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/screens/photos_grid/sql/sql_photos_pageview.dart';
import 'package:ieatta/util/app_navigator.dart';

class SqlPhotosGridView extends StatefulWidget {
  SqlPhotosGridView({Key? key}) : super(key: key);

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
            AppNavigator.goBack(context);
          },
        ),
        title: Text(S.of(context).photosLocalAppBarTitleTxt),
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
      physics: ScrollPhysics(),
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
        AppNavigator.popFullScreen(
            context, SqlPhotosPageView(), SqlPhotosPageViewObject(photos: photos, selectedIndex: index));
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: buildLocalImageView(photo.offlinePath),
      ),
    );
  }
}
