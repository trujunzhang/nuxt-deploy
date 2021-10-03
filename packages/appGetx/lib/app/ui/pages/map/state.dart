import 'package:get/get.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:ieatta/app/ui/pages/restaurants/restaurants.controller.dart';

class RestaurantsMapState {
  RestaurantsController restaurantsController = Get.find();

  Rx<bool> showRestaurantThumbnail = Rx<bool>(false);
  Rx<int> selectedIndex = Rx<int>(0);

  // Map
  RxMap<MarkerId, Marker> markers = RxMap<MarkerId, Marker>({});

  Rx<CameraPosition> kRestaurantCamera =
      Rx<CameraPosition>(CameraPosition(target: LatLng(0.0, 0.0)));
}
