import 'package:flutter/material.dart';

class UserState with ChangeNotifier {
  String _firstName = "";
  String _secondName = "";
  String _coverUrl = "";

  UserState({required String username, required String originalUrl}) {
    var s = username.split(' ');
    _firstName = s[0];
    _secondName = s.length == 2 ? s[1] : '';
    _coverUrl = originalUrl;
  }

  String getFirstName() {
    return _firstName;
  }

  String getSecondName() {
    return _secondName;
  }

  String getUsername() {
    var displayName = [_firstName, _secondName].join(' ');

    return displayName;
  }

  String getCoverUrl() {
    return _coverUrl;
  }

  void setFirstName(String firstName) {
    _firstName = firstName;
    notifyListeners();
  }

  void setSecondName(String secondName) {
    _secondName = secondName;
    notifyListeners();
  }

  void setCoverUrl(String coverUrl) {
    _coverUrl = coverUrl;
    notifyListeners();
  }
}
