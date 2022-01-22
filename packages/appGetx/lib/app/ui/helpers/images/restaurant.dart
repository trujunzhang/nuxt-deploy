import 'package:app_config/app_config.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';

Widget _buildPlaceholderForRestaurant() {
  return Image.asset(
    R.ASSETS_PLACEHOLDER_BUSINESS_LARGE_SQUARE_PNG,
    fit: BoxFit.cover,
  );
}

Widget buildParseModelRestaurantsImageWithOriginalUrl(String? originalUrl) {
  if (originalUrl == null || originalUrl == '') {
    return _buildPlaceholderForRestaurant();
  }
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: originalUrl,
    // imageUrl: restaurantData.originalUrl+"xxx",
    fit: BoxFit.cover,
    placeholder: (context, url) => _buildPlaceholderForRestaurant(),
    errorWidget: (context, url, error) => _buildPlaceholderForRestaurant(),
  );
}

Widget buildRestaurantImage(ParseModelRestaurants modelData) {
  return buildParseModelRestaurantsImageWithOriginalUrl(modelData.originalUrl);
}
