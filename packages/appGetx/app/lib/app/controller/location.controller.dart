import 'package:get/get.dart';
import 'package:location/location.dart';
import 'package:my_plugin/my_plugin.dart';

class LocationController extends GetxController {
// Location
  Location location = Location();

  final Rx<LocationData?> _currentLocation = Rx<LocationData?>(null);

  LocationData? get currentLocation {
    return _currentLocation.value;
  }

  setCurrentLocation(LocationData value) {
    // Log.d(
        // 'current location: (latitude,longitude) (${value.latitude},${value.longitude})');
    _currentLocation.value = value;
  }

  onCurrentLocationChanged(fn) {
    ever(_currentLocation, fn);
  }

  @override
  void onInit() {
    // Enables or disables service in the background mode.
    location.enableBackgroundMode(enable: true);
    // Listens the location changed.
    location.onLocationChanged.listen(_changedLocation);
    super.onInit();
  }

  _changedLocation(LocationData locationData) {
    setCurrentLocation(locationData);
  }

  getLocation() async {
    location.getLocation().then((value) {
      _currentLocation.value = value;
    });
  }
}
