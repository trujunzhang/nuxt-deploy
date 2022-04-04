import 'package:app_models/src/utils/slug_helper.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Slugify functions test', (WidgetTester tester) async {
    String lowerStr = slugifyToLower('Upper STring');
    expect(lowerStr,'upper-string');
  });
}
