import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/edit/create_photo_provider_screen.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:path_provider/path_provider.dart';
import 'package:camerawesome/camerawesome_plugin.dart';
import 'widget/camera_options.dart';
import 'widget/camera_uploading_user.dart';

class TakeCameraScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _TakeCameraScreenState();
}

class _TakeCameraScreenState extends State<TakeCameraScreen>
    with WidgetsBindingObserver, TickerProviderStateMixin<TakeCameraScreen> {
  CameraScreenObject screenObject;

  /// imagePath:
  ///    example:
  ///     (android)"/data/user/0/com.example.ieatta/cache/image_picker2451588894555255495.jpg"
  String imagePath;

  CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_NORMAL;

  // CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_UPLOADING;

  /// use this to call a take picture
  PictureController _pictureController = new PictureController();

  ValueNotifier<CameraFlashes> _switchFlash = ValueNotifier(CameraFlashes.AUTO);
  ValueNotifier<Sensors> _sensor = ValueNotifier(Sensors.BACK);
  ValueNotifier<Size> _photoSize = ValueNotifier(null);
  ValueNotifier<CaptureModes> _captureMode = ValueNotifier(CaptureModes.PHOTO);

  /// list of available sizes
  List<Size> _availableSizes;

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIOverlays([]);
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final CameraScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  void dispose() {
    _photoSize.dispose();
    _captureMode.dispose();
    SystemChrome.setEnabledSystemUIOverlays(
        [SystemUiOverlay.top, SystemUiOverlay.bottom]);
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  String timestamp() => DateTime.now().millisecondsSinceEpoch.toString();

  Future<String> takePicture() async {
    Directory extDir;
    extDir = await getTemporaryDirectory();

    final String dirPath = '${extDir.path}/Pictures/flutter_test';
    await Directory(dirPath).create(recursive: true);
    final String filePath = '$dirPath/${timestamp()}.jpg';

    await _pictureController.takePicture(filePath);

    afterTakeHook(filePath, (val) {});
    return filePath;
  }

  void afterTakeHook(String filePath, Function cb) {
    setState(() {
      imagePath = filePath;
    });
    if (screenObject.photoType == PhotoType.User) {
      setState(() {
        camera_panel = CAMERA_PANEL.PANEL_UPLOADING;
      });
    } else {
      Navigator.of(context)
          .pushNamed(Routes.create_photo,
              arguments: NewPhotoScreenObject(
                  imgPath: filePath,
                  photoType: screenObject.photoType,
                  relatedId: screenObject.relatedId))
          .then(cb);
    }
  }

  onChangeSensorTap() {
    if (_sensor.value == Sensors.FRONT) {
      _sensor.value = Sensors.BACK;
    } else {
      _sensor.value = Sensors.FRONT;
    }
  }

  onFlashTap() {
    switch (_switchFlash.value) {
      case CameraFlashes.NONE:
        _switchFlash.value = CameraFlashes.ON;
        break;
      case CameraFlashes.ON:
        _switchFlash.value = CameraFlashes.AUTO;
        break;
      case CameraFlashes.AUTO:
        _switchFlash.value = CameraFlashes.ALWAYS;
        break;
      case CameraFlashes.ALWAYS:
        _switchFlash.value = CameraFlashes.NONE;
        break;
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Positioned(
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          child: Center(
            child: CameraAwesome(
              selectDefaultSize: (List<Size> availableSizes) => Size(1920, 1080),
              captureMode: _captureMode,
              photoSize: _photoSize,
              sensor: _sensor,
              fitted: true,
            ),
          ),
        ),
        CameraOptions(
          imagePath: imagePath,
          takePicture: takePicture,
          switchCamera: onChangeSensorTap,
          afterTakeHook: afterTakeHook,
          onFlashTap:onFlashTap,
          switchFlash: _switchFlash,
        ),
        if (camera_panel == CAMERA_PANEL.PANEL_UPLOADING)
          CameraUploadingUser(imagePath: imagePath) // option
      ],
    );
  }
}
