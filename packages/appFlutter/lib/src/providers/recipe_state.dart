import 'package:flutter/material.dart';

class RecipeState with ChangeNotifier {
  String displayName;
  String price;
  final String restaurantId;

  RecipeState({
  this.restaurantId,
  this.displayName, this.price});

  String getDisplayName() {
    return displayName;
  }

  String getPrice() {
    return price;
  }

  void setDisplayName(String _displayName) {
    displayName = _displayName;
    notifyListeners();
  }

  void setPrice(String _price) {
    price = _price;
    notifyListeners();
  }

}
