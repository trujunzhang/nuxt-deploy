import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

List<ParseModelPhotos> parsePhotosFilterByRestaurant(
    {List<DocumentSnapshot> datas, ParseModelRestaurants restaurant}) {
  List<ParseModelPhotos> result = datas
      .map((DocumentSnapshot snapshot) {
        return ParseModelPhotos.fromJson(snapshot.data);
      })
      .where((ParseModelPhotos value) => value.restaurantId == restaurant.uniqueId)
      .toList();
  return result;
}
