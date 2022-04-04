// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parse_model_recipes.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ParseModelRecipes _$ParseModelRecipesFromJson(Map<String, dynamic> json) =>
    ParseModelRecipes(
      creatorId: json['creatorId'] as String?,
      displayName: json['displayName'] as String?,
      slug: json['slug'] as String?,
      price: json['price'] as String?,
      rate: (json['rate'] as num?)?.toDouble(),
      reviewCount: json['reviewCount'] as int?,
      uniqueId: json['uniqueId'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      originalUrl: json['originalUrl'] as String?,
      thumbnailUrl: json['thumbnailUrl'] as String?,
      restaurantId: json['restaurantId'] as String?,
      flag: json['flag'] as String?,
    );

Map<String, dynamic> _$ParseModelRecipesToJson(ParseModelRecipes instance) =>
    <String, dynamic>{
      'creatorId': instance.creatorId,
      'displayName': instance.displayName,
      'slug': instance.slug,
      'price': instance.price,
      'rate': instance.rate,
      'reviewCount': instance.reviewCount,
      'uniqueId': instance.uniqueId,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'originalUrl': instance.originalUrl,
      'thumbnailUrl': instance.thumbnailUrl,
      'restaurantId': instance.restaurantId,
      'flag': instance.flag,
    };
