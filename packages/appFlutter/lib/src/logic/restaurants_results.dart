import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:geoflutterfire/geoflutterfire.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:ieatta/src/screens/restaurants/body/page_body.dart';
import 'package:ieatta/src/screens/restaurants/empty/search_empty.dart';
import 'package:ieatta/src/screens/restaurants/empty/track_empty.dart';
import 'package:location/location.dart';

String getRestaurantsCountInfo({
  @required bool gpsTrackVal,
  @required int restaurantsCountVal,
}) {
  if (gpsTrackVal) {
    return 'Auto location tracking';
  }

  return '$restaurantsCountVal restaurants found';
}

List<ParseModelRestaurants> parseRestaurants(List<DocumentSnapshot> datas) {
  List<ParseModelRestaurants> result = datas
      .map((DocumentSnapshot snapshot) {
        return ParseModelRestaurants.fromJson(snapshot.data);
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

bool matchLocation(DocumentSnapshot firstVal, LocationData secondVal) {
  Geoflutterfire geo = Geoflutterfire();
  GeoFirePoint myLocation = geo.point(
      latitude: firstVal.data['latitude'],
      longitude: firstVal.data['longitude']);
  var distance =
      myLocation.distance(lat: secondVal.latitude, lng: secondVal.longitude);
//  if (firstVal.data['displayName'] == 'city run') {
//    print('distance: ' + distance.toString());
//  }
  return distance <= 0.1;
}

List<ParseModelRestaurants> getSearchedExploreList(
  List<DocumentSnapshot> datas,
  searchVal,
) {
  List<DocumentSnapshot> listLocal = [];
  for (int i = 0; i < datas.length; ++i) {
    if (matchString(datas[i].data['displayName'], searchVal)) {
      listLocal.add(datas[i]);
    }
  }

  return parseRestaurants(listLocal);
}

//This is a custom logic to perform Text Based Search from FireStore.
//a.k.a my biggest fear before implicating, Now its a piece of Cake.
Widget searchedExploreList(
  List<DocumentSnapshot> datas,
  searchVal,
) {
  List<DocumentSnapshot> listLocal = [];
  for (int i = 0; i < datas.length; ++i) {
    if (matchString(datas[i].data['displayName'], searchVal)) {
      listLocal.add(datas[i]);
    }
  }
  bloc.restaurantCountVal(listLocal.length);
  print('Search restaurants: ' + listLocal.length.toString());
  return (listLocal.length != 0)
      ? PageBody(
          restaurantList: parseRestaurants(listLocal),
        )
      : SearchEmpty();
}

List<ParseModelRestaurants> getTrackingExploreList(
    List<DocumentSnapshot> datas, LocationData locationVal) {
  List<DocumentSnapshot> listLocal = [];
  for (int i = 0; i < datas.length; ++i) {
    if (matchLocation(datas[i], locationVal)) {
      listLocal.add(datas[i]);
    }
  }
  return parseRestaurants(listLocal);
}

Widget trackingExploreList(
    List<DocumentSnapshot> datas, LocationData locationVal) {
  List<DocumentSnapshot> listLocal = [];
  for (int i = 0; i < datas.length; ++i) {
    if (matchLocation(datas[i], locationVal)) {
      listLocal.add(datas[i]);
    }
  }
  return (listLocal.length != 0)
      ? PageBody(
          restaurantList: parseRestaurants(listLocal),
        )
      : TrackEmpty();
}
