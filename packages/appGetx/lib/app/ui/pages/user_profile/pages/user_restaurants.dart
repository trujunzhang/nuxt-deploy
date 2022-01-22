import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/pages/restaurants/body/restaurants_body.dart';

import '../index.dart';

class UserRestaurants extends StatefulWidget {
  final String tag;

  const UserRestaurants({Key? key, required this.tag}) : super(key: key);

  @override
  _UserRestaurantsState createState() => _UserRestaurantsState();
}

class _UserRestaurantsState extends State<UserRestaurants> {
  late UserProfileController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelRestaurants> restaurantsList =
        controller.state.restaurantsList;
    if (restaurantsList.isEmpty) {
      return const Center(
        child: Text('No Data'),
      );
    }
    return RestaurantsBody(restaurantList: restaurantsList);
  }
}
