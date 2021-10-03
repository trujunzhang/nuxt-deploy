import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/app/filter/filter_dict.dart';

void main() {
  testWidgets('updateNewId', (WidgetTester tester) async {
    expect(// select '4','5', add '1'.
        FilterDict.instance.updateNewId(['1', '6'], ['4', '5', '6']),
        ['1', '4', '5', '6']);
    expect(// new item(empty list), add '1','3','5'.
        FilterDict.instance.updateNewId(['1', '3', '5'], []), ['1', '3', '5']);
    expect(// select '4','6', add '1'.
        FilterDict.instance.updateNewId(['1', '5'], ['4', '5', '6']),
        ['1', '4', '5', '6']);
    expect(// select '4','5', add '1', '2', '3'.
        FilterDict.instance.updateNewId(['1', '2', '3', '6'], ['4', '5', '6']),
        ['1', '2', '3', '4', '5', '6']);
  });
}
