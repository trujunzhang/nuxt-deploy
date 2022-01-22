import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/enum/permission_status.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:location/location.dart' as GpsLocation;
import 'package:permission_handler/permission_handler.dart'
    as PermissionHandler;

import 'index.dart';

class RestaurantsController extends GetxController {
  FirebaseController firebaseController = Get.find();
  LocationController locationController = Get.find();

  late TextEditingController textEditingController;

  final state = RestaurantsState();

  @override
  void onInit() {
    // Listen location changed.
    locationController.getLocation();

    // TextField
    textEditingController = TextEditingController(text: state.search.value);

    // Listen all model/list changed.
    state.listenChanged();

    state.resetGpsTrack();

    requestAppPermission();

    super.onInit();
  }

  requestAppPermission() async {
    // Location
    GpsLocation.Location location = GpsLocation.Location();
    bool _serviceEnabled;
    GpsLocation.PermissionStatus _permissionGranted;

    // Enable location service.
    _serviceEnabled = await location.serviceEnabled();
    if (!_serviceEnabled) {
      _serviceEnabled = await location.requestService();
    }

    // Enable location permission.
    _permissionGranted = await location.hasPermission();
    if (_permissionGranted == GpsLocation.PermissionStatus.denied) {
      _permissionGranted = await location.requestPermission();
      if (_permissionGranted != GpsLocation.PermissionStatus.granted) {
        state.permissionStatus.value = AppPermissionStatus.Denied;
        return;
      }
    }

    await location.hasPermission();
    if (_permissionGranted == GpsLocation.PermissionStatus.denied) {
      state.permissionStatus.value = AppPermissionStatus.Denied;
      return;
    }

    // Other
    Map<PermissionHandler.Permission, PermissionHandler.PermissionStatus>
        permissions = await [
      PermissionHandler.Permission.microphone, // audio
      PermissionHandler.Permission.storage, // local store
      PermissionHandler.Permission.camera // take photo
    ].request();
    // var x = permissions[PermissionHandler.Permission.microphone];
    // var y = permissions[PermissionHandler.Permission.storage];
    // var z = permissions[PermissionHandler.Permission.camera];

    if (
        // permissions[PermissionHandler.Permission.microphone] ==
        // PermissionHandler.PermissionStatus.granted // audio
        // &&
        permissions[PermissionHandler.Permission.storage] ==
                PermissionHandler.PermissionStatus.granted // local store
            &&
            permissions[PermissionHandler.Permission.camera] ==
                PermissionHandler.PermissionStatus.granted // take photo
        ) {
      state.permissionStatus.value = AppPermissionStatus.Granted;
    } else {
      state.permissionStatus.value = AppPermissionStatus.Denied;
    }
  }

  String getRestaurantsCountInfo() {
    var screenWidth = Get.width;
    if (state.gpsTrack.isTrue) {
      if (screenWidth <= 320) {
        return 'Auto tracking';
      }
      return 'Auto location tracking';
    }

    if (screenWidth <= 320) {
      return '${state.restaurantsCount} restaurants';
    }
    return '${state.restaurantsCount} restaurants found';
  }

//==========================================================
// UI Events
//==========================================================
  onNewRestaurantIconPress() {
    Get.toNamed(Routes.EDIT_RESTAURANT);
  }

  onLocalPhotosIconPress() {
    Get.toNamed(Routes.LOCAL_PHOTO_GRID);
  }

  onShowMapIconPress() {
    Get.toNamed(Routes.RESTAURANT_MAP);
  }
}
