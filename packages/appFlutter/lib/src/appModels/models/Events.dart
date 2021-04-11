import 'package:flutter/foundation.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

import 'Base_Review.dart';
import 'Database.dart';

class ParseModelEvents extends BaseReview {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  final String updatedAt;
  final String flag;

  // Common(5+1)
  String displayName;
  String slug;
  String want;
  String start;
  String end;
  List<String> waiters;

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
      // Common(5+1)
      this.displayName,
      this.slug,
      this.want,
      this.start,
      this.end,
      this.waiters,
      // for review(2)
      this.rate,
      this.reviewCount,
      // point(1)
      this.restaurantId})
      : super(rate, reviewCount);

  factory ParseModelEvents.fromJson(Map<String, dynamic> json) {
    // Base(5)
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(5+1)
    var displayName = json['displayName'] as String;
    var slug = json['slug'] as String;
    var want = json['want'] as String;
    var start = json['start'] as String;
    var end = json['end'] as String;
    var waiters = json['waiters'].cast<String>();

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
        // Common(5+1)
        displayName: displayName,
        slug: slug,
        want: want,
        start: start,
        end: end,
        waiters: waiters,
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
      // Common(5+1)
      "displayName": displayName,
      'slug': slug,
      "want": want,
      "start": start,
      "end": end,
      "waiters": waiters,
      // for review(2)
      'rate': rate,
      'reviewCount': reviewCount,
      // point(1)
      "restaurantId": restaurantId,
    };
  }

  static emptyEvent(
      {@required AuthUserModel authUserModel, @required String restaurantId}) {
    return ParseModelEvents(
        // Base(5)
        uniqueId: documentIdFromCurrentDate(),
        creatorId: authUserModel.uid,
        createdAt: getDateStringForCreatedOrUpdatedDate(),
        updatedAt: getDateStringForCreatedOrUpdatedDate(),
        flag: '1',
        // Common(5+1)
        displayName: '',
        slug: '',
        want: '',
        start: '',
        end: '',
        waiters: [],
        // for review(2)
        rate: 0,
        reviewCount: 0,
        // point(1)
        restaurantId: restaurantId);
  }

  static ParseModelEvents updateEvent({
    @required ParseModelEvents model,
    @required String nextDisplayName,
    @required String nextWant,
    @required String nextStartDate,
    @required String nextEndDate,
  }) {
    // DisplayName
    model.displayName = nextDisplayName;
    model.slug = slugifyToLower(nextDisplayName);
    // Others
    model.want = nextWant;
    model.start = nextStartDate;
    model.end = nextEndDate;

    return model;
  }

  static ParseModelEvents addWaiter(
      {@required ParseModelEvents model, @required String waiterId}) {
    List<String> nextWaiters = model.waiters;
    nextWaiters.add(waiterId);
    // Delete duplicates from a list
    model.waiters = nextWaiters.toSet().toList();

    return model;
  }

  static ParseModelEvents removeWaiter(
      {@required ParseModelEvents model, @required String waiterId}) {
    List<String> nextWaiters = model.waiters;
    nextWaiters.remove(waiterId);
    model.waiters = nextWaiters;

    return model;
  }
}
