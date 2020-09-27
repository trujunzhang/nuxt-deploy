import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

Widget _buildPlaceholderForRestaurant() {
  return Image.asset(
    'assets/placeholder/business_large_square.png',
    fit: BoxFit.cover,
  );
}

Widget buildRestaurantImage(ParseModelRestaurants modelData) {
  if (modelData.originalUrl == null || modelData.originalUrl == '') {
    return _buildPlaceholderForRestaurant();
  }
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: modelData.originalUrl,
    // imageUrl: restaurantData.originalUrl+"xxx",
    fit: BoxFit.cover,
    placeholder: (context, url) => _buildPlaceholderForRestaurant(),
    errorWidget: (context, url, error) => _buildPlaceholderForRestaurant(),
  );
}
