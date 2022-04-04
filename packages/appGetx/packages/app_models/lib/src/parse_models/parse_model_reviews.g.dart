// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_reviews.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelReviews _$ParseModelReviewsFromJson(Map<String, dynamic> json) =>
    ParseModelReviews(
      flag: json['flag'] as String?,
      reviewType: json['reviewType'] as String?,
      rate: (json['rate'] as num?)?.toDouble(),
      body: json['body'] as String?,
      uniqueId: json['uniqueId'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      creatorId: json['creatorId'] as String?,
      restaurantId: json['restaurantId'] as String?,
      eventId: json['eventId'] as String?,
      recipeId: json['recipeId'] as String?,
      username: json['username'] as String?,
      avatarUrl: json['avatarUrl'] as String?,
    );

Map<String, dynamic> _$ParseModelReviewsToJson(ParseModelReviews instance) =>
    <String, dynamic>{
      'flag': instance.flag,
      'reviewType': instance.reviewType,
      'rate': instance.rate,
      'body': instance.body,
      'uniqueId': instance.uniqueId,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'creatorId': instance.creatorId,
      'restaurantId': instance.restaurantId,
      'eventId': instance.eventId,
      'recipeId': instance.recipeId,
      'username': instance.username,
      'avatarUrl': instance.avatarUrl,
    };
