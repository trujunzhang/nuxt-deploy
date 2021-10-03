import 'package:flutter/material.dart';

class EventState with ChangeNotifier {
  String displayName;
  String want;
  String startDate;
  String endDate;
  final String restaurantId;

  EventState(
      {required this.restaurantId,
      required this.displayName,
      required this.want,
      required this.startDate,
      required this.endDate});

  String getDisplayName() {
    return displayName;
  }

  String getWant() {
    return want;
  }

  String getStartDate() {
    return startDate;
  }

  String getEndDate() {
    return endDate;
  }

  void setDisplayName(String _displayName) {
    displayName = _displayName;
    notifyListeners();
  }

  void setWant(String _want) {
    want = _want;
    notifyListeners();
  }

  void setStartDate(String _startDate) {
    startDate = _startDate;
    notifyListeners();
  }

  void setEndDate(String _endDate) {
    endDate = _endDate;
    notifyListeners();
  }
}
