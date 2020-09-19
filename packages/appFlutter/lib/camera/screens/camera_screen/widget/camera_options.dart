import 'package:flutter/material.dart';
import 'package:ieatta/camera/widgets/switch_icon.dart';
import 'package:ieatta/camera/screens/camera_screen/widget/thumbnail_widget.dart';

import 'camera_button.dart';

class CameraOptions extends StatefulWidget {
  CameraOptions({Key key, this.takePicture, this.imagePath, this.switchCamera})
      : super(key: key);

  final Function takePicture;
  final String imagePath;
  final Function switchCamera;

  @override
  _CameraOptionsState createState() => _CameraOptionsState();
}

class _CameraOptionsState extends State<CameraOptions> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
        iconTheme: IconThemeData(color: Colors.white),
        actionsIconTheme: IconThemeData(color: Colors.white),
        leading: CloseButton(),
      ),
      bottomNavigationBar: getCameraButtonRow(),
    );
  }

  Widget getCameraButtonRow() {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        CameraButton(
          takePicture: widget.takePicture,
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              ThumbnailWidget(
                imagePath: widget.imagePath,
                size: 36.0,
              ),
              Expanded(
                child: Container(
                  height: 50.0,
                  alignment: Alignment.center,
                  padding: const EdgeInsets.symmetric(horizontal: 48.0),
                  child: Container(),
                ),
              ),
              _getCameraSwitch()
            ],
          ),
        ),
      ],
    );
  }

  Widget _getCameraSwitch() {
    return SwitchIcon(size: 24.0, onTap: widget.switchCamera);
  }
}
