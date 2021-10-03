import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';

class ReviewState with ChangeNotifier {
  double rate;
  double lastRate;
  String body;
  ReviewType reviewType;
  String relatedId;

  ReviewState(
      {required this.rate,
      required this.lastRate,
      required this.body,
      required this.reviewType,
      required this.relatedId});

  double getRate() {
    return rate;
  }

  double getLastRate() {
    return lastRate;
  }

  String getBody() {
    return body;
  }

  ReviewType getReviewType() {
    return reviewType;
  }

  String getRelatedId() {
    return relatedId;
  }

  void setRate(double _rate) {
    rate = _rate;
    notifyListeners();
  }

  void setBody(String _body) {
    body = _body;
    notifyListeners();
  }
}
