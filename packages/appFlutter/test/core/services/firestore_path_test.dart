import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/core/services/firestore_path.dart';

void main() {
  testWidgets('Firestore path functions test', (WidgetTester tester) async {
    expect(FirestorePath.restaurant('uniqueId'), 'restaurants/uniqueId');
    expect(FirestorePath.review('uniqueId'), 'reviews/uniqueId');
    expect(FirestorePath.photo('uniqueId'), 'photos/uniqueId');
    expect(FirestorePath.user('id'), 'users/id');
  });
}
