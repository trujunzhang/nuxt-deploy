// Import the test package and Counter class
import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/src/logic/restaurants_results.dart';

void main() {
  test('Result should return correctly', () {
    expect(matchString('Carl Jr','r'), true);
    // expect(matchString('Carl Jr','r'), false);
  });
}
