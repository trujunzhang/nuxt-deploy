import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_recipes.g.dart';

@JsonSerializable()
class ParseModelRecipes extends BaseReview {
  String? creatorId;
  String? displayName;
  String? slug;
  String? price;
  double? rate;
  int? reviewCount;
  String? uniqueId;
  String? createdAt;
  String? updatedAt;
  String? originalUrl;
  String? thumbnailUrl;
  String? restaurantId;
  String? flag;

  ParseModelRecipes({
    this.creatorId,
    this.displayName,
    this.slug,
    this.price,
    this.rate,
    this.reviewCount,
    this.uniqueId,
    this.createdAt,
    this.updatedAt,
    this.originalUrl,
    this.thumbnailUrl,
    this.restaurantId,
    this.flag,
  }) : super(rate, reviewCount);

  factory ParseModelRecipes.fromJson(Map<String, dynamic> json) {
    return _$ParseModelRecipesFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelRecipesToJson(this);

  static create({
    required AuthUserModel? authUserModel,
    required String restaurantId,
  }) {
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

  static ParseModelRecipes updateCover({
    required ParseModelRecipes model,
    required String originalUrl,
  }) {
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
