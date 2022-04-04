import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../Camera_object.dart';

class TakeCameraState {
  /// imagePath:
  ///    example:
  ///     (android)"/data/user/0/com.example.ieatta/cache/image_picker2451588894555255495.jpg"
  ///
  Rx<ValueNotifier<CameraFlashes>> switchFlash =
      Rx<ValueNotifier<CameraFlashes>>(ValueNotifier(CameraFlashes.AUTO));
  Rx<String> imagePath = Rx<String>('');
  Rx<CAMERA_PANEL> cameraPanelType =
      Rx<CAMERA_PANEL>(CAMERA_PANEL.PANEL_NORMAL);

// Rx<CAMERA_PANEL> camera_panel = Rx<CAMERA_PANEL>(CAMERA_PANEL.PANEL_UPLOADING);

  onFlashTap() {
    switch (switchFlash.value.value) {
      case CameraFlashes.NONE:
        switchFlash.value.value = CameraFlashes.ON;
        break;
      case CameraFlashes.ON:
        switchFlash.value.value = CameraFlashes.AUTO;
        break;
      case CameraFlashes.AUTO:
        switchFlash.value.value = CameraFlashes.ALWAYS;
        break;
      case CameraFlashes.ALWAYS:
        switchFlash.value.value = CameraFlashes.NONE;
        break;
    }
  }
}
