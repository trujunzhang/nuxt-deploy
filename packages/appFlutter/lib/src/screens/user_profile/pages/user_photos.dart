import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';

class UserPhotos extends StatefulWidget {
  UserPhotos({Key key}) : super(key: key);

  @override
  UserPhotosState createState() => UserPhotosState();
}

class UserPhotosState extends State<UserPhotos> {
  String _userId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("userMenuPhotosAppBarTitle")),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPhotos> photosList =
        FilterModels.instance.getPhotosListByUser(context, _userId);

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
