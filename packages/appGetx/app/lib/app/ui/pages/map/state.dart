import 'package:get/get.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class RestaurantsMapState {
  Rx<bool> showRestaurantThumbnail = Rx<bool>(false);
  Rx<int> selectedIndex = Rx<int>(0);

  // Map
  RxMap<MarkerId, Marker> markers = RxMap<MarkerId, Marker>({});

  Rx<CameraPosition> kRestaurantCamera =
      Rx<CameraPosition>(CameraPosition(target: LatLng(0.0, 0.0)));
}
