import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/common/langs/l10n.dart';

import '../index.dart';

class CameraUploadingPanel extends StatefulWidget {
  @override
  _CameraUploadingPanelState createState() => _CameraUploadingPanelState();
}

class _CameraUploadingPanelState extends State<CameraUploadingPanel> {
  TakeCameraController controller = Get.find();

  @override
  void initState() {
    super.initState();

    controller.uploadImageAsUserPhotoUrl(context);
  }

  @override
  Widget build(BuildContext context) {
    var flatButton = TextButton(
        child: Text(
          S.of(context).photosUploading,
          style: TextStyle(
            color: Color(0xff0073bb),
          ),
        ),
        onPressed: () async {});
    return Container(
      color: Colors.white,
      child: Center(child: flatButton),
    );
  }
}
