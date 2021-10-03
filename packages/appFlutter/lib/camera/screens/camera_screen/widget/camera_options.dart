import 'package:camerawesome/models/flashmodes.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/camera_screen/widget/thumbnail_widget.dart';
import 'package:ieatta/camera/widgets/switch_icon.dart';

import 'camera_button.dart';

class CameraOptions extends StatefulWidget {
  CameraOptions(
      {Key? key,
      required this.imagePath,
      required this.takePicture,
      required this.switchCamera,
      required this.afterTakeHook,
      required this.onFlashTap,
      required this.switchFlash})
      : super(key: key);

  final Function takePicture;
  final String? imagePath;
  final Function switchCamera;
  final Function afterTakeHook;
  final Function() onFlashTap;
  final ValueNotifier<CameraFlashes> switchFlash;

  @override
  _CameraOptionsState createState() => _CameraOptionsState();
}

class _CameraOptionsState extends State<CameraOptions> {
  IconData _getFlashIcon() {
    switch (widget.switchFlash.value) {
      case CameraFlashes.NONE:
        return Icons.flash_off;
      case CameraFlashes.ON:
        return Icons.flash_on;
      case CameraFlashes.AUTO:
        return Icons.flash_auto;
      case CameraFlashes.ALWAYS:
        return Icons.highlight;
      default:
        return Icons.flash_off;
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
        iconTheme: IconThemeData(color: Colors.white),
        actionsIconTheme: IconThemeData(color: Colors.white),
        leading: CloseButton(),
        actions: [
          Padding(
              padding: EdgeInsets.only(right: 20.0),
              child: GestureDetector(
                  onTap: widget.onFlashTap,
                  child: Icon(
                    _getFlashIcon(),
                  ))),
        ],
      ),
      bottomNavigationBar: getCameraButtonRow(),
    ));
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
                afterTakeHook: widget.afterTakeHook,
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
