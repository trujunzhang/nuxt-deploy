import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/photos_grid_body.dart';

import '../index.dart';

class UserPhotos extends GetWidget<UserProfileController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPhotos> photosList = controller.state.photosList;

    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return PhotosGridBody(
      photoList: photosList,
      relatedId: controller.state.detailModel!.uid,
      photoType: PhotoType.User,
    );
  }
}
