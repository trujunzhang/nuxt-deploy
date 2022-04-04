import 'package:app_models/src/utils/timeago_utils.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Flutter date/time functions test', (WidgetTester tester) async {
    var str = DateTime.now().toIso8601String();
    var x = 0;
  });

  testWidgets('convertDateFromString', (WidgetTester tester) async {
    var str = "2017-11-07T07:43:10.690+0000";
    DateTime nextDate = convertDateFromString(str);
    str = nextDate.toIso8601String();
    var x = 0;
  });

  testWidgets('formatDateString', (WidgetTester tester) async {
    var expectedStr = formatDateString("2017-11-07T07:43:10.690+0000");
    expect(expectedStr, '2017-11-07 07:43');
  });

  testWidgets('formatDateStringTest functions test',
      (WidgetTester tester) async {
    var str = formatDateStringTest(
        convertDateFromString('2017-11-07T07:43:10.690+0000'));
    expect(str, '2017-11-07 07:43');
    str = formatDateStringTest(
        convertDateFromString('2017-11-07T17:43:10.690+0000'));
    expect(str, '2017-11-07 17:43');
  });

  testWidgets('formatByTimeAgoForTest functions test',
      (WidgetTester tester) async {
    // updatedAt: '2017-11-07T07:43:10.690+0000',
    // Jiffy("2011-10-31").fromNow();
    // Jiffy("2011-10-31").from('')
    //  updatedAt: '2017-11-07T07:43:10.690+0000',
    // '2018-11-11'
    var timeAgo = formatByTimeAgoForTest('2017-11-07T07:43:10.690+0000');
    expect(timeAgo, 'a year ago');
    timeAgo = formatByTimeAgoForTest('2018-11-07T07:43:10.690+0000');
    expect(timeAgo, '3 days ago');
    timeAgo = formatByTimeAgoForTest('2018-11-11T07:43:10.690+0000');
    expect(timeAgo, 'in 16 hours');
  });
}
