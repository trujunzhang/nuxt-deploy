import 'package:geohash/geohash.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

String convertToGeoHash(final double latitude, final double longitude) {
  return Geohash.encode(latitude, longitude);
}

String getGeoHashForRestaurant(final ParseModelRestaurants restaurant) {
  return Geohash.encode(restaurant.latitude, restaurant.longitude,
      codeLength: 8);
}
