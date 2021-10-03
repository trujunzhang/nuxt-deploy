import 'package:flutter/material.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/screens/details/detail_router.dart';

import '../hotel_app_theme.dart';
import 'hotel_list_view.dart';

class PageBody extends StatelessWidget {
  PageBody({Key? key, required this.restaurantList}) : super(key: key);

  final List<ParseModelRestaurants> restaurantList;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        color: HotelAppTheme.buildLightTheme().backgroundColor,
        child: ListView.builder(
          itemCount: restaurantList.length,
          padding: const EdgeInsets.only(top: 8),
          scrollDirection: Axis.vertical,
          itemBuilder: (BuildContext context, int index) {
            ParseModelRestaurants restaurant = restaurantList[index];
            return Padding(
              padding: const EdgeInsets.only(left: 24, right: 24, top: 8, bottom: 16),
              child: HotelListView(
                callback: () {
                  NavigatorUtils.push(
                      context, '${DetailRouter.detailRestaurantPage}?${ParamsHelper.ID}=${restaurant.uniqueId}');
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
