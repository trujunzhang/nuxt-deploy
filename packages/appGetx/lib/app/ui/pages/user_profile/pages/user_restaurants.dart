import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/pages/restaurants/body/restaurants_body.dart';

import '../index.dart';

class UserRestaurants extends GetWidget<UserProfileController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelRestaurants> restaurantsList =
        controller.state.restaurantsList;
    if (restaurantsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return RestaurantsBody(restaurantList: restaurantsList);
  }
}
