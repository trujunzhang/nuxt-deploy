import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/util/app_navigator.dart';

import 'camera_screen/take_camera_screen.dart';
import 'Camera_object.dart';

class PhotoNavigatorHelper {
  static Future pop(BuildContext context, {required PhotoType photoType, required String relatedId}) {
    return AppNavigator.popFullScreen(
        context, TakeCameraScreen(), CameraScreenObject(photoType: photoType, relatedId: relatedId));
  }
}
