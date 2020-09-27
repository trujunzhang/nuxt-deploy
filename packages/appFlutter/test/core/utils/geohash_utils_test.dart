import 'package:flutter_test/flutter_test.dart';
import 'package:geohash/geohash.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

void main() {
  test('convertToGeoHash', () {
    String geoHash = convertToGeoHash(37.8324, 112.5584);
    expect(geoHash, 'ww8p1r4t8yd0');
  });

  test('getGeoHashForRestaurant', () {
    AuthUserModel user = AuthUserModel.mockedUser();
    ParseModelRestaurants restaurant = ParseModelRestaurants.emptyRestaurant(
        authUserModel: user, latitude: 32.4133352, longitude: 120.570579);
    String geoHash = getGeoHashForRestaurant(restaurant);
    expect(geoHash, 'wtv8rssv');

    ParseModelRestaurants nextRestaurant =
        ParseModelRestaurants.emptyRestaurant(
            authUserModel: user, latitude: 32.4134176, longitude: 120.5705507);
    String nextGeoHash = getGeoHashForRestaurant(nextRestaurant);
    expect(nextGeoHash, 'wtv8rssv');
  });

  test('geohash with 12 numberOfChars', () {
    String photoGeoHash =
        Geohash.encode(32.4133352, 120.570579, codeLength: 12);
    expect(photoGeoHash, 'wtv8rssv65eg');
    String restaurantGeoHash =
        Geohash.encode(32.4134176, 120.5705507, codeLength: 12);
    expect(restaurantGeoHash, 'wtv8rssvc6yz');
  });

  test('geohash with 8 numberOfChars', () {
    String photoGeoHash = Geohash.encode(32.4133352, 120.570579, codeLength: 8);
    expect(photoGeoHash, 'wtv8rssv');
    String restaurantGeoHash =
        Geohash.encode(32.4134176, 120.5705507, codeLength: 8);
    expect(restaurantGeoHash, 'wtv8rssv');
  });
}
