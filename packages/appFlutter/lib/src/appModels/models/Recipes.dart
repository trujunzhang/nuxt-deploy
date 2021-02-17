import 'Database.dart';

class ParseModelRecipes {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  final String updatedAt;
  final String flag;

  // Common(5)
  final String displayName;
  String slug;
  final String price;
  final String thumbnailUrl;
  String originalUrl;

  // for review(2)
  final int rate;
  final int reviewCount;

  // point(1)
  final String restaurantId;

  ParseModelRecipes(
      {
      // Base(5)
      this.uniqueId,
      this.creatorId,
      this.createdAt,
      this.updatedAt,
      this.flag,
      // Common(5)
      this.displayName,
      this.slug,
      this.price,
      this.thumbnailUrl,
      this.originalUrl,
      // for review(2)
      this.rate,
      this.reviewCount,
      // point(1)
      this.restaurantId});

  factory ParseModelRecipes.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(5)
    var displayName = json['displayName'] as String;
    var slug = json['slug'] as String;
    var price = json['price'] as String;
    var thumbnailUrl = json['thumbnailUrl'] as String;
    var originalUrl = json['originalUrl'] as String;

    // for review(2)
    var rate = json['rate'];
    if (rate is int) {
      rate = rate as int;
    }

    if (rate is double) {
      rate = rate.round();
    }

    var reviewCount = json['reviewCount'] as int;
    // point(1)
    var restaurantId = json['restaurantId'] as String;

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
}
