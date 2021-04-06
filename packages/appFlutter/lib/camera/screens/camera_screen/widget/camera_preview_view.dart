import 'package:flutter/material.dart';
import 'package:camerawesome/camerawesome_plugin.dart';

class CameraPreviewView extends StatefulWidget {
  CameraPreviewView({Key key, this.cameraController}) : super(key: key);

  final PictureController cameraController;

  @override
  _CameraPreviewViewState createState() => _CameraPreviewViewState();
}

class _CameraPreviewViewState extends State<CameraPreviewView> {
  ValueNotifier<Sensors> _sensor = ValueNotifier(Sensors.BACK);
  ValueNotifier<Size> _photoSize = ValueNotifier(null);
  ValueNotifier<CaptureModes> _captureMode = ValueNotifier(CaptureModes.PHOTO);

  /// list of available sizes
  List<Size> _availableSizes;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      child: Center(
        child: CameraAwesome(
          selectDefaultSize: (availableSizes) {
            this._availableSizes = availableSizes;
            return availableSizes[0];
          },
          captureMode: _captureMode,
          photoSize: _photoSize,
          sensor: _sensor,
          onCameraStarted: () {
            // camera started here -- do your after start stuff
          },
        ),
      ),
    );
  }
}
