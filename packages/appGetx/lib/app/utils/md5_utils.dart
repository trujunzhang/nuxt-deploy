import 'dart:convert';

import 'package:crypto/crypto.dart';

import 'timeago_utils.dart'; // for the utf8.encode method

String getMd5Str(String str) {
  var bytes = utf8.encode(str); // data being hashed
  var digest = md5.convert(bytes).toString();
  return digest;
}

String documentIdFromCurrentDate() {
  String str = getDateStringForCreatedOrUpdatedDate();
  return getMd5Str(str);
}
