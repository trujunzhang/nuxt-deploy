import 'package:get/get.dart';
import 'package:ieatta/app/controller/location.controller.dart';
import 'package:location/location.dart';

class AboutState {
  LocationController locationController = Get.find();

  Rx<String> version = Rx<String>('');
  Rx<String> latitude = Rx<String>('--');
  Rx<String> longitude = Rx<String>('--');

  listenChanged() {
    locationController.onCurrentLocationChanged(_changedLocation);
  }

  _changedLocation(LocationData? locationData) {
    if (locationData != null) {
      latitude.value = "${locationData.latitude!}";
      longitude.value = "${locationData.longitude!}";
    }
  }
}
