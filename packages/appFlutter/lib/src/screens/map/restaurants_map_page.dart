import 'package:flutter/material.dart';
import 'dart:async';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/navigation/top_back_arrow_view.dart';
import 'package:ieatta/src/screens/restaurants/body/hotel_list_view.dart';

class RestaurantsMapPage extends StatefulWidget {
  RestaurantsMapPage({Key key}) : super(key: key);

  @override
  _RestaurantsMapPageState createState() => _RestaurantsMapPageState();
}

class _RestaurantsMapPageState extends State<RestaurantsMapPage> {
  bool showRestaurantThumbnail = false;
  int selectedIndex = 0;
  PageController _pageController;
  List<ParseModelRestaurants> restaurantList = [];

  // Map
  final double mapZoom = 17;
  Map<MarkerId, Marker> markers = <MarkerId, Marker>{};
  static CameraPosition kRestaurantCamera;
  Completer<GoogleMapController> _controller = Completer();

  @override
  void initState() {
    super.initState();

    _pageController = PageController(initialPage: selectedIndex);
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

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final List<ParseModelRestaurants> _restaurantList =
        ModalRoute.of(context).settings.arguments;

    assert(_restaurantList != null, 'Empty restaurant list!');

    ParseModelRestaurants first = _restaurantList[0];
    LatLng latLng = LatLng(first.latitude, first.longitude);
    CameraPosition _firstPosition =
        CameraPosition(target: latLng, zoom: mapZoom);
    Map<MarkerId, Marker> _markers = resetMarkers(latLng, first);
    setState(() {
      restaurantList = _restaurantList;
      kRestaurantCamera = _firstPosition;
      markers = _markers;
    });
  }

  Future<void> _goToCurrent(int index) async {
    final GoogleMapController controller = await _controller.future;
    ParseModelRestaurants first = restaurantList[index];
    LatLng latLng = LatLng(first.latitude, first.longitude);
    CameraPosition _nextPosition =
        CameraPosition(target: latLng, zoom: mapZoom);
    controller.animateCamera(CameraUpdate.newCameraPosition(_nextPosition));
    Map<MarkerId, Marker> _markers = resetMarkers(latLng, first);
    setState(() {
      selectedIndex = index;
      markers = _markers;
    });
  }

  @override
  Widget build(BuildContext context) {
    var height = (MediaQuery.of(context).size.width - 14 * 2) / 2;
    return Scaffold(
      body: Stack(
        children: <Widget>[
          _googleMapView(),
          TopBackArrowView(
            isBackColor: true,
          ),
          Positioned(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                height: showRestaurantThumbnail ? 96 + height : 96,
//                height: showRestaurantThumbnail ? 270 : 96,
//                height: showRestaurantThumbnail ? 290 : 98,
                child: _buildPhotosPageView(context),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _googleMapView() {
    return GoogleMap(
      initialCameraPosition: kRestaurantCamera,
      markers: Set<Marker>.of(markers.values),
      onMapCreated: (GoogleMapController controller) {
        _controller.complete(controller);
      },
    );
  }

  Widget _buildPhotosPageView(BuildContext context) {
    return PageView.builder(
      controller: _pageController,
      onPageChanged: (int index) async {
        await _goToCurrent(index);
      },
      itemCount: restaurantList.length,
      itemBuilder: (context, index) {
        return Padding(
          padding:
              const EdgeInsets.only(left: 14, right: 14, top: 0, bottom: 0),
          child: HotelListView(
            expandIconCallback: (iconExpand) {
              setState(() {
                showRestaurantThumbnail = iconExpand;
              });
            },
            restaurantData: restaurantList[index],
            showThumbnail: showRestaurantThumbnail,
            showExpandIcon: true,
          ),
        );
      },
    );
  }
}
