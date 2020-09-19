import 'package:geohash/geohash.dart';

String convertToGeoHash(final double latitude, final double longitude) {
  return Geohash.encode(latitude, longitude,);
}
