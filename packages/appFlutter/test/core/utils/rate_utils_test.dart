import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/core/utils/rate_utils.dart';

void main() {
  testWidgets('calcRateForRestaurant functions test',
      (WidgetTester tester) async {
    double rate = calcRateForRestaurant(3 + 2 + 4 + 2 + 5, 5); // 16(3.2)
    expect(rate, 3.0);
    rate = calcRateForRestaurant(3 + 4 + 4 + 2 + 5, 5); // 18(3.6)
    expect(rate, 3.5);
    rate = calcRateForRestaurant(4 + 4 + 4 + 5 + 5, 5); // 22(4.4)
    expect(rate, 4.5);
    rate = calcRateForRestaurant(4 + 3, 2); // 7(3.5)
    expect(rate, 3.5);
  });
}
