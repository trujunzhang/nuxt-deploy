import 'package:flutter/material.dart';

class RestaurantState with ChangeNotifier {
  String displayName;
  String extraNote;
  String coverUrl;

  RestaurantState({this.displayName, this.extraNote, this.coverUrl});

  String getDisplayName() {
    return displayName;
  }

  String getExtraNote() {
    return extraNote;
  }

  String getCoverUrl() {
    return coverUrl;
  }

  void setDisplayName(String _displayName) {
    displayName = _displayName;
    notifyListeners();
  }

  void setExtraNote(String _extraNote) {
    extraNote = _extraNote;
    notifyListeners();
  }

  void setCoverUrl(String _coverUrl) {
    coverUrl = _coverUrl;
    notifyListeners();
  }
}
