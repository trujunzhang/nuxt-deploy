import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/enum/permission_status.dart';
import 'package:location/location.dart';
import 'package:my_plugin/my_plugin.dart';

class RestaurantsState {
  FirebaseController firebaseController = Get.find();
  LocationController locationController = Get.find();

  // TODO: DJZHANG
  var gpsTrack = true.obs;

  // var gpsTrack = false.obs;

  var search = ''.obs;
  var restaurantsCount = 0.obs;

  RxList<ParseModelRestaurants> currentRestaurants =
      RxList<ParseModelRestaurants>([]);

  // Gps Location.
  Rx<AppPermissionStatus> permissionStatus =
      Rx<AppPermissionStatus>(AppPermissionStatus.Undetermined);

  listenChanged() {
    ever(gpsTrack, _changedGpsTrack);
    ever(search, _changedSearch);

    locationController.onCurrentLocationChanged(_changedLocation);

    firebaseController.onRestaurantsChanged((value) {
      _changedGpsTrack(gpsTrack.value);
    });
  }

  resetGpsTrack() {
    _changedGpsTrack(gpsTrack.value);
  }

  _changedGpsTrack(bool value) {
    // Log.d('gps Track: $value');
    if (value == true) {
      if (locationController.currentLocation != null) {
        _changedLocation(locationController.currentLocation!);
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
    currentRestaurants.value =
        firebaseController.restaurantsList.filterBySearchedString(txt);
    _updateRestaurantCount();
  }

  _changedLocation(LocationData? locationData) {
    if (gpsTrack.isTrue && locationData != null) {
      currentRestaurants.value =
          firebaseController.restaurantsList.filterByTracking(locationData);
      // Log.d('changed Location!');
      _updateRestaurantCount();
    }
  }

  _updateRestaurantCount() {
    restaurantsCount.value = currentRestaurants.length;
  }

//==========================================================
// UI Events
//==========================================================

  toggleTrackStatus() {
    gpsTrack.toggle();
  }

  updateSearch(String txt) {
    gpsTrack(false);
    search.value = txt;
  }
}
