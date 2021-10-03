import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

import 'Base_Review.dart';
import 'Database.dart';

class ParseModelRecipes extends BaseReview {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // Common(5)
  String displayName;
  String slug;
  String price;
  final String thumbnailUrl;
  String originalUrl;

  // for review(2)
  int rate;
  int reviewCount;

  // point(1)
  final String restaurantId;

  ParseModelRecipes(
      {
      // Base(5)
      required this.uniqueId,
      required this.creatorId,
      required this.createdAt,
      required this.updatedAt,
      required this.flag,
      // Common(5)
      required this.displayName,
      required this.slug,
      required this.price,
      required this.thumbnailUrl,
      required this.originalUrl,
      // for review(2)
      required this.rate,
      required this.reviewCount,
      // point(1)
      required this.restaurantId})
      : super(rate, reviewCount);

  factory ParseModelRecipes.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(5)
    String displayName = json['displayName'];
    String slug = json['slug'];
    String price = json['price'];
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
    // point(1)
    String restaurantId = json['restaurantId'];

    return ParseModelRecipes(
        // Base(5)
        uniqueId: databaseBaseModel.uniqueId,
        creatorId: databaseBaseModel.creatorId,
        createdAt: databaseBaseModel.createdAt,
        updatedAt: databaseBaseModel.updatedAt,
        flag: databaseBaseModel.flag,
        // Common(5)
        displayName: displayName,
        slug: slug,
        price: price,
        thumbnailUrl: thumbnailUrl,
        originalUrl: originalUrl,
        // for review(2)
        rate: rate,
        reviewCount: reviewCount,
        // point(1)
        restaurantId: restaurantId);
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      "uniqueId": uniqueId,
      "creatorId": creatorId,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "flag": flag,
      // Common(5)
      "displayName": displayName,
      'slug': slug,
      "price": price,
      'thumbnailUrl': thumbnailUrl,
      'originalUrl': originalUrl,
      // for review(2)
      'rate': rate,
      'reviewCount': reviewCount,
      // point(1)
      "restaurantId": restaurantId,
    };
  }

  static emptyRecipe({required AuthUserModel? authUserModel, required String restaurantId}) {
    return ParseModelRecipes(
        // Base(5)
        uniqueId: documentIdFromCurrentDate(),
        creatorId: authUserModel!.uid,
        createdAt: getDateStringForCreatedOrUpdatedDate(),
        updatedAt: getDateStringForCreatedOrUpdatedDate(),
        flag: '1',
        // Common(5)
        displayName: '',
        slug: '',
        price: '',
        thumbnailUrl: '',
        originalUrl: '',
        // for review(2)
        rate: 0,
        reviewCount: 0,
        // point(1)
        restaurantId: restaurantId);
  }

  static ParseModelRecipes updateCover({required ParseModelRecipes model, required String originalUrl}) {
    model.originalUrl = originalUrl;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  static ParseModelRecipes updateRecipe({
    required ParseModelRecipes model,
    required String nextDisplayName,
    required String nextPrice,
  }) {
    // DisplayName
    model.displayName = nextDisplayName;
    model.slug = slugifyToLower(nextDisplayName);
    // Others
    model.price = nextPrice;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }
}
