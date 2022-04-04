// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_photos.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelPhotos _$ParseModelPhotosFromJson(Map<String, dynamic> json) =>
    ParseModelPhotos(
      originalUrl: json['originalUrl'] as String?,
      thumbnailUrl: json['thumbnailUrl'] as String?,
      photoType: json['photoType'] as String?,
      restaurantId: json['restaurantId'] as String?,
      recipeId: json['recipeId'] as String?,
      uniqueId: json['uniqueId'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      userId: json['userId'] as String?,
      creatorId: json['creatorId'] as String?,
      flag: json['flag'] as String?,
      offlinePath: json['offlinePath'] as String?,
      extraNote: json['extraNote'] as String?,
      username: json['username'] as String?,
      avatarUrl: json['avatarUrl'] as String?,
    );

Map<String, dynamic> _$ParseModelPhotosToJson(ParseModelPhotos instance) =>
    <String, dynamic>{
      'originalUrl': instance.originalUrl,
      'thumbnailUrl': instance.thumbnailUrl,
      'photoType': instance.photoType,
      'restaurantId': instance.restaurantId,
      'recipeId': instance.recipeId,
      'uniqueId': instance.uniqueId,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'userId': instance.userId,
      'creatorId': instance.creatorId,
      'flag': instance.flag,
      'offlinePath': instance.offlinePath,
      'extraNote': instance.extraNote,
      'username': instance.username,
      'avatarUrl': instance.avatarUrl,
    };
