import 'package:flutter/cupertino.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:location/location.dart';

import 'Avatar_user.dart';
import 'Database.dart';

class ParseModelPhotos extends AvatarUser {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // user(2)
  String username;
  String avatarUrl;

  // Common(3)
  String originalUrl;
  String thumbnailUrl;
  String url;

  // point(4)
  final String photoType;
  final String restaurantId;
  final String recipeId;
  final String userId;

  // Location(3)
  final String geoHash;
  final double latitude;
  final double longitude;

  // offline(1)
  final String offlinePath;

  // extra(1)
  String extraNote;

  ParseModelPhotos({
    // Base(5)
    this.uniqueId,
    this.creatorId,
    this.createdAt,
    this.updatedAt,
    this.flag,
    // user(2)
    this.username,
    this.avatarUrl,
    // Common
    this.originalUrl,
    this.thumbnailUrl,
    this.url,
    // point(4)
    this.photoType,
    this.restaurantId,
    this.recipeId,
    this.userId,
    // Location(3)
    this.geoHash,
    this.latitude,
    this.longitude,
    // offline(1)
    this.offlinePath,
    // extra(1)
    this.extraNote,
  }) : super(username, avatarUrl);

  factory ParseModelPhotos.fromJson(Map<String, dynamic> json) {
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // user(2)
    var username = json['username'] as String;
    var avatarUrl = json['avatarUrl'] as String;

    // extra(1)
    var extraNote = json['extraNote'] as String;
    // Common
    var originalUrl = json['originalUrl'] as String;
    var thumbnailUrl = json['thumbnailUrl'] as String;
    var url = json['url'] as String;

    // point(4)
    var photoType = json['photoType'] as String;
    var restaurantId = json['restaurantId'] as String;
    var recipeId = json['recipeId'] as String;
    var userId = json['userId'] as String;

    // Location(3)
    var geoHash = json['geoHash'] as String;
    var latitude = json['latitude'] as double;
    var longitude = json['longitude'] as double;

    // offline(1)
    var offlinePath = json['offlinePath'] as String;

    return ParseModelPhotos(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // user(2)
      username: username,
      avatarUrl: avatarUrl,
      // Location(3)
      geoHash: geoHash,
      latitude: latitude,
      longitude: longitude,
      // Common
      originalUrl: originalUrl,
      thumbnailUrl: thumbnailUrl,
      url: url,
      // point(4)
      photoType: photoType,
      restaurantId: restaurantId,
      recipeId: recipeId,
      userId: userId,
      // offline(1)
      offlinePath: offlinePath,
      // extra(1)
      extraNote: extraNote,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      "uniqueId": uniqueId,
      "creatorId": creatorId,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "flag": flag,
      // user(2)
      "username": username,
      "avatarUrl": avatarUrl,
      // Common(3)
      "thumbnailUrl": thumbnailUrl,
      "originalUrl": originalUrl,
      // point(4)
      "photoType": photoType,
      "restaurantId": restaurantId,
      "recipeId": recipeId,
      "userId": userId,
      // Location(3)
      "geoHash": geoHash,
      "latitude": latitude,
      "longitude": longitude,
      // offline(1)
      "offlinePath": offlinePath,
      // extra(1)
      'extraNote': extraNote,
    };
  }

  static ParseModelPhotos emptyPhoto(
      {@required AuthUserModel authUserModel,
      @required String filePath,
      @required LocationData locationData}) {
    return ParseModelPhotos(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // user(2)
      username: authUserModel.username,
      avatarUrl: authUserModel.avatarUrl,
      // Location(3)
      geoHash: convertToGeoHash(locationData.latitude, locationData.longitude),
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      // Common
      originalUrl: '',
      thumbnailUrl: '',
      url: '',
      // point(4)
      photoType: '',
      restaurantId: '',
      recipeId: '',
      userId: '',
      // offline(1)
      offlinePath: filePath,
      // extra(1)
      extraNote: '',
    );
  }

  static ParseModelPhotos updateFromCloudinary({
    @required ParseModelPhotos model,
    @required String originalUrl,
  }) {
    model.originalUrl = originalUrl;
    return model;
  }

  static ParseModelPhotos updatePhoto(
      {@required ParseModelPhotos model, @required String nextExtraNote}) {
    model.extraNote = nextExtraNote;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }
}
