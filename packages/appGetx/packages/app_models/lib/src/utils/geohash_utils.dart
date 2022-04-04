import 'package:geohash/geohash.dart';
// import 'package:ieatta/src/appModels/models/Restaurants.dart';

/// numberOfChars of GeoHash for restaurant.
/// @type {number}
const int numberOfCharsForRestaurant = 6;

/// numberOfChars of GeoHash for photo.
/// @type {number}
const int numberOfCharsForPhoto = 6;

String convertToGeoHash(final double latitude, final double longitude) {
  return Geohash.encode(latitude, longitude, codeLength: numberOfCharsForPhoto);
}

// String getGeoHashForRestaurant(final ParseModelRestaurants restaurant) {
//   return Geohash.encode(restaurant.latitude, restaurant.longitude, codeLength: numberOfCharsForRestaurant);
// }
