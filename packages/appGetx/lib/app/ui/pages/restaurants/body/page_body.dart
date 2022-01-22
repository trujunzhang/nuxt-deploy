import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/pages/restaurants/empty/search_empty.dart';
import 'package:ieatta/app/ui/pages/restaurants/empty/track_empty.dart';

import '../index.dart';
import 'restaurants_body.dart';

class PageBody extends GetWidget<RestaurantsController> {
  const PageBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody());
  }

  Widget _buildBody() {
    List<ParseModelRestaurants> restaurantList =
        controller.state.currentRestaurants;
    if (restaurantList.isEmpty) {
      if (controller.state.gpsTrack.isTrue) {
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
