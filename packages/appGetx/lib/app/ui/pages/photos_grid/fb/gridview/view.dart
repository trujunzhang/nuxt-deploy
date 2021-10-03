import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/photos_grid_body.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class FBPhotosGridViewPage extends GetWidget<FBPhotosGridViewController> {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).photosBusinessPhotoAppBarTitleTxt),
          leadingType: AppBarBackType.Back,
        ),
        body: buildPhotos(context));
  }

  Widget buildPhotos(BuildContext context) {
    List<ParseModelPhotos> photosList = controller.state.photosList.value;

    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return PhotosGridBody(
      photoList: photosList,
      relatedId: controller.relatedId!,
      photoType: controller.photoType,
    );
  }
}
