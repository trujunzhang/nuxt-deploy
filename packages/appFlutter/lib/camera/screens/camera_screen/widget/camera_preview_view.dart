import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

import 'no_camera.dart';

class CameraPreviewView extends StatefulWidget {
  CameraPreviewView({Key key, this.controller}) : super(key: key);

  final CameraController controller;

  @override
  _CameraPreviewViewState createState() => _CameraPreviewViewState();
}

class _CameraPreviewViewState extends State<CameraPreviewView> {
  @override
  Widget build(BuildContext context) {
    CameraController controller = widget.controller;
    if (controller == null || !controller.value.isInitialized) {
      return NoCamera();
    }

    final size = MediaQuery.of(context).size;
    return Transform.scale(
      scale: controller.value.aspectRatio / size.aspectRatio,
      child: Center(
        child: AspectRatio(
          aspectRatio: controller.value.aspectRatio,
          child: CameraPreview(controller),
        ),
      ),
    );
  }
}
