import 'package:date_format/date_format.dart';
import 'package:jiffy/jiffy.dart';
import 'package:meta/meta.dart';

/// updatedAt: '2017-11-07T07:43:10.690+0000',
String formatByTimeAgo(String date) {
  var timeago = Jiffy(date).fromNow();
  return timeago;
}

@visibleForTesting
String formatByTimeAgoForTest(String date) {
  var timeago = Jiffy(date).from('2018-11-11');
  return timeago;
}

String getDateIso8610String(DateTime date) {
  var str = date.toIso8601String();
  return str;
}

String getDateStringForCreatedOrUpdatedDate() {
  var str = DateTime.now().toIso8601String();
  return str;
}

DateTime convertDateFromString(String strDate) {
  DateTime nextDate = DateTime.parse(strDate);
  return nextDate;
}

String formatDateStringTest(DateTime date) {
  String str = formatDate(date, [yyyy, '-', mm, '-', dd, ' ', HH, ':', nn]);
  return str;
}

String formatDateString(String strDate) {
  DateTime date = convertDateFromString(strDate);
  String str = formatDate(date, [yyyy, '-', mm, '-', dd, ' ', HH, ':', nn]);
  return str;
}

String getNowFormat() {
  String strDate = getDateStringForCreatedOrUpdatedDate();
  // String formatStr = formatDateString(strDate);
  // return convertDateFromString(formatStr);
  return formatDateString(strDate);
}
