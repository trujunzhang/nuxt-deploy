import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/utils/md5_utils.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

import 'Database.dart';

class ParseModelPeopleInEvent {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  final String updatedAt;
  final String flag;

  // Common(1)
  List<String> recipes;

  // point(3)
  String restaurantId;
  String eventId;
  String userId;

  ParseModelPeopleInEvent(
      {
      // Base(5)
      this.uniqueId,
      this.creatorId,
      this.createdAt,
      this.updatedAt,
      this.flag,
      // Common(1)
      this.recipes,
      // point(3)
      this.restaurantId,
      this.eventId,
      this.userId});

  factory ParseModelPeopleInEvent.fromJson(Map<String, dynamic> json) {
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(1)
    var recipes = json['recipes'].cast<String>();

    // point(3)
    var restaurantId = json['restaurantId'] as String;
    var eventId = json['eventId'] as String;
    var userId = json['userId'] as String;

    return ParseModelPeopleInEvent(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // Common(1)
      recipes: recipes,
      // point(3)
      restaurantId: restaurantId,
      eventId: eventId,
      userId: userId,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      // Base(5)
      "uniqueId": uniqueId,
      "creatorId": creatorId,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "flag": flag,
      // Common(3)
      "recipes": recipes,
      // point(4)
      "restaurantId": restaurantId,
      "eventId": eventId,
      "userId": userId,
    };
  }

  static emptyPeopleInEvent({@required AuthUserModel authUserModel}) {
    return ParseModelPeopleInEvent(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
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
    @required ParseModelPeopleInEvent model,
    @required String recipeId,
  }) {
    List<String> nextRecipes = model.recipes;
    nextRecipes.add(recipeId);
    model.recipes = nextRecipes;

    return model;
  }

  static ParseModelPeopleInEvent updatePeopleInEvent({
    @required ParseModelPeopleInEvent model,
    @required String restaurantId,
    @required String eventId,
    @required String userId,
  }) {
    // point(3)
    model.restaurantId = restaurantId;
    model.eventId = eventId;
    model.userId = userId;

    return model;
  }
}
