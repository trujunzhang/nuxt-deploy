import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/common/colors/colors.dart';

import '../restaurants.controller.dart';

class TrackEmpty extends GetWidget<RestaurantsController> {
  Widget buildBtn(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).primaryColor,
        borderRadius: const BorderRadius.all(
          Radius.circular(38.0),
        ),
        boxShadow: <BoxShadow>[
          BoxShadow(
              color: Colors.grey.withOpacity(0.4),
              offset: const Offset(0, 2),
              blurRadius: 8.0),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: const BorderRadius.all(
            Radius.circular(32.0),
          ),
          onTap: controller.onNewRestaurantIconPress,
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Icon(Icons.add,
                size: 20, color: AppColors.backgroundLightColor),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: <Widget>[
        SizedBox(
          height: 100,
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 12),
          child: Text('No Restaurants Nearby'),
        ),
        buildBtn(context)
      ],
    ));
  }
}
