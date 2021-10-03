// enum CAMERA_EVENT {
//   RESTAURANT,
//   RECIPE,
//   USER
// }

import 'package:ieatta/app/data/enum/fb_collections.dart';

enum CAMERA_PANEL { PANEL_NORMAL, PANEL_UPLOADING }

class CameraScreenObject {
  final PhotoType photoType;
  final String relatedId;

  CameraScreenObject({required this.photoType, required this.relatedId});
}
