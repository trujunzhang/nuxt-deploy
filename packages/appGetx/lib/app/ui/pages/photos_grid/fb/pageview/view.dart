import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/pages/photos_grid/fb/widget/top_base_user_view.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class FBPhotosPageView extends GetWidget<FBPhotosPageViewController> {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(body: Container(child: Obx(() => _buildBody(context))));
  }

  Widget _buildBody(BuildContext context) {
    return Stack(
      children: [
        buildPhotosPageView(context),
        if (controller.state.showInfoPanel.value) _buildFg()
      ],
    );
  }

  Widget buildPhotosPageView(BuildContext context) {
    return PageView.builder(
      controller: controller.pageController,
      onPageChanged: (int index) {
        controller.state.selectedIndex.value = index;
      },
      itemCount: controller.state.photosCount,
      itemBuilder: (context, index) {
        return Stack(
          children: <Widget>[
            _buildCurrentImage(index),
            _buildTouchPanel(),
          ],
        );
      },
    );
  }

  Widget _buildCurrentImage(int index) {
    String photoId = List.from(controller.state.photosDict.keys)[index];
    ParseModelPhotos? photo = controller.state.photosDict[photoId];
    return Container(
      color: Colors.black,
      width: Get.width,
      height: Get.height,
      child: PhotoBaseView(photoData: photo!, fit: BoxFit.fitWidth),
    );
  }

  Widget _buildTouchPanel() {
    return InkWell(
        onTap: () {
          controller.state.toggleFg();
        },
        child: Container());
  }

  Widget _buildPhotoInfo() {
    ParseModelPhotos? photo = controller.state.selectedPhoto();
    String? note = photo!.extraNote;
    // var note = "The Firebase different prototype and test environments, anything from one-off prototyping sessions to production-scale continuous integration workflows.";

    if (note == "") {
      return Container();
    }
    return Container(
      width: Get.width,
      color: Colors.black,
      child: Padding(
          padding: EdgeInsets.only(left: 16, right: 16, top: 18, bottom: 48),
          child: SingleChildScrollView(
            child: Text(
              note!,
              style: TextStyle(color: Colors.white),
            ),
          )),
    );
  }

  Widget _buildFg() {
    ParseModelPhotos? photo = controller.state.selectedPhoto();
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        TopBaseUserView(
          showEditBtn: controller.showEditPhotoBtn(),
          onEditPress: () {
            Get.toNamed(
                '${Routes.EDIT_PHOTO}?${ParamsHelper.ID}=${photo!.uniqueId}');
          },
          user: photo!,
          selectedIndex: controller.state.selectedIndex.value,
          totalCount: controller.state.photosCount,
        ),
        _buildPhotoInfo()
      ],
    );
  }
}