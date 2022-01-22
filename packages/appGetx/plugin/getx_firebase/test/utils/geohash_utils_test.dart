import 'package:flutter_test/flutter_test.dart';
import 'package:geohash/geohash.dart';
import 'package:getx_firebase/src/data/model/index.dart';
import 'package:getx_firebase/src/utils/geohash_utils.dart';

void main() {
  test('number of chars', () {
    expect(numberOfCharsForPhoto, 6);
    expect(numberOfCharsForRestaurant, 6);
  });

  test('convertToGeoHash', () {
    String geoHash = convertToGeoHash(37.8324, 112.5584);
    expect(geoHash, 'ww8p1r4t8yd0'.substring(0, numberOfCharsForPhoto));
  });

  test('getGeoHashForRestaurant', () {
    AuthUserModel user = AuthUserModel.mockedUser();
    ParseModelRestaurants restaurant = ParseModelRestaurants.emptyRestaurant(
        authUserModel: user, latitude: 32.4133352, longitude: 120.570579);
    // String geoHash = getGeoHashForRestaurant(restaurant);
    // expect(geoHash, 'wtv8rssv'.substring(0, numberOfCharsForRestaurant));

    ParseModelRestaurants nextRestaurant =
        ParseModelRestaurants.emptyRestaurant(
            authUserModel: user, latitude: 32.4134176, longitude: 120.5705507);
    // String nextGeoHash = getGeoHashForRestaurant(nextRestaurant);
    // expect(nextGeoHash, 'wtv8rssv'.substring(0, numberOfCharsForRestaurant));
  });

  test('geohash with 12 numberOfChars', () {
    expect(
        Geohash.encode(32.4133352, 120.570579, codeLength: 12), 'wtv8rssv65eg');
    expect(Geohash.encode(32.4134176, 120.5705507, codeLength: 12),
        'wtv8rssvc6yz');
  });

  test('geohash with 8 numberOfChars', () {
    expect(Geohash.encode(32.4133352, 120.570579, codeLength: 8), 'wtv8rssv');
    expect(Geohash.encode(32.4134176, 120.5705507, codeLength: 8), 'wtv8rssv');
  });
}
