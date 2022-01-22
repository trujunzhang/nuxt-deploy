import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:ieatta/app/data/enum/permission_status.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:location/location.dart';

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
    locationController.location.onLocationChanged.listen(_changedLocation);

    ever(gpsTrack, _changedGpsTrack);
    ever(search, _changedSearch);

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
    currentRestaurants.value = FilterModels.instance
        .getSearchedExploreList(firebaseController.restaurantsList, txt);
    _updateRestaurantCount();
  }

  _changedLocation(LocationData locationData) {
    locationController.setCurrentLocation(locationData);
    if (gpsTrack.isTrue) {
      currentRestaurants.value = FilterModels.instance.getTrackingExploreList(
          firebaseController.restaurantsList, locationData);
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
