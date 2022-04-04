import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/photos_grid_body.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class FBPhotosGridViewPage extends GetWidget<FBPhotosGridViewController> {
  const FBPhotosGridViewPage({Key? key}) : super(key: key);

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
    List<ParseModelPhotos> photosList = controller.state.photosList;

    if (photosList.isEmpty) {
      return const Center(
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
