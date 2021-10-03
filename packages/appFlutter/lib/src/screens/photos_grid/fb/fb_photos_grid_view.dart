import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';
import 'package:ieatta/util/app_navigator.dart';

class FBPhotosGridView extends StatelessWidget {
  FBPhotosGridView({Key? key, required this.photoType, required this.relatedId}) : super(key: key);

  final String relatedId;
  final PhotoType photoType;

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
        title: Text(S.of(context).photosBusinessPhotoAppBarTitleTxt),
        actions: <Widget>[],
      ),
      body: buildPhotos(context),
    );
  }

  Widget buildPhotos(BuildContext context) {
    List<ParseModelPhotos> photosList = FilterModels.instance.getPhotosList(context, relatedId, photoType);

    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return PhotosBody(
      photoList: photosList,
    );
  }
}
