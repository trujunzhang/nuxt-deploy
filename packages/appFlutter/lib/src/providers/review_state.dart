import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';

class ReviewState with ChangeNotifier {
  double rate;
  String body;
  ReviewType reviewType;
  String relatedId;

  ReviewState({this.rate, this.body, this.reviewType, this.relatedId});

  double getRate() {
    return rate;
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
