import 'package:my_plugin/my_plugin.dart';
import '../../utils/geohash_utils.dart';
import '../../utils/slug_helper.dart';
import '../../utils/timeago_utils.dart';

import 'Base_Review.dart';
import 'Database.dart';
import 'auth_user_model.dart';

class ParseModelRestaurants extends BaseReview {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // extra(1)
  String extraNote;

  // Check google(1)
  final bool isNew;

  // Location(3)
  final String geoHash;
  final double latitude;
  final double longitude;

  // Common(4)
  String displayName;
  String slug;
  final String thumbnailUrl;
  String originalUrl;

  // for review(2)
  int rate;
  int reviewCount;

  // Google api(8)
  final String? address;
  final String? street_number;
  final String? route;
  final String? locality;
  final String? sublocality;
  final String? country;
  final String? postal_code;
  final String? administrative_area;

  ParseModelRestaurants({
    // Base(5)
    required this.uniqueId,
    required this.creatorId,
    required this.createdAt,
    required this.updatedAt,
    required this.flag,
    // extra(1)
    required this.extraNote,
    // Check google(1)
    required this.isNew,
    // Location(3)
    required this.geoHash,
    required this.latitude,
    required this.longitude,
    // Common(4)
    required this.displayName,
    required this.slug,
    required this.thumbnailUrl,
    required this.originalUrl,
    // for review(2)
    required this.rate,
    required this.reviewCount,
    // Google api(8)
    required this.address,
    required this.street_number,
    required this.route,
    required this.locality,
    required this.sublocality,
    required this.country,
    required this.postal_code,
    required this.administrative_area,
  }) : super(rate, reviewCount);

  static emptyRestaurant({
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
      street_number: '',
      route: '',
      locality: '',
      sublocality: '',
      country: '',
      postal_code: '',
      administrative_area: '',
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

  factory ParseModelRestaurants.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // extra(1)
    String extraNote = json['extraNote'];
    // Check google(1)
    bool isNew = json['isNew'];
    // Location(3)
    String geoHash = json['geoHash'];
    double latitude = json['latitude'];
    double longitude = json['longitude'];
    // Common(4)
    String displayName = json['displayName'];
    String slug = json['slug'];
    String thumbnailUrl = json['thumbnailUrl'];
    String originalUrl = json['originalUrl'];
    // for review(2)
    var rate = json['rate'];
    if (rate is int) {
      rate = rate as int;
    }

    if (rate is double) {
      rate = rate.round();
    }

    int reviewCount = json['reviewCount'];
    // Google api(8)
    String address = json['address'];
    String street_number = json['street_number'];
    String route = json['route'];
    String locality = json['locality'];
    String sublocality = json['sublocality'];
    String country = json['country'];
    String postal_code = json['postal_code'];
    String administrative_area = json['administrative_area'];

    return ParseModelRestaurants(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // extra(1)
      extraNote: extraNote,
      // Check google(1)
      isNew: isNew,
      // Location(3)
      geoHash: geoHash,
      latitude: latitude,
      longitude: longitude,
      // Common(4)
      displayName: displayName,
      slug: slug,
      thumbnailUrl: thumbnailUrl,
      originalUrl: originalUrl,
      // for review(2)
      rate: rate,
      reviewCount: reviewCount,
      // Google api(8)
      address: address,
      street_number: street_number,
      route: route,
      locality: locality,
      sublocality: sublocality,
      country: country,
      postal_code: postal_code,
      administrative_area: administrative_area,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      'uniqueId': uniqueId,
      'creatorId': creatorId,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
      'flag': flag,
      // extra(1)
      'extraNote': extraNote,
      // Check google(1)
      'isNew': isNew,
      // Location(3)
      'geoHash': geoHash,
      'latitude': latitude,
      'longitude': longitude,
      // Common(4)
      'displayName': displayName,
      'slug': slug,
      'thumbnailUrl': thumbnailUrl,
      'originalUrl': originalUrl,
      // for review(2)
      'rate': rate,
      'reviewCount': reviewCount,
      // Google api(8)
      'address': address,
      'street_number': street_number,
      'route': route,
      'locality': locality,
      'sublocality': sublocality,
      'country': country,
      'postal_code': postal_code,
      'administrative_area': administrative_area,
    };
  }
}
