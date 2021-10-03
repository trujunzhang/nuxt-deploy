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
      required this.uniqueId,
      required this.creatorId,
      required this.createdAt,
      required this.updatedAt,
      required this.flag,
      // Common(1)
      required this.recipes,
      // point(3)
      required this.restaurantId,
      required this.eventId,
      required this.userId});

  factory ParseModelPeopleInEvent.fromJson(Map<String, dynamic> json) {
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // Common(1)
    List<String> recipes = json['recipes'].cast<String>();

    // point(3)
    String restaurantId = json['restaurantId'];
    String eventId = json['eventId'];
    String userId = json['userId'];

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

  static emptyPeopleInEvent({required AuthUserModel? authUserModel}) {
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
    List<String> nextRecipes = model.recipes;
    nextRecipes.add(recipeId);
    // Delete duplicates from a list
    model.recipes = nextRecipes.toSet().toList();

    return model;
  }

  static ParseModelPeopleInEvent removeRecipe({
    required ParseModelPeopleInEvent model,
    required String recipeId,
  }) {
    List<String> nextRecipes = model.recipes;
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
