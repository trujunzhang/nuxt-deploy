import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/helpers/images/photo.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class SqlPhotosGridViewPage extends GetWidget<SqlPhotosGridViewController> {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).photosLocalAppBarTitleTxt),
          leadingType: AppBarBackType.Back,
        ),
        body: Obx(() => buildPhotos(context)));
  }

  Widget buildPhotos(BuildContext context) {
    bool isLoading = controller.state.isLoading.value;
    List<SqlPhotos> photosList = controller.state.photosList.value;
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }
    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        return buildGridItem(context, photosList[index], index);
      },
    );
  }

  Widget buildGridItem(BuildContext context, SqlPhotos photo, int index) {
    return InkWell(
      onTap: () {
        controller.onPhotoPressed(context, index);
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: buildLocalImageView(photo.offlinePath),
      ),
    );
  }
}
