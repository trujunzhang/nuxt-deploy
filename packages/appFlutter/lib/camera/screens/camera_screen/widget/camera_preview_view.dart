import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

import 'no_camera.dart';

class CameraPreviewView extends StatefulWidget {
  CameraPreviewView({Key key, this.cameraController}) : super(key: key);

  final CameraController cameraController;

  @override
  _CameraPreviewViewState createState() => _CameraPreviewViewState();
}

class _CameraPreviewViewState extends State<CameraPreviewView> {
  @override
  Widget build(BuildContext context) {
    CameraController cameraController = widget.cameraController;
    if (cameraController == null || !cameraController.value.isInitialized) {
      return NoCamera();
    }

    final size = MediaQuery.of(context).size;
    return Transform.scale(
      scale: cameraController.value.aspectRatio / size.aspectRatio,
      child: Center(
        child: AspectRatio(
          aspectRatio: cameraController.value.aspectRatio,
          child: CameraPreview(cameraController),
        ),
      ),
    );
  }
}
