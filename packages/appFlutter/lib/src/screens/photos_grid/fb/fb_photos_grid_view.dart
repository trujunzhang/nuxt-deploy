import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';

class FBPhotosGridViewObject {
  final String relatedId;
  final PhotoType photoType;

  FBPhotosGridViewObject({@required this.relatedId, @required this.photoType});
}

class FBPhotosGridView extends StatefulWidget {
  FBPhotosGridView({Key key}) : super(key: key);

  @override
  _FBPhotosGridViewState createState() => _FBPhotosGridViewState();
}

class _FBPhotosGridViewState extends State<FBPhotosGridView> {
  FBPhotosGridViewObject gridViewObject;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final FBPhotosGridViewObject _gridViewObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      gridViewObject = _gridViewObject;
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
    List<ParseModelPhotos> photosList = FilterModels.instance.getPhotosList(
        context, gridViewObject.relatedId, gridViewObject.photoType);

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
