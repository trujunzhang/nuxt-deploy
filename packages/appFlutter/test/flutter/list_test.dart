import 'package:flutter_test/flutter_test.dart';

import 'package:ieatta/src/utils/tools.dart';

void main() {
  testWidgets('crypto functions test', (WidgetTester tester) async {
    // https://flutterbyexample.com/lesson/checking-for-elements-contains-index-of-any-every
    List<String> animals = ['fish', 'tiger', 'crow'];
    // indexOf
    expect(animals.indexOf('fish'), 0); // 0
    expect(animals.indexOf('elephant'), -1); // -1
    // contains
    expect(animals.contains('fish'), true); // true
    expect(animals.contains('elephant'), false); // false
    // The Map collection isn't an iterable, but contains similar methods containsKey and containsValue.
    // These are mightly useful when keeping track of some data with a map in memory.
    Map<String, int> favoriteNumbers = {
      'Greg': 3,
      'Stephanie': 7,
      'Alison': 4,
    };

    expect(favoriteNumbers.containsKey('Greg'),true);
  });
}
