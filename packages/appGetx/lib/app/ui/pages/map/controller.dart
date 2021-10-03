import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/pages/restaurants/restaurants.controller.dart';

import 'index.dart';

class RestaurantsMapController extends GetxController {
  RestaurantsController restaurantsController = Get.find();

  final state = RestaurantsMapState();

  late PageController pageController;
  List<ParseModelRestaurants> restaurantList = [];

  // Map
  final double mapZoom = 17;
  Completer<GoogleMapController> googleMapController = Completer();

  @override
  void onInit() {
    pageController = PageController(initialPage: state.selectedIndex.value);

    restaurantList = restaurantsController.currentRestaurants;

    initMap();

    super.onInit();
  }

  initMap() {
    ParseModelRestaurants first = restaurantList.first;
    LatLng latLng = LatLng(first.latitude, first.longitude);
    CameraPosition _firstPosition =
        CameraPosition(target: latLng, zoom: mapZoom);
    Map<MarkerId, Marker> _markers = resetMarkers(latLng, first);
    state.kRestaurantCamera.value = _firstPosition;
    state.markers.value = _markers;
  }

  Map<MarkerId, Marker> resetMarkers(
      LatLng center, ParseModelRestaurants restaurant) {
    Map<MarkerId, Marker> _markers = <MarkerId, Marker>{};
    MarkerId markerId =
        MarkerId(center.latitude.toString() + center.longitude.toString());
    final marker = Marker(
      markerId: markerId,
      position: center,
      infoWindow: InfoWindow(
        title: restaurant.displayName,
        snippet: restaurant.address,
      ),
      icon: BitmapDescriptor.defaultMarker,
      onTap: () {
        var x = 0;
      },
    );
    _markers[markerId] = marker;
    return _markers;
  }

  Future<void> goToCurrent(int index) async {
    final GoogleMapController controller = await googleMapController.future;
    ParseModelRestaurants first = restaurantList[index];
    LatLng latLng = LatLng(first.latitude, first.longitude);
    CameraPosition _nextPosition =
        CameraPosition(target: latLng, zoom: mapZoom);
    controller.animateCamera(CameraUpdate.newCameraPosition(_nextPosition));
    Map<MarkerId, Marker> _markers = resetMarkers(latLng, first);
    state.selectedIndex.value = index;
    state.markers.value = _markers;
  }
}
