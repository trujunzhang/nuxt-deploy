import 'Database.dart';

class ParseModelPeopleInEvent {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  final String updatedAt;
  final String flag;

  // Common(1)
  final List<String> recipes;

  // point(3)
  final String restaurantId;
  final String eventId;
  final String userId;

  ParseModelPeopleInEvent({
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

}
