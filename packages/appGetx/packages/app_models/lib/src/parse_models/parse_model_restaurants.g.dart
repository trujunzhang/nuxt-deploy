// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_restaurants.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelRestaurants _$ParseModelRestaurantsFromJson(
        Map<String, dynamic> json) =>
    ParseModelRestaurants(
      isNew: json['isNew'] as bool?,
      uniqueId: json['uniqueId'] as String?,
      extraNote: json['extraNote'] as String?,
      creatorId: json['creatorId'] as String?,
      flag: json['flag'] as String?,
      address: json['address'] as String?,
      displayName: json['displayName'] as String?,
      originalUrl: json['originalUrl'] as String?,
      thumbnailUrl: json['thumbnailUrl'] as String?,
      latitude: (json['latitude'] as num?)?.toDouble(),
      longitude: (json['longitude'] as num?)?.toDouble(),
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      rate: (json['rate'] as num?)?.toDouble(),
      reviewCount: json['reviewCount'] as int?,
      streetNumber: json['street_number'] as String?,
      route: json['route'] as String?,
      locality: json['locality'] as String?,
      sublocality: json['sublocality'] as String?,
      country: json['country'] as String?,
      postalCode: json['postal_code'] as String?,
      administrativeArea: json['administrative_area'] as String?,
      slug: json['slug'] as String?,
      geoHash: json['geoHash'] as String?,
    );

Map<String, dynamic> _$ParseModelRestaurantsToJson(
        ParseModelRestaurants instance) =>
    <String, dynamic>{
      'isNew': instance.isNew,
      'uniqueId': instance.uniqueId,
      'extraNote': instance.extraNote,
      'creatorId': instance.creatorId,
      'flag': instance.flag,
      'address': instance.address,
      'displayName': instance.displayName,
      'originalUrl': instance.originalUrl,
      'thumbnailUrl': instance.thumbnailUrl,
      'latitude': instance.latitude,
      'longitude': instance.longitude,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'rate': instance.rate,
      'reviewCount': instance.reviewCount,
      'street_number': instance.streetNumber,
      'route': instance.route,
      'locality': instance.locality,
      'sublocality': instance.sublocality,
      'country': instance.country,
      'postal_code': instance.postalCode,
      'administrative_area': instance.administrativeArea,
      'slug': instance.slug,
      'geoHash': instance.geoHash,
    };
