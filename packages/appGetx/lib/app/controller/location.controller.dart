import 'package:get/get.dart';
import 'package:location/location.dart';

class LocationController extends GetxController {
// Location
  Location location = new Location();

  @override
  void onInit() {
    location.enableBackgroundMode(enable: true);
    super.onInit();
  }

  getLocation() async {
    await location.getLocation();
  }
}
