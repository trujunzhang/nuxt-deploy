import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/core/utils/slug_helper.dart';

void main() {
  testWidgets('Slugify functions test', (WidgetTester tester) async {
    String lowerStr = slugifyToLower('Upper STring');
    expect(lowerStr,'upper-string');
  });
}
