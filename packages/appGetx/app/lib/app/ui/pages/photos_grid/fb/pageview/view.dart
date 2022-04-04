import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/photos_grid/fb/widget/top_base_user_view.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class FBPhotosPageView extends GetWidget<FBPhotosPageViewController> {
  const FBPhotosPageView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    return Stack(
      children: [
        buildPhotosPageView(context),
        if (controller.state.showInfoPanel.value) _buildFg(context)
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

  Widget _buildCustomPlaceHolder() {
    return Center(
      child: Container(
        width: Get.width,
        height: 300,
        color: const Color(0xFF584b59),
      ),
    );
  }

  Widget _buildCurrentImage(int index) {
    String photoId = List.from(controller.state.photosDict.keys)[index];
    ParseModelPhotos? photo = controller.state.photosDict[photoId];
    return Container(
      color: Colors.black,
      width: Get.width,
      height: Get.height,
      child: PhotoBaseView(
        photo: photo!,
        fit: BoxFit.fitWidth,
        customPlaceHolder: _buildCustomPlaceHolder(),
      ),
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
          padding:
              const EdgeInsets.only(left: 16, right: 16, top: 18, bottom: 48),
          child: SingleChildScrollView(
            child: Text(
              note!,
              style: const TextStyle(color: Colors.white),
            ),
          )),
    );
  }

  Widget _buildFg(BuildContext context) {
    ParseModelPhotos? photo = controller.state.selectedPhoto();
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        TopBaseUserView(
          showEditBtn: controller.showEditPhotoBtn(),
          onEditPress: controller.onEditPress,
          onTapDelete: () {
            controller.onDeleteFBPhotoPress(context);
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
