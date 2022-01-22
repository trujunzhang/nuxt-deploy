import 'package:get/get.dart';
import 'package:location/location.dart';

class LocationController extends GetxController {
// Location
  Location location = Location();

  LocationData? _currentLocation;

  LocationData? get currentLocation {
    return _currentLocation;
  }

  setCurrentLocation(LocationData value) {
    _currentLocation = value;
  }

  @override
  void onInit() {
    location.enableBackgroundMode(enable: true);
    super.onInit();
  }

  getLocation() async {
    location.getLocation().then((value) {
      _currentLocation = value;
    });
  }
}
