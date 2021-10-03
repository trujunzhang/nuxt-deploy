import 'package:location/location.dart';

Future<LocationData> getCurrentLocation() async {
  Location location = new Location();
  LocationData _locationData;
  _locationData = await location.getLocation();
  return _locationData;
}
