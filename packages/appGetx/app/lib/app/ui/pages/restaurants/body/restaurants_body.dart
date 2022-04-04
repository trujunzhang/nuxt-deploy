import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:mix/mix.dart';
import 'package:my_plugin/my_plugin.dart';

Mix get listLightBg {
  return Mix(bgColor(Colors.white));
}

class RestaurantsBody extends StatelessWidget {
  const RestaurantsBody({Key? key, required this.restaurantList})
      : super(key: key);

  final List<ParseModelRestaurants> restaurantList;

  @override
  Widget build(BuildContext context) {
    bool isDarkMode = context.isDarkBrightness;
    return Box(
      mix: isDarkMode ? Mix() : listLightBg,
      child: _buildBody(),
    );
  }

  Widget _buildBody() {
    return ListView.builder(
      itemCount: restaurantList.length,
      padding: const EdgeInsets.only(top: 8),
      scrollDirection: Axis.vertical,
      itemBuilder: (BuildContext context, int index) {
        ParseModelRestaurants restaurant = restaurantList[index];
        return Padding(
          padding:
              const EdgeInsets.only(left: 24, right: 24, top: 8, bottom: 16),
          child: HotelListView(
            onTapItem: () {
              Get.toNamed(Routes.DETAIL_RESTAURANT,
                  arguments: {ParamsHelper.ID: restaurant.uniqueId});
            },
            restaurant: restaurant,
          ),
        );
      },
    );
  }
}
