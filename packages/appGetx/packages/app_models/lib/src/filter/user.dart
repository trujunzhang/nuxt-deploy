// https://csdcorp.com/blog/coding/null-safety-firstwhere/
import 'package:app_models/app_models.dart';
import 'package:collection/collection.dart';
import 'package:location/location.dart';

// ===========================================================
// Model: Users
// ===========================================================

extension FilterUserList on List<ParseModelUsers> {
  ParseModelUsers? singleUser(String uniqueId) {
    return singleWhereOrNull(
        (ParseModelUsers user) => user.uniqueId == uniqueId);
  }

  Map<String, ParseModelUsers> getUsersDict() {
    Map<String, ParseModelUsers> hashMap = {};
    objectToMap(ParseModelUsers user) {
      hashMap[user.uniqueId!] = user;
    }

    forEach(objectToMap);
    return hashMap;
  }
}
