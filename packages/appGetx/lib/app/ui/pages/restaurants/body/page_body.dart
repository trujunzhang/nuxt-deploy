import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/Restaurants.dart';
import 'package:ieatta/app/ui/pages/restaurants/empty/search_empty.dart';
import 'package:ieatta/app/ui/pages/restaurants/empty/track_empty.dart';

import '../restaurants.controller.dart';
import 'restaurants_body.dart';

class PageBody extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
    List<ParseModelRestaurants> restaurantList = controller.currentRestaurants;
    if (restaurantList.length == 0) {
      if (controller.gpsTrack.isTrue) {
        return TrackEmpty();
      } else {
        return SearchEmpty();
      }
    }
    return RestaurantsBody(
      restaurantList: restaurantList,
    );
  }
}
