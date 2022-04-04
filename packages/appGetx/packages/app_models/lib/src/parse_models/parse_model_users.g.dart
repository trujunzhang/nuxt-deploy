// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_users.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelUsers _$ParseModelUsersFromJson(Map<String, dynamic> json) =>
    ParseModelUsers(
      uniqueId: json['id'] as String?,
      username: json['username'] as String?,
      slug: json['slug'] as String?,
      email: json['email'] as String?,
      loginType: json['loginType'] as String?,
      originalUrl: json['originalUrl'] as String?,
      thumbnailUrl: json['thumbnailUrl'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
    );

Map<String, dynamic> _$ParseModelUsersToJson(ParseModelUsers instance) =>
    <String, dynamic>{
      'id': instance.uniqueId,
      'username': instance.username,
      'slug': instance.slug,
      'email': instance.email,
      'loginType': instance.loginType,
      'originalUrl': instance.originalUrl,
      'thumbnailUrl': instance.thumbnailUrl,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
    };
