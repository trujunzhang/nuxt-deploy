import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/logic/bloc.dart';

List<ParseModelRestaurants> parseRestaurants(List<DocumentSnapshot> datas) {
  List<ParseModelRestaurants> result = datas
      .map((DocumentSnapshot snapshot) {
        return ParseModelRestaurants.fromJson(snapshot.data());
      })
      .where((value) => value != null)
      .toList();
  bloc.restaurantCountVal(result.length);
//  print('Search restaurants: ' + result.length.toString());
  return result;
}

bool matchString(String firstVal, String secondVal) {
  var result = (firstVal.toLowerCase().contains(secondVal.toLowerCase()));
  return result;
}
