import 'dart:async';
import 'dart:io';
import 'package:camera/camera.dart';
import 'package:ieatta/app/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:path_provider/path_provider.dart';

import 'widget/camera_options.dart';
import 'widget/camera_preview_view.dart';

import 'package:ieatta/camera/screens/types.dart';
import 'widget/camera_uploading_user.dart';

class CameraScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen>
    with WidgetsBindingObserver, TickerProviderStateMixin<CameraScreen> {
  CameraController controller;
  VoidCallback videoPlayerListener;

  /// imagePath:
  ///    example:
  ///     (android)"/data/user/0/com.example.ieatta/cache/image_picker2451588894555255495.jpg"
  String imagePath;
  List<CameraDescription> cameras;

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  CAMERA_EVENT camera_event;
  CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_NORMAL;

  // CAMERA_PANEL camera_panel = CAMERA_PANEL.PANEL_UPLOADING;

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIOverlays([]);
    WidgetsBinding.instance.addObserver(this);
    setupCameras();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final CAMERA_EVENT _cameraEvent = ModalRoute.of(context).settings.arguments;

    camera_event = _cameraEvent;
  }

  @override
  void dispose() {
    SystemChrome.setEnabledSystemUIOverlays(
        [SystemUiOverlay.top, SystemUiOverlay.bottom]);
    WidgetsBinding.instance.removeObserver(this);
    controller.dispose();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.inactive) {
      controller?.dispose();
    } else if (state == AppLifecycleState.resumed) {
      if (controller != null) {
        onNewCameraSelected(controller.description);
      }
    }
  }

  void onNewCameraSelected(CameraDescription cameraDescription) async {
    if (controller != null) {
      await controller.dispose();
    }
    controller = CameraController(cameraDescription, ResolutionPreset.medium);

    // If the controller is updated then update the UI.
    controller.addListener(() {
      if (mounted) setState(() {});
      if (controller.value.hasError) {
        showInSnackBar('Camera error ${controller.value.errorDescription}');
      }
    });

    try {
      await controller.initialize();
    } on CameraException catch (e) {
      _showCameraException(e);
    }

    if (mounted) {
      setState(() {});
    }
  }

  switchCamera() {
    if (controller != null && !controller.value.isRecordingVideo) {
      CameraLensDirection direction = controller.description.lensDirection;
      CameraLensDirection required = direction == CameraLensDirection.front
          ? CameraLensDirection.back
          : CameraLensDirection.front;
      for (CameraDescription cameraDescription in cameras) {
        if (cameraDescription.lensDirection == required) {
          onNewCameraSelected(cameraDescription);
          return;
        }
      }
    }
  }

  Future setupCameras() async {
    cameras = await availableCameras();
    if (cameras.length == 0) {
      return;
    }
    controller = CameraController(cameras[0], ResolutionPreset.high);
    controller.initialize().then((_) {
      if (!mounted) {
        return;
      }
      setState(() {});
    });
  }

  String timestamp() => DateTime.now().millisecondsSinceEpoch.toString();

  Future<String> takePicture() async {
    if (!controller.value.isInitialized) {
      showInSnackBar('Error: select a camera first.');
      return null;
    }
    Directory extDir;
    extDir = await getTemporaryDirectory();

    final String dirPath = '${extDir.path}/Pictures/flutter_test';
    await Directory(dirPath).create(recursive: true);
    final String filePath = '$dirPath/${timestamp()}.jpg';
    int seconds = DateTime.now().second;
    if (controller.value.isTakingPicture) {
      // A capture is already pending, do nothing.
      return null;
    }

    try {
      await controller.takePicture(filePath);
    } on CameraException catch (e) {
      _showCameraException(e);
      return null;
    }
    int after = DateTime.now().second;
    print("Time taken in ${after - seconds}seconds");
    print(filePath);
    controller.dispose();

    afterTakeHook(filePath, (val) {
      setupCameras();
    });
    return filePath;
  }

  void afterTakeHook(String filePath, Function cb) {
    setState(() {
      imagePath = filePath;
    });
    if (camera_event == CAMERA_EVENT.TAKE_FOR_RESTAURANT) {
      Navigator.of(context)
          .pushNamed(Routes.create_photo, arguments: filePath)
          .then(cb);
    } else if (camera_event == CAMERA_EVENT.TAKE_FOR_USER) {
      setState(() {
        camera_panel = CAMERA_PANEL.PANEL_UPLOADING;
      });
    }
  }

  void _showCameraException(CameraException e) {
    print(e.code + e.description);
    showInSnackBar('Error: ${e.code}\n${e.description}');
  }

  void showInSnackBar(String message) {
//    _scaffoldKey.currentState.showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        CameraPreviewView(controller: controller), // camera
        CameraOptions(
            switchCamera: switchCamera,
            takePicture: takePicture,
            afterTakeHook: afterTakeHook,
            imagePath: imagePath),
        if (camera_panel == CAMERA_PANEL.PANEL_UPLOADING)
          CameraUploadingUser(imagePath: imagePath) // option
      ],
    );
  }
}
