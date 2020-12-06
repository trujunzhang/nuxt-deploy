import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/appModels/models/Database.dart';

class ParseModelRestaurants {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // extra(1)
  String extraNote;

  // Check google(1)
  final bool isNew;

  // Location(3)
  final String geoHash;
  final double latitude;
  final double longitude;

  // Common(4)
  String displayName;
  String slug;
  final String thumbnailUrl;
  String originalUrl;

  // for review(2)
  int rate;
  int reviewCount;

  // Google api(8)
  final String address;
  final String street_number;
  final String route;
  final String locality;
  final String sublocality;
  final String country;
  final String postal_code;
  final String administrative_area;

  ParseModelRestaurants({
    // Base(5)
    this.uniqueId,
    this.creatorId,
    this.createdAt,
    this.updatedAt,
    this.flag,
    // extra(1)
    this.extraNote,
    // Check google(1)
    this.isNew,
    // Location(3)
    this.geoHash,
    this.latitude,
    this.longitude,
    // Common(4)
    this.displayName,
    this.slug,
    this.thumbnailUrl,
    this.originalUrl,
    // for review(2)
    this.rate,
    this.reviewCount,
    // Google api(8)
    this.address,
    this.street_number,
    this.route,
    this.locality,
    this.sublocality,
    this.country,
    this.postal_code,
    this.administrative_area,
  });

  static emptyRestaurant({
    @required AuthUserModel authUserModel,
    @required double latitude,
    @required double longitude,
  }) {
    return ParseModelRestaurants(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // extra(1)
      extraNote: '',
      // Check google(1)
      isNew: true,
      // Location(3)
      geoHash: convertToGeoHash(latitude, longitude),
      latitude: latitude,
      longitude: longitude,
      // Common(4)
      displayName: '',
      slug: '',
      thumbnailUrl: '',
      originalUrl: '',
      // for review(2)
      rate: 0,
      reviewCount: 0,
      // Google api(8)
      address: '',
      street_number: '',
      route: '',
      locality: '',
      sublocality: '',
      country: '',
      postal_code: '',
      administrative_area: '',
    );
  }

  static ParseModelRestaurants updateCover(
      {@required ParseModelRestaurants model, @required String originalUrl}) {
    model.originalUrl = originalUrl;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  static ParseModelRestaurants updateRestaurant(
      {@required ParseModelRestaurants model,
      @required String nextDisplayName,
      @required String nextExtraNote}) {
    model.displayName = nextDisplayName;
    model.slug = slugifyToLower(nextDisplayName);
    model.extraNote = nextExtraNote;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  factory ParseModelRestaurants.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // extra(1)
    var extraNote = json['extraNote'] as String;
    // Check google(1)
    var isNew = json['isNew'] as bool;
    // Location(3)
    var geoHash = json['geoHash'] as String;
    var latitude = json['latitude'] as double;
    var longitude = json['longitude'] as double;
    // Common(4)
    var displayName = json['displayName'] as String;
    var slug = json['slug'] as String;
    var thumbnailUrl = json['thumbnailUrl'] as String;
    var originalUrl = json['originalUrl'] as String;
    // for review(2)
    var rate = json['rate'];
    if (rate is int) {
      rate = rate as int;
    }

    if (rate is double) {
      rate = rate.round();
    }

    var reviewCount = json['reviewCount'] as int;
    // Google api(8)
    var address = json['address'] as String;
    var street_number = json['street_number'] as String;
    var route = json['route'] as String;
    var locality = json['locality'] as String;
    var sublocality = json['sublocality'] as String;
    var country = json['country'] as String;
    var postal_code = json['postal_code'] as String;
    var administrative_area = json['administrative_area'] as String;

    return ParseModelRestaurants(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // extra(1)
      extraNote: extraNote,
      // Check google(1)
      isNew: isNew,
      // Location(3)
      geoHash: geoHash,
      latitude: latitude,
      longitude: longitude,
      // Common(4)
      displayName: displayName,
      slug: slug,
      thumbnailUrl: thumbnailUrl,
      originalUrl: originalUrl,
      // for review(2)
      rate: rate,
      reviewCount: reviewCount,
      // Google api(8)
      address: address,
      street_number: street_number,
      route: route,
      locality: locality,
      sublocality: sublocality,
      country: country,
      postal_code: postal_code,
      administrative_area: administrative_area,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      'uniqueId': uniqueId,
      'creatorId': creatorId,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
      'flag': flag,
      // extra(1)
      'extraNote': extraNote,
      // Check google(1)
      'isNew': isNew,
      // Location(3)
      'geoHash': geoHash,
      'latitude': latitude,
      'longitude': longitude,
      // Common(4)
      'displayName': displayName,
      'slug': slug,
      'thumbnailUrl': thumbnailUrl,
      'originalUrl': originalUrl,
      // for review(2)
      'rate': rate,
      'reviewCount': reviewCount,
      // Google api(8)
      'address': address,
      'street_number': street_number,
      'route': route,
      'locality': locality,
      'sublocality': sublocality,
      'country': country,
      'postal_code': postal_code,
      'administrative_area': administrative_area,
    };
  }
}
