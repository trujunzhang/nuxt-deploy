import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/enum/permission_status.dart';
import 'package:ieatta/app/data/model/Restaurants.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:location/location.dart' as GpsLocation;
import 'package:location/location.dart';
import 'package:permission_handler/permission_handler.dart'
    as PermissionHandler;

class RestaurantsController extends GetxController {
  FirebaseController firebaseController = Get.find();
  LocationController locationController = Get.find();

  late TextEditingController textEditingController;

  // TODO: DJZHANG
  var gpsTrack = true.obs;

  // var gpsTrack = false.obs;

  var search = ''.obs;
  var restaurantsCount = 0.obs;

// list of all story will be saved here
  RxList<ParseModelRestaurants> currentRestaurants =
      RxList<ParseModelRestaurants>([]);

  LocationData? _currentLocation;

  // Gps Location.
  Rx<AppPermissionStatus> permissionStatus =
      Rx<AppPermissionStatus>(AppPermissionStatus.Undetermined);

  // Location
  Location location = new Location();

  @override
  void onInit() {
    // Listen location changed.
    locationController.location
        .getLocation()
        .then((value) => _currentLocation = value);
    locationController.location.onLocationChanged.listen(_changedLocation);

    // TextField
    textEditingController = TextEditingController(text: search.value);

    ever(gpsTrack, _changedGpsTrack);
    ever(search, _changedSearch);

    // Listen all model/list changed.
    listenChanged();

    _changedGpsTrack(gpsTrack.value);

    requestAppPermission();

    super.onInit();
  }

  listenChanged() {
    firebaseController.onRestaurantsChanged((value) {
      _changedGpsTrack(gpsTrack.value);
    });
  }

  toggleTrackStatus() {
    if (gpsTrack.isTrue) {
      gpsTrack.value = false;
    } else {
      gpsTrack.value = true;
    }
  }

  updateSearch(String txt) {
    gpsTrack.value = false;
    search.value = txt;
  }

  _changedGpsTrack(bool value) {
    // Log.d('gps Track: $value');
    if (value == true) {
      if (_currentLocation != null) {
        _changedLocation(_currentLocation!);
      } else {
        currentRestaurants.value = [];
      }
    } else if (value == false) {
      if (search.value == '') {
        // empty string
        currentRestaurants.value = firebaseController.restaurantsList;
        _updateRestaurantCount();
      } else {
        _changedSearch(search.value);
      }
    }
  }

  _changedSearch(String txt) {
    // Log.d('search Restaurant: $txt');
    currentRestaurants.value = FilterModels.instance
        .getSearchedExploreList(firebaseController.restaurantsList, txt);
    _updateRestaurantCount();
  }

  _changedLocation(LocationData currentLocation) {
    _currentLocation = currentLocation;
    if (gpsTrack.isTrue) {
      currentRestaurants.value = FilterModels.instance.getTrackingExploreList(
          firebaseController.restaurantsList, currentLocation);
      // Log.d('changed Location!');
      _updateRestaurantCount();
    }
  }

  _updateRestaurantCount() {
    restaurantsCount.value = currentRestaurants.value.length;
  }

  requestAppPermission() async {
    // Location
    GpsLocation.Location location = new GpsLocation.Location();
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
        permissionStatus.value = AppPermissionStatus.Denied;
        return;
      }
    }

    await location.hasPermission();
    if (_permissionGranted == GpsLocation.PermissionStatus.denied) {
      permissionStatus.value = AppPermissionStatus.Denied;
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
      permissionStatus.value = AppPermissionStatus.Granted;
    } else {
      permissionStatus.value = AppPermissionStatus.Denied;
    }
  }

  String getRestaurantsCountInfo() {
    var screenWidth = Get.width;
    if (gpsTrack.isTrue) {
      if (screenWidth <= 320) {
        return 'Auto tracking';
      }
      return 'Auto location tracking';
    }

    if (screenWidth <= 320) {
      return '$restaurantsCount restaurants';
    }
    return '$restaurantsCount restaurants found';
  }

//==========================================================
// UI Events
//==========================================================
  onNewRestaurantIconPress() {
    Get.toNamed('${Routes.EDIT_RESTAURANT}');
  }

  onLocalPhotosIconPress() {
    Get.toNamed('${Routes.LOCAL_PHOTO_GRID}');
  }

  onShowMapIconPress() {
    Get.toNamed('${Routes.RESTAURANT_MAP}');
  }
}
