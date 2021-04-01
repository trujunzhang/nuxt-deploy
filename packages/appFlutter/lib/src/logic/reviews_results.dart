import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';

List<ParseModelReviews> parseReviewsFilterByRestaurant(
    {List<DocumentSnapshot> datas, String restaurantId}) {
  List<ParseModelReviews> result = datas
      .map((DocumentSnapshot snapshot) {
        return ParseModelReviews.fromJson(snapshot.data());
      })
      .where((ParseModelReviews value) => value.restaurantId == restaurantId)
      .toList();
  return result;
}

List<ParseModelReviews> parseReviews(List<DocumentSnapshot> datas) {
  List<ParseModelReviews> result = datas.map((DocumentSnapshot snapshot) {
    return ParseModelReviews.fromJson(snapshot.data());
  }).toList();
  return result;
}
