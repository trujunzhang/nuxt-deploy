import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

Widget buildRestaurantImage(ParseModelRestaurants modelData) {
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: modelData.originalUrl,
    // imageUrl: restaurantData.originalUrl+"xxx",
    fit: BoxFit.cover,
    placeholder: (context, url) => Image.asset(
      'assets/placeholder/business_large_square.png',
      fit: BoxFit.cover,
    ),
    errorWidget: (context, url, error) => Image.asset(
      'assets/placeholder/business_large_square.png',
      fit: BoxFit.cover,
    ),
  );
}
