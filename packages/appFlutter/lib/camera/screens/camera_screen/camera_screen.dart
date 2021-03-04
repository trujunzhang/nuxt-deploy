import 'dart:async';
import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/edit/create_photo_provider_screen.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:path_provider/path_provider.dart';

import 'widget/camera_options.dart';
import 'widget/camera_preview_view.dart';
import 'widget/camera_uploading_user.dart';

class CameraScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen>
    with WidgetsBindingObserver, TickerProviderStateMixin<CameraScreen> {
  CameraScreenObject screenObject;

  CameraController cameraController;
  VoidCallback videoPlayerListener;

  /// imagePath:
  ///    example:
  ///     (android)"/data/user/0/com.example.ieatta/cache/image_picker2451588894555255495.jpg"
  String imagePath;
  List<CameraDescription> cameras;

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

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
    final CameraScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  void dispose() {
    SystemChrome.setEnabledSystemUIOverlays(
        [SystemUiOverlay.top, SystemUiOverlay.bottom]);
    WidgetsBinding.instance.removeObserver(this);
    cameraController.dispose();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.inactive) {
      cameraController?.dispose();
    } else if (state == AppLifecycleState.resumed) {
      if (cameraController != null) {
        onNewCameraSelected(cameraController.description);
      }
    }
  }

  void onNewCameraSelected(CameraDescription cameraDescription) async {
    if (cameraController != null) {
      await cameraController.dispose();
    }
    cameraController =
        CameraController(cameraDescription, ResolutionPreset.medium);

    // If the cameraController is updated then update the UI.
    cameraController.addListener(() {
      if (mounted) setState(() {});
      if (cameraController.value.hasError) {
        showInSnackBar(
            'Camera error ${cameraController.value.errorDescription}');
      }
    });

    try {
      await cameraController.initialize();
    } on CameraException catch (e) {
      _showCameraException(e);
    }

    if (mounted) {
      setState(() {});
    }
  }

  switchCamera() {
    if (cameraController != null && !cameraController.value.isRecordingVideo) {
      CameraLensDirection direction =
          cameraController.description.lensDirection;
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
    cameraController = CameraController(cameras[0], ResolutionPreset.high);
    cameraController.initialize().then((_) {
      if (!mounted) {
        return;
      }
      setState(() {});
    });
  }

  String timestamp() => DateTime.now().millisecondsSinceEpoch.toString();

  Future<String> takePicture() async {
    if (!cameraController.value.isInitialized) {
      showInSnackBar('Error: select a camera first.');
      return null;
    }
    Directory extDir;
    extDir = await getTemporaryDirectory();

    final String dirPath = '${extDir.path}/Pictures/flutter_test';
    await Directory(dirPath).create(recursive: true);
    final String filePath = '$dirPath/${timestamp()}.jpg';
    int seconds = DateTime.now().second;
    if (cameraController.value.isTakingPicture) {
      // A capture is already pending, do nothing.
      return null;
    }

    try {
      // XFile file = await cameraController.takePicture();
      // print('File information:');
      // print('- Path: ${file.path}');
      // print('- Name: ${file.name}');
      // print('- MIME type: ${file.mimeType}');
      // File newImage = await file.copy('$path/filename.jpg');
      await cameraController.takePicture(filePath);
    } on CameraException catch (e) {
      _showCameraException(e);
      return null;
    }

    int after = DateTime.now().second;
    print("Time taken in ${after - seconds}seconds");
    print(filePath);
    cameraController.dispose();

    afterTakeHook(filePath, (val) {
      setupCameras();
    });
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
        CameraPreviewView(cameraController: cameraController), // camera
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
