import 'package:flutter_test/flutter_test.dart';
import 'package:getx_firebase/src/data/model/index.dart';
import 'package:getx_firebase/src/utils/index.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "createdAt": "2017-10-09T06:02:52.325+0000",
    "creatorId": "trujunzhang_id",
    "updatedAt": "2017-10-09T06:35:46.537+0000",
    "uniqueId": "0b92b483-8860-438b-961d-4fef4b124176",
    "flag": "1",
    // extra(1)
    "extraNote": "",
    // Check google(1)
    "isNew": false,
    // Location(3)
    "geoHash": "hb00nb521bn8",
    "latitude": -118.247636,
    "longitude": 34.051178,
    // Common(4)
    "displayName": "Carl Jr",
    "slug": "carl-jr",
    "originalUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg",
    "thumbnailUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw",
    // for review(2)
    "rate": 123,
    "reviewCount": 20,
    // Google api(8)
    "address": "250s S Broadway, Los Angeles, CA 90012, USA",
    "street_number": "250s",
    "route": "South Broadway",
    "locality": "Los Angeles",
    "sublocality": "",
    "country": "US",
    "postal_code": "3605",
    "administrative_area": "CA"
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelRestaurants.fromJson(json).toMap();

    // Base(5)
    expect(map['uniqueId'], '0b92b483-8860-438b-961d-4fef4b124176');
    expect(map['creatorId'], 'trujunzhang_id');
    expect(map['createdAt'], "2017-10-09T06:02:52.325+0000");
    expect(map['updatedAt'], '2017-10-09T06:35:46.537+0000');
    expect(map['flag'], '1');
    // extra(1)
    expect(map['extraNote'], '');
    // Check google(1)
    expect(map['isNew'], false);
    // Location(3)
    expect(map['geoHash'], 'hb00nb521bn8');
    expect(map['latitude'], -118.247636);
    expect(map['longitude'], 34.051178);
    // Common(4)
    expect(map['displayName'], 'Carl Jr');
    expect(map['slug'], 'carl-jr');
    expect(map['originalUrl'],
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg');
    expect(map['thumbnailUrl'],
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw");
    // for review(2)
    expect(map['rate'], 123);
    expect(map['reviewCount'], 20);
    // Google api(8)
    expect(map['address'], "250s S Broadway, Los Angeles, CA 90012, USA");
    expect(map['street_number'], '250s');
    expect(map['route'], 'South Broadway');
    expect(map['locality'], 'Los Angeles');
    expect(map['sublocality'], '');
    expect(map['country'], 'US');
    expect(map['postal_code'], '3605');
    expect(map['administrative_area'], 'CA');
  });

  test('Model from json should correctly', () {
    ParseModelRestaurants model = ParseModelRestaurants.fromJson(json);

    // Base(5)
    expect(model.uniqueId, '0b92b483-8860-438b-961d-4fef4b124176');
    expect(model.creatorId, 'trujunzhang_id');
    expect(model.createdAt, "2017-10-09T06:02:52.325+0000");
    expect(model.updatedAt, '2017-10-09T06:35:46.537+0000');
    expect(model.flag, '1');
    // extra(1)
    expect(model.extraNote, '');
    // Check google(1)
    expect(model.isNew, false);
    // Location(3)
    expect(model.geoHash, 'hb00nb521bn8');
    expect(model.latitude, -118.247636);
    expect(model.longitude, 34.051178);
    // Common(4)
    expect(model.displayName, 'Carl Jr');
    expect(model.slug, 'carl-jr');
    expect(model.originalUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg');
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw");
    // for review(2)
    expect(model.rate, 123);
    expect(model.reviewCount, 20);
    // Google api(8)
    expect(model.address, "250s S Broadway, Los Angeles, CA 90012, USA");
    expect(model.street_number, '250s');
    expect(model.route, 'South Broadway');
    expect(model.locality, 'Los Angeles');
    expect(model.sublocality, '');
    expect(model.country, 'US');
    expect(model.postal_code, '3605');
    expect(model.administrative_area, 'CA');
  });

  test('Updated model should correctly', () {
    ParseModelRestaurants model = ParseModelRestaurants.updateRestaurant(
        model: ParseModelRestaurants.fromJson(json),
        nextDisplayName: 'next Display Name',
        nextExtraNote: 'nextExtraNote');

    // Base(5)
    expect(model.uniqueId, '0b92b483-8860-438b-961d-4fef4b124176');
    expect(model.creatorId, 'trujunzhang_id');
    expect(model.createdAt, "2017-10-09T06:02:52.325+0000");
    expect(model.updatedAt != '2017-10-09T06:35:46.537+0000', true);
    expect(model.flag, '1');
    // extra(1)
    expect(model.extraNote, 'nextExtraNote');
    // Check google(1)
    expect(model.isNew, false);
    // Location(3)
    expect(model.geoHash, 'hb00nb521bn8');
    expect(model.latitude, -118.247636);
    expect(model.longitude, 34.051178);
    // Common(4)
    expect(model.displayName, 'next Display Name');
    expect(model.slug, 'next-display-name');
    expect(model.originalUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg');
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw");
    // for review(2)
    expect(model.rate, 123);
    expect(model.reviewCount, 20);
    // Google api(8)
    expect(model.address, "250s S Broadway, Los Angeles, CA 90012, USA");
    expect(model.street_number, '250s');
    expect(model.route, 'South Broadway');
    expect(model.locality, 'Los Angeles');
    expect(model.sublocality, '');
    expect(model.country, 'US');
    expect(model.postal_code, '3605');
    expect(model.administrative_area, 'CA');
  });

  test('Empty restaurant should correctly', () {
    AuthUserModel authUserModel = AuthUserModel.mockedUser();
    ParseModelRestaurants model = ParseModelRestaurants.emptyRestaurant(
      authUserModel: authUserModel,
      latitude: -118.247636,
      longitude: 34.051178,
    );

    // Base(5)
    expect(model.uniqueId.length > 0, true);
    expect(model.creatorId, authUserModel.uid);
    expect(model.createdAt != '', true);
    expect(model.updatedAt != '', true);
    expect(model.flag, '1');
    // extra(1)
    expect(model.extraNote, '');
    // Check google(1)
    expect(model.isNew, true);
    // Location(3)
    expect(model.geoHash, 'ufbpqcem9fyx'.substring(0, numberOfCharsForPhoto));
    expect(model.latitude, -118.247636);
    expect(model.longitude, 34.051178);
    // Common(4)
    expect(model.displayName, '');
    expect(model.slug, '');
    expect(model.originalUrl, '');
    expect(model.thumbnailUrl, "");
    // for review(2)
    expect(model.rate, 0);
    expect(model.reviewCount, 0);
    // Google api(8)
    expect(model.address, "");
    expect(model.street_number, '');
    expect(model.route, '');
    expect(model.locality, '');
    expect(model.sublocality, '');
    expect(model.country, '');
    expect(model.postal_code, '');
    expect(model.administrative_area, '');
  });
}
