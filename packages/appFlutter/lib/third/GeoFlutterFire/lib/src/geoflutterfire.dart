import './point.dart';
// import 'package:geoflutterfire/src/collection.dart';

class Geoflutterfire {
  Geoflutterfire();

  // GeoFireCollectionRef collection({required Query collectionRef}) {
  //   return GeoFireCollectionRef(collectionRef);
  // }

  GeoFirePoint point({required double latitude, required double longitude}) {
    return GeoFirePoint(latitude, longitude);
  }
}
