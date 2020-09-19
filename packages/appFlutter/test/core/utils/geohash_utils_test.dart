import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';

void main() {
  test('Result should return correctly', () {
    String geoHash = convertToGeoHash(37.8324, 112.5584);
    expect(geoHash, 'ww8p1r4t8yd0');
  });
}
