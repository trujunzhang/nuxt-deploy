import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';
import 'package:ieatta/util/app_navigator.dart';

class UserPhotos extends StatelessWidget {
  UserPhotos({Key? key, required this.userId}) : super(key: key);

  final String userId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).userMenuPhotosAppBarTitle),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPhotos> photosList = FilterModels.instance.getPhotosListByUser(context, userId);

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
