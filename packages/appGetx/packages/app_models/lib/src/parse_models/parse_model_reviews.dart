import 'package:app_models/src/enum/index.dart';
import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_reviews.g.dart';

@JsonSerializable()
class ParseModelReviews extends AvatarUser {
  String? flag;
  String? reviewType;
  double? rate;
  String? body;
  String? uniqueId;
  String? createdAt;
  String? updatedAt;
  String? creatorId;
  String? restaurantId;
  String? eventId;
  String? recipeId;
  String? username;
  String? avatarUrl;

  ParseModelReviews({
    this.flag,
    this.reviewType,
    this.rate,
    this.body,
    this.uniqueId,
    this.createdAt,
    this.updatedAt,
    this.creatorId,
    this.restaurantId,
    this.eventId,
    this.recipeId,
    this.username,
    this.avatarUrl,
  }) : super(creatorId!, username, avatarUrl);

  factory ParseModelReviews.fromJson(Map<String, dynamic> json) {
    return _$ParseModelReviewsFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelReviewsToJson(this);

  static create(
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
      reviewType: reviewType.vnText,
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
    if (mode.reviewType == ReviewType.Restaurant.vnText) {
      return mode.restaurantId!;
    }
    if (mode.reviewType == ReviewType.Event.vnText) {
      return mode.eventId!;
    }
    if (mode.reviewType == ReviewType.Recipe.vnText) {
      return mode.recipeId!;
    }
    return '';
  }
}
