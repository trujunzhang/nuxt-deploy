import 'package:flutter/material.dart';

class RecipeState with ChangeNotifier {
  String displayName;
  String price;
  String coverUrl;
  final String restaurantId;

  RecipeState({this.restaurantId, this.displayName, this.price, this.coverUrl});

  String getDisplayName() {
    return displayName;
  }

  String getPrice() {
    return price;
  }

  String getCoverUrl() {
    return coverUrl;
  }

  void setDisplayName(String _displayName) {
    displayName = _displayName;
    notifyListeners();
  }

  void setPrice(String _price) {
    price = _price;
    notifyListeners();
  }

  void setCoverUrl(String _coverUrl) {
    coverUrl = _coverUrl;
    notifyListeners();
  }
}
