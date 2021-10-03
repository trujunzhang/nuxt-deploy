import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../Camera_object.dart';
import 'index.dart';
import 'widget/camera_options.dart';
import 'widget/camera_uploading_panel.dart';

class TakeCameraPage extends GetWidget<TakeCameraController> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Positioned(
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          child: Center(
            child: CameraAwesome(
              // selectDefaultSize: (availableSizes) {
              //   this._availableSizes = availableSizes;
              //   return availableSizes[0];
              // },
              // selectDefaultSize: (List<Size> availableSizes) => Size(
              //     Get.width,
              //     MediaQuery.of(context).size.height),
              selectDefaultSize: (List<Size> availableSizes) =>
                  // Size(1920, 1080),
                  Size(1024, 768),
              captureMode: controller.captureMode,
              photoSize: controller.photoSize,
              sensor: controller.sensor,
              // fitted: true,
            ),
          ),
        ),
        CameraOptions(),
        (controller.state.cameraPanelType == CAMERA_PANEL.PANEL_UPLOADING)
            ? CameraUploadingPanel()
            : SizedBox.shrink() // option
      ],
    );
  }
}
