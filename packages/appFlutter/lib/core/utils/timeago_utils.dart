import 'package:jiffy/jiffy.dart';

/**
 * updatedAt: '2017-11-07T07:43:10.690+0000',
 */
String formatByTimeAgo(String date) {
  var timeago = Jiffy(date).fromNow();
  return timeago;
}

String formatByTimeAgoForTest(String date) {
  var timeago = Jiffy(date).from('2018-11-11');
  return timeago;
}

String getDateStringForCreatedOrUpdatedDate() {
  var str = DateTime.now().toIso8601String();
  return str;
}
