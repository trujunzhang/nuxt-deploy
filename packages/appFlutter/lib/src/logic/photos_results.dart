import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

bool photoIsInRestaurant(
    ParseModelRestaurants restaurant, ParseModelPhotos photo) {
  if (restaurant.geoHash == photo.geoHash) {
    return true;
  }
  return photo.restaurantId == restaurant.uniqueId;
}

List<ParseModelPhotos> parsePhotosFilterByRestaurant(
    {List<DocumentSnapshot> datas, ParseModelRestaurants restaurant}) {
  List<ParseModelPhotos> result = datas
      .map((DocumentSnapshot snapshot) {
        return ParseModelPhotos.fromJson(snapshot.data);
      })
      // .where((ParseModelPhotos value) => photoIsInRestaurant(restaurant, value))
      .toList();
  return result;
}
