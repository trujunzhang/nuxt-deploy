import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:ieatta/app/ui/pages/restaurants/body/hotel_list_view.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class RestaurantsMapPage extends GetWidget<RestaurantsMapController> {
  const RestaurantsMapPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    var height = (Get.width - 14 * 2) / 2;
    return Scaffold(
      body: Stack(
        children: <Widget>[
          _googleMapView(),
          Container(
            padding:
                EdgeInsets.only(top: AppBar().preferredSize.height, left: 12),
            child: AppBarBack(
              AppBarBackType.Back,
              color: Colors.black,
            ),
          ),
          Positioned(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                height: controller.state.showRestaurantThumbnail.value
                    ? 96 + height
                    : 96,
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
      initialCameraPosition: controller.state.kRestaurantCamera.value,
      markers: Set<Marker>.of(controller.state.markers.values),
      onMapCreated: (GoogleMapController _controller) {
        controller.googleMapController.complete(_controller);
      },
    );
  }

  Widget _buildPhotosPageView(BuildContext context) {
    return PageView.builder(
      controller: controller.pageController,
      onPageChanged: (int index) async {
        await controller.goToCurrent(index);
      },
      itemCount: controller.restaurantList.length,
      itemBuilder: (context, index) {
        return Padding(
          padding:
              const EdgeInsets.only(left: 14, right: 14, top: 0, bottom: 0),
          child: HotelListView(
            expandIconCallback: (iconExpand) {
              controller.state.showRestaurantThumbnail.value = iconExpand;
            },
            restaurantData: controller.restaurantList[index],
            showThumbnail: controller.state.showRestaurantThumbnail.value,
            showExpandIcon: true,
          ),
        );
      },
    );
  }
}
