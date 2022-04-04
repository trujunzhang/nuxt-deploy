import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_events.g.dart';

@JsonSerializable()
class ParseModelEvents extends BaseReview {
  String? displayName;
  String? slug;
  String? want;
  double? rate;
  int? reviewCount;
  String? creatorId;
  String? start;
  String? end;
  String? uniqueId;
  String? createdAt;
  String? updatedAt;
  String? restaurantId;
  List<String>? waiters;
  String? flag;

  ParseModelEvents({
    this.displayName,
    this.slug,
    this.want,
    this.rate,
    this.reviewCount,
    this.creatorId,
    this.start,
    this.end,
    this.uniqueId,
    this.createdAt,
    this.updatedAt,
    this.restaurantId,
    this.waiters,
    this.flag,
  }) : super(rate, reviewCount);

  factory ParseModelEvents.fromJson(Map<String, dynamic> json) {
    return _$ParseModelEventsFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelEventsToJson(this);

  static create(
      {required AuthUserModel? authUserModel, required String restaurantId}) {
    return ParseModelEvents(
        // Base(5)
        uniqueId: documentIdFromCurrentDate(),
        creatorId: authUserModel!.uid,
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
    required ParseModelEvents model,
    required String nextDisplayName,
    required String nextWant,
    required String nextStartDate,
    required String nextEndDate,
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
      {required ParseModelEvents model, required String waiterId}) {
    List<String> nextWaiters = model.waiters!;
    nextWaiters.add(waiterId);
    // Delete duplicates from a list
    model.waiters = nextWaiters.toSet().toList();

    return model;
  }

  static ParseModelEvents removeWaiter(
      {required ParseModelEvents model, required String waiterId}) {
    List<String> nextWaiters = model.waiters!;
    nextWaiters.remove(waiterId);
    model.waiters = nextWaiters;

    return model;
  }
}
