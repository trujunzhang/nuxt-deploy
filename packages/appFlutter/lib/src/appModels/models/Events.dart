import 'Database.dart';

class ParseModelEvents {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  final String updatedAt;
  final String flag;

  // Common(4)
  final String displayName;
  final String want;
  final String start;
  final String end;

  // final DateTime start;
  // final DateTime end;

  // for review(2)
  int rate;
  int reviewCount;

  // point(1)
  final String restaurantId;

  ParseModelEvents(
      {
      // Base(5)
      this.uniqueId,
      this.creatorId,
      this.createdAt,
      this.updatedAt,
      this.flag,
      // Common(4)
      this.displayName,
      this.want,
      this.start,
      this.end,
        // for review(2)
        this.rate,
        this.reviewCount,
      // point(1)
      this.restaurantId});

  factory ParseModelEvents.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(4)
    var displayName = json['displayName'] as String;
    var want = json['want'] as String;
    var start = json['start'] as String;
    var end = json['end'] as String;

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

    return ParseModelEvents(
        // Base(5)
        uniqueId: databaseBaseModel.uniqueId,
        creatorId: databaseBaseModel.creatorId,
        createdAt: databaseBaseModel.createdAt,
        updatedAt: databaseBaseModel.updatedAt,
        flag: databaseBaseModel.flag,
        // Common(4)
        displayName: displayName,
        want: want,
        start: start,
        end: end,
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
      // Common(4)
      "displayName": displayName,
      "want": want,
      "start": start,
      "end": end,
      // for review(2)
      'rate': rate,
      'reviewCount': reviewCount,
      // point(1)
      "restaurantId": restaurantId,
    };
  }
}
