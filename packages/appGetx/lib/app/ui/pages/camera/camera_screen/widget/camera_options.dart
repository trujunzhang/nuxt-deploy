import 'package:camerawesome/models/flashmodes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/camera/widgets/switch_icon.dart';

import '../index.dart';
import 'camera_button.dart';
import 'thumbnail_widget.dart';

class CameraOptions extends GetWidget<TakeCameraController> {
  IconData _getFlashIcon() {
    switch (controller.state.switchFlash.value.value) {
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
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
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
                  onTap: controller.state.onFlashTap,
                  child: Icon(
                    _getFlashIcon(),
                    size: 20,
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
          takePicture: controller.takePicture,
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              ThumbnailWidget(),
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
    return SwitchIcon(size: 24.0, onTap: controller.onChangeSensorTap);
  }
}
