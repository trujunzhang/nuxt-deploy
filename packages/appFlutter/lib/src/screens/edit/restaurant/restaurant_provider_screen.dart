import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/providers/restaurant_state.dart';
import 'package:provider/provider.dart';

import 'restaurant_page.dart';

class CreateEditRestaurantProviderScreen extends StatelessWidget {
  CreateEditRestaurantProviderScreen({Key? key, this.restaurantId, required this.isNew}) : super(key: key);

  final bool isNew;
  final String? restaurantId;

  @override
  Widget build(BuildContext context) {
    ParseModelRestaurants? restaurant;
    if (isNew == false) {
      restaurant = FilterModels.instance.getSingleRestaurant(context, restaurantId!);
    }
    return ChangeNotifierProvider<RestaurantState>(
        create: (context) => RestaurantState(
              displayName: restaurant != null ? restaurant.displayName : "",
              extraNote: restaurant != null ? restaurant.extraNote : "",
              coverUrl: restaurant != null ? restaurant.originalUrl : "",
            ),
        child: RestaurantPage(restaurant: restaurant));
  }
}
