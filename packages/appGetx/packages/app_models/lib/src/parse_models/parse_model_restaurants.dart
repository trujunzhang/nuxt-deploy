import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_restaurants.g.dart';

@JsonSerializable()
class ParseModelRestaurants extends BaseReview {
  bool? isNew;
  String? uniqueId;
  String? extraNote;
  String? creatorId;
  String? flag;
  String? address;
  String? displayName;
  String? originalUrl;
  String? thumbnailUrl;
  double? latitude;
  double? longitude;
  String? createdAt;
  String? updatedAt;
  double? rate;
  int? reviewCount;
  @JsonKey(name: 'street_number')
  String? streetNumber;
  String? route;
  String? locality;
  String? sublocality;
  String? country;
  @JsonKey(name: 'postal_code')
  String? postalCode;
  @JsonKey(name: 'administrative_area')
  String? administrativeArea;
  String? slug;
  String? geoHash;

  ParseModelRestaurants({
    this.isNew,
    this.uniqueId,
    this.extraNote,
    this.creatorId,
    this.flag,
    this.address,
    this.displayName,
    this.originalUrl,
    this.thumbnailUrl,
    this.latitude,
    this.longitude,
    this.createdAt,
    this.updatedAt,
    this.rate,
    this.reviewCount,
    this.streetNumber,
    this.route,
    this.locality,
    this.sublocality,
    this.country,
    this.postalCode,
    this.administrativeArea,
    this.slug,
    this.geoHash,
  }) : super(rate, reviewCount);

  factory ParseModelRestaurants.fromJson(Map<String, dynamic> json) {
    return _$ParseModelRestaurantsFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelRestaurantsToJson(this);

  static create({
    required AuthUserModel? authUserModel,
    required double latitude,
    required double longitude,
  }) {
    return ParseModelRestaurants(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel!.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // extra(1)
      extraNote: '',
      // Check google(1)
      isNew: true,
      // Location(3)
      geoHash: convertToGeoHash(latitude, longitude),
      latitude: latitude,
      longitude: longitude,
      // Common(4)
      displayName: '',
      slug: '',
      thumbnailUrl: '',
      originalUrl: '',
      // for review(2)
      rate: 0,
      reviewCount: 0,
      // Google api(8)
      address: '',
      streetNumber: '',
      route: '',
      locality: '',
      sublocality: '',
      country: '',
      postalCode: '',
      administrativeArea: '',
    );
  }

  static ParseModelRestaurants updateCover(
      {required ParseModelRestaurants model, required String originalUrl}) {
    model.originalUrl = originalUrl;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  static ParseModelRestaurants updateRestaurant(
      {required ParseModelRestaurants model,
      required String nextDisplayName,
      required String nextExtraNote}) {
    model.displayName = nextDisplayName;
    model.slug = slugifyToLower(nextDisplayName);
    model.extraNote = nextExtraNote;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

}
