import 'package:app_sql/app_sql.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/photos_grid/sql/pageview/view.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class SqlPhotosGridViewController extends GetxController {
  final state = SqlPhotosGridViewState();

  @override
  onInit() async {
    await fetchData();

    super.onInit();
  }

  fetchData() async {
    // List
    state.isLoading.value = true;
    state.photosList.value = await SqlPhotos.readPhotos();
    state.isLoading.value = false;
  }

  @override
  void onReady() {}

//==========================================================
// UI Events
//==========================================================
  onPhotoPressed(BuildContext context, int index) {
    List<SqlPhotos> photos = state.photosList.value;
    AppNavigator.popFullScreen(context, SqlPhotosPageView(),
        SqlPhotosPageViewObject(photos: photos, selectedIndex: index));
  }
}
