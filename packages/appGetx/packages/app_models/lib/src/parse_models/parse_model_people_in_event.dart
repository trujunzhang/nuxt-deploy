import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_people_in_event.g.dart';

@JsonSerializable()
class ParseModelPeopleInEvent {
  String? restaurantId;
  String? eventId;
  String? userId;
  List<String>? recipes;
  String? uniqueId;
  String? createdAt;
  String? updatedAt;
  String? creatorId;
  String? flag;

  ParseModelPeopleInEvent({
    this.restaurantId,
    this.eventId,
    this.userId,
    this.recipes,
    this.uniqueId,
    this.createdAt,
    this.updatedAt,
    this.creatorId,
    this.flag,
  });

  factory ParseModelPeopleInEvent.fromJson(Map<String, dynamic> json) {
    return _$ParseModelPeopleInEventFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelPeopleInEventToJson(this);

  static create({required AuthUserModel? authUserModel}) {
    return ParseModelPeopleInEvent(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel!.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // Common(1)
      recipes: [],
      // point(3)
      restaurantId: '',
      eventId: '',
      userId: '',
    );
  }

  static ParseModelPeopleInEvent addRecipe({
    required ParseModelPeopleInEvent model,
    required String recipeId,
  }) {
    List<String> nextRecipes = model.recipes!;
    nextRecipes.add(recipeId);
    // Delete duplicates from a list
    model.recipes = nextRecipes.toSet().toList();

    return model;
  }

  static ParseModelPeopleInEvent removeRecipe({
    required ParseModelPeopleInEvent model,
    required String recipeId,
  }) {
    List<String> nextRecipes = model.recipes!;
    nextRecipes.remove(recipeId);
    model.recipes = nextRecipes;

    return model;
  }

  static ParseModelPeopleInEvent updatePeopleInEvent({
    required ParseModelPeopleInEvent model,
    required String restaurantId,
    required String eventId,
    required String userId,
  }) {
    // point(3)
    model.restaurantId = restaurantId;
    model.eventId = eventId;
    model.userId = userId;

    return model;
  }
}
