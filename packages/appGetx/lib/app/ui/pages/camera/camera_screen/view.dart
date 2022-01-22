import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../Camera_object.dart';
import 'index.dart';
import 'widget/camera_options.dart';
import 'widget/camera_uploading_panel.dart';

class TakeCameraPage extends GetWidget<TakeCameraController> {
  const TakeCameraPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    return Stack(
      children: <Widget>[
        Positioned(
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          child: Center(
            child: CameraAwesome(
              selectDefaultSize: (List<Size> availableSizes) =>
                  // Size(1920, 1080),
                  const Size(1024, 768),
              captureMode: controller.captureMode,
              photoSize: controller.photoSize,
              sensor: controller.sensor,
              // fitted: true,
            ),
          ),
        ),
        const CameraOptions(),
        (controller.state.cameraPanelType == CAMERA_PANEL.PANEL_UPLOADING)
            ? const CameraUploadingPanel()
            : const SizedBox.shrink() // option
      ],
    );
  }
}
