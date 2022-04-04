import 'package:app_language/langs/l10n.dart';
import 'package:app_sql/app_sql.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class SqlPhotosGridViewPage extends GetWidget<SqlPhotosGridViewController> {
  const SqlPhotosGridViewPage({Key? key}) : super(key: key);

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
    List<SqlPhoto> photosList = controller.state.photosList;
    if (isLoading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (photosList.isEmpty) {
      return const Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: const ScrollPhysics(),
      primary: false,
      padding: const EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        return buildGridItem(context, photosList[index], index);
      },
    );
  }

  Widget buildGridItem(BuildContext context, SqlPhoto photo, int index) {
    return InkWell(
      onTap: () {
        controller.onPhotoPressed(context, index);
      },
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: buildLocalImageView(photo.offlinePath),
      ),
    );
  }
}
