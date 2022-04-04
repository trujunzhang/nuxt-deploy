// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_people_in_event.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelPeopleInEvent _$ParseModelPeopleInEventFromJson(
        Map<String, dynamic> json) =>
    ParseModelPeopleInEvent(
      restaurantId: json['restaurantId'] as String?,
      eventId: json['eventId'] as String?,
      userId: json['userId'] as String?,
      recipes:
          (json['recipes'] as List<dynamic>?)?.map((e) => e as String).toList(),
      uniqueId: json['uniqueId'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      creatorId: json['creatorId'] as String?,
      flag: json['flag'] as String?,
    );

Map<String, dynamic> _$ParseModelPeopleInEventToJson(
        ParseModelPeopleInEvent instance) =>
    <String, dynamic>{
      'restaurantId': instance.restaurantId,
      'eventId': instance.eventId,
      'userId': instance.userId,
      'recipes': instance.recipes,
      'uniqueId': instance.uniqueId,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'creatorId': instance.creatorId,
      'flag': instance.flag,
    };
