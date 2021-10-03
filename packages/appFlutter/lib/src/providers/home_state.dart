import 'package:flutter/material.dart';

class HomeState with ChangeNotifier {
  bool gpsTrack;
  String search = '';

  HomeState({required this.gpsTrack});

  bool getGpsTrack() {
    return gpsTrack;
  }

  String getSearch() {
    return search;
  }

  void setGpsTrack(bool _gpsTrack) {
    gpsTrack = _gpsTrack;
    notifyListeners();
  }

  void setSearch(String _search) {
    gpsTrack = false;
    search = _search;
    notifyListeners();
  }
}
