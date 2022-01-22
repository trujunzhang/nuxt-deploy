import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'hotel_list_view.dart';

class RestaurantsBody extends StatelessWidget {
  const RestaurantsBody({Key? key, required this.restaurantList})
      : super(key: key);

  final List<ParseModelRestaurants> restaurantList;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        // color: AppColors.backgroundLightColor,
        color: Theme.of(context).colorScheme.primaryVariant,
        child: ListView.builder(
          itemCount: restaurantList.length,
          padding: const EdgeInsets.only(top: 8),
          scrollDirection: Axis.vertical,
          itemBuilder: (BuildContext context, int index) {
            ParseModelRestaurants restaurant = restaurantList[index];
            return Padding(
              padding: const EdgeInsets.only(
                  left: 24, right: 24, top: 8, bottom: 16),
              child: HotelListView(
                callback: () {
                  Get.toNamed(Routes.DETAIL_RESTAURANT,
                      arguments: {ParamsHelper.ID: restaurant.uniqueId});
                },
                restaurantData: restaurant,
              ),
            );
          },
        ),
      ),
    );
  }
}
