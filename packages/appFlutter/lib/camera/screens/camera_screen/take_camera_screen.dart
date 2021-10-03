import 'dart:async';
import 'dart:io';

import 'package:camerawesome/camerawesome_plugin.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:path_provider/path_provider.dart';

import '../Camera_object.dart';
import 'widget/camera_options.dart';
import 'widget/camera_uploading_user.dart';

class TakeCameraScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _TakeCameraScreenState();
}

class _TakeCameraScreenState extends State<TakeCameraScreen>
    with WidgetsBindingObserver, TickerProviderStateMixin<TakeCameraScreen> {
  late CameraScreenObject screenObject;

  /// imagePath:
  ///    example:
  ///     (android)"/data/user/0/com.example.ieatta/cache/image_picker2451588894555255495.jpg"
  String? imagePath;

  CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_NORMAL;

  // CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_UPLOADING;

  /// use this to call a take picture
  PictureController _pictureController = new PictureController();

  ValueNotifier<CameraFlashes> _switchFlash = ValueNotifier(CameraFlashes.AUTO);
  ValueNotifier<Sensors> _sensor = ValueNotifier(Sensors.BACK);

  // TODO:[2021-8-18] djzhang(camera)
  ValueNotifier<Size> _photoSize = ValueNotifier(Size.zero);
  ValueNotifier<CaptureModes> _captureMode = ValueNotifier(CaptureModes.PHOTO);

  /// list of available sizes
  late List<Size> _availableSizes;

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIOverlays([]);
    WidgetsBinding.instance!.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final Object? _screenObject = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      screenObject = _screenObject as CameraScreenObject;
    });
  }

  @override
  void dispose() {
    _photoSize.dispose();
    _captureMode.dispose();
    SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.top, SystemUiOverlay.bottom]);
    WidgetsBinding.instance!.removeObserver(this);
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
      NavigatorUtils.push(
              context,
              ParamsHelper.getNewPhotoPath(
                  photoType: screenObject.photoType, relatedId: screenObject.relatedId, imgPath: filePath))
          .then((value) {
        // TODO:[2021-8-18] djzhang(camera)
        cb();
      });
      // Navigator.of(context)
      //     .pushNamed(Routes.create_photo,
      //         arguments: NewPhotoScreenObject(
      //             imgPath: filePath,
      //             photoType: screenObject.photoType,
      //             relatedId: screenObject.relatedId))
      //     .then((obj) {
      //   cb();
      // });
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
              // selectDefaultSize: (availableSizes) {
              //   this._availableSizes = availableSizes;
              //   return availableSizes[0];
              // },
              // selectDefaultSize: (List<Size> availableSizes) => Size(
              //     MediaQuery.of(context).size.width,
              //     MediaQuery.of(context).size.height),
              selectDefaultSize: (List<Size> availableSizes) =>
                  // Size(1920, 1080),
                  Size(1024, 768),
              captureMode: _captureMode,
              photoSize: _photoSize,
              sensor: _sensor,
              // fitted: true,
            ),
          ),
        ),
        CameraOptions(
          imagePath: imagePath,
          takePicture: takePicture,
          switchCamera: onChangeSensorTap,
          afterTakeHook: afterTakeHook,
          onFlashTap: onFlashTap,
          switchFlash: _switchFlash,
        ),
        if (camera_panel == CAMERA_PANEL.PANEL_UPLOADING) CameraUploadingUser(imagePath: imagePath!) // option
      ],
    );
  }
}
