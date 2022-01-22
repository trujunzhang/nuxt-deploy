import 'package:my_plugin/my_plugin.dart';
import '../enum/fb_collections.dart';
import '../../utils/timeago_utils.dart';

import 'Avatar_user.dart';
import 'Database.dart';
import 'auth_user_model.dart';

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
  final String? restaurantId;
  final String? eventId;
  final String? recipeId;

  ParseModelReviews(
      {
      // Base(5)
      required this.uniqueId,
      required this.creatorId,
      required this.createdAt,
      required this.updatedAt,
      required this.flag,
      // Common(2)
      required this.rate,
      required this.body,
      // user(2)
      required this.username,
      required this.avatarUrl,
      // point(4)
      required this.reviewType,
      required this.restaurantId,
      required this.eventId,
      required this.recipeId})
      : super(creatorId, username, avatarUrl);

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

    String body = json['body'];

    // user(2)
    String username = json['username'];
    String avatarUrl = json['avatarUrl'];

    // point(4)
    String reviewType = json['reviewType'];
    String? restaurantId = json['restaurantId'];
    String? eventId = json['eventId'];
    String? recipeId = json['recipeId'];

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
      {required AuthUserModel? authUserModel,
      required ReviewType reviewType,
      required String relatedId}) {
    return ParseModelReviews(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel!.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // Common(2)
      rate: 0,
      body: '',
      // user(2)
      username: authUserModel.username!,
      avatarUrl: authUserModel.avatarUrl!,
      // point(4)
      reviewType: reviewTypeToString(reviewType),
      restaurantId: reviewType == ReviewType.Restaurant ? relatedId : "",
      eventId: reviewType == ReviewType.Event ? relatedId : "",
      recipeId: reviewType == ReviewType.Recipe ? relatedId : "",
    );
  }

  static ParseModelReviews updateReview(
      {ParseModelReviews? model, double? nextRate, String? nextExtraNote}) {
    model!.rate = nextRate!;
    model.body = nextExtraNote!;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  static String getRelatedId(ParseModelReviews mode) {
    if (mode.reviewType == reviewTypeToString(ReviewType.Restaurant)) {
      return mode.restaurantId!;
    }
    if (mode.reviewType == reviewTypeToString(ReviewType.Event)) {
      return mode.eventId!;
    }
    if (mode.reviewType == reviewTypeToString(ReviewType.Recipe)) {
      return mode.recipeId!;
    }
    return '';
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
