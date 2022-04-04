import 'package:app_models/src/enum/review_type.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('vnText functions test', (WidgetTester tester) async {
    expect(ReviewType.None.vnText, 'none');
    expect(ReviewType.Restaurant.vnText, 'restaurant');
    expect(ReviewType.Event.vnText, 'event');
    expect(ReviewType.Recipe.vnText, 'recipe');
  });
  testWidgets('stringToReviewType functions test', (WidgetTester tester) async {
    expect(ReviewTypeExtension.fromString('none'), ReviewType.None);
    expect(ReviewTypeExtension.fromString('restaurant'), ReviewType.Restaurant);
    expect(ReviewTypeExtension.fromString('event'), ReviewType.Event);
    expect(ReviewTypeExtension.fromString('recipe'), ReviewType.Recipe);
  });
}
