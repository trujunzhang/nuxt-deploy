// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_events.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelEvents _$ParseModelEventsFromJson(Map<String, dynamic> json) =>
    ParseModelEvents(
      displayName: json['displayName'] as String?,
      slug: json['slug'] as String?,
      want: json['want'] as String?,
      rate: (json['rate'] as num?)?.toDouble(),
      reviewCount: json['reviewCount'] as int?,
      creatorId: json['creatorId'] as String?,
      start: json['start'] as String?,
      end: json['end'] as String?,
      uniqueId: json['uniqueId'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      restaurantId: json['restaurantId'] as String?,
      waiters:
          (json['waiters'] as List<dynamic>?)?.map((e) => e as String).toList(),
      flag: json['flag'] as String?,
    );

Map<String, dynamic> _$ParseModelEventsToJson(ParseModelEvents instance) =>
    <String, dynamic>{
      'displayName': instance.displayName,
      'slug': instance.slug,
      'want': instance.want,
      'rate': instance.rate,
      'reviewCount': instance.reviewCount,
      'creatorId': instance.creatorId,
      'start': instance.start,
      'end': instance.end,
      'uniqueId': instance.uniqueId,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'restaurantId': instance.restaurantId,
      'waiters': instance.waiters,
      'flag': instance.flag,
    };
