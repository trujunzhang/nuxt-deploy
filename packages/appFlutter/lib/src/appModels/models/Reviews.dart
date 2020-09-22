import 'package:flutter/cupertino.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

import 'Avatar_user.dart';
import 'Database.dart';

class ParseModelReviews extends AvatarUser {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // Common(2)
  double rate;
  String body;

  // user(2)
  final String username;
  final String avatarUrl;

  // point(4)
  final String reviewType;
  final String restaurantId;
  final String eventId;
  final String recipeId;

  ParseModelReviews(
      {
      // Base(5)
      this.uniqueId,
      this.creatorId,
      this.createdAt,
      this.updatedAt,
      this.flag,
      // Common(2)
      this.rate,
      this.body,
      // user(2)
      this.username,
      this.avatarUrl,
      // point(4)
      this.reviewType,
      this.restaurantId,
      this.eventId,
      this.recipeId})
      : super(username, avatarUrl);

  factory ParseModelReviews.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(2)
    var rate = json['rate'];
    if (rate is int) {
      rate = rate.toDouble();
    }

    if (rate is double) {
      rate = rate as double;
    }

    var body = json['body'] as String;

    // user(2)
    var username = json['username'] as String;
    var avatarUrl = json['avatarUrl'] as String;

    // point(4)
    var reviewType = json['reviewType'] as String;
    var restaurantId = json['restaurantId'] as String;
    var eventId = json['eventId'] as String;
    var recipeId = json['recipeId'] as String;

    return ParseModelReviews(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // Common(2)
      rate: rate,
      body: body,
      // user(2)
      username: username,
      avatarUrl: avatarUrl,
      // point(4)
      reviewType: reviewType,
      restaurantId: restaurantId,
      eventId: eventId,
      recipeId: recipeId,
    );
  }

  static emptyReview(
      {@required AuthUserModel authUserModel, @required String restaurantId}) {
    return ParseModelReviews(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // Common(2)
      rate: 0,
      body: '',
      // user(2)
      username: authUserModel.username,
      avatarUrl: authUserModel.avatarUrl,
      // point(4)
      reviewType: 'restaurant',
      restaurantId: restaurantId,
      eventId: '',
      recipeId: '',
    );
  }

  static ParseModelReviews updateReview(
      {ParseModelReviews model, double nextRate, String nextExtraNote}) {
    model.rate = nextRate;
    model.body = nextExtraNote;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      "uniqueId": uniqueId,
      "creatorId": creatorId,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "flag": flag,
      // Common(2)
      "rate": rate,
      "body": body,
      // user(2)
      "username": username,
      "avatarUrl": avatarUrl,
      // point(4)
      "reviewType": reviewType,
      "restaurantId": restaurantId,
      "eventId": eventId,
      "recipeId": recipeId,
    };
  }
}
