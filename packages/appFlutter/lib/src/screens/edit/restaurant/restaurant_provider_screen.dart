import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/providers/restaurant_state.dart';
import 'package:provider/provider.dart';

import 'restaurant_page.dart';

class CreateEditRestaurantProviderScreen extends StatefulWidget {
  @override
  _CreateEditRestaurantProviderScreenState createState() =>
      _CreateEditRestaurantProviderScreenState();
}

class _CreateEditRestaurantProviderScreenState
    extends State<CreateEditRestaurantProviderScreen> {
  // Model
  ParseModelRestaurants _restaurant;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRestaurants _restaurantModel =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      _restaurant = _restaurantModel;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<RestaurantState>(
        create: (context) => RestaurantState(
              displayName: _restaurant != null ? _restaurant.displayName : "",
              extraNote: _restaurant != null ? _restaurant.extraNote : "",
              coverUrl: _restaurant != null ? _restaurant.originalUrl : "",
            ),
        child: RestaurantPage(restaurant: _restaurant));
  }
}
