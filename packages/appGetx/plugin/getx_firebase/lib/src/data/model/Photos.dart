import 'package:my_plugin/my_plugin.dart';
import '../enum/fb_collections.dart';
import '../../utils/timeago_utils.dart';

import 'Avatar_user.dart';
import 'Database.dart';
import 'auth_user_model.dart';

class ParseModelPhotos extends AvatarUser {
  // Base(5)
  final String uniqueId;
  final String creatorId;
  final String createdAt;
  String updatedAt;
  final String flag;

  // user(2)
  String username;
  String avatarUrl;

  // Common(3)
  String? originalUrl;
  String? thumbnailUrl;

  // point(4)
  final String photoType;
  final String? restaurantId;
  final String? recipeId;
  final String? userId;

  // offline(1)
  final String? offlinePath;

  // extra(1)
  String? extraNote;

  ParseModelPhotos({
    // Base(5)
    required this.uniqueId,
    required this.creatorId,
    required this.createdAt,
    required this.updatedAt,
    required this.flag,
    // user(2)
    required this.username,
    required this.avatarUrl,
    // Common
    required this.originalUrl,
    required this.thumbnailUrl,
    // point(4)
    required this.photoType,
    required this.restaurantId,
    required this.recipeId,
    required this.userId,
    // offline(1)
    required this.offlinePath,
    // extra(1)
    required this.extraNote,
  }) : super(creatorId, username, avatarUrl);

  factory ParseModelPhotos.fromJson(Map<String, dynamic> json) {
    DatabaseBaseModel databaseBaseModel = DatabaseBaseModel.fromJson(json);

    // user(2)
    String username = json['username'];
    String avatarUrl = json['avatarUrl'];

    // extra(1)
    String extraNote = json['extraNote'];
    // Common(3)
    String originalUrl = json['originalUrl'];
    String thumbnailUrl = json['thumbnailUrl'];

    // point(4)
    String photoType = json['photoType'];
    String? restaurantId = json['restaurantId'];
    String? recipeId = json['recipeId'];
    String? userId = json['userId'];

    // offline(1)
    String? offlinePath = json['offlinePath'];

    return ParseModelPhotos(
      // Base(5)
      uniqueId: databaseBaseModel.uniqueId,
      creatorId: databaseBaseModel.creatorId,
      createdAt: databaseBaseModel.createdAt,
      updatedAt: databaseBaseModel.updatedAt,
      flag: databaseBaseModel.flag,
      // user(2)
      username: username,
      avatarUrl: avatarUrl,
      // Common
      originalUrl: originalUrl,
      thumbnailUrl: thumbnailUrl,
      // point(4)
      photoType: photoType,
      restaurantId: restaurantId,
      recipeId: recipeId,
      userId: userId,
      // offline(1)
      offlinePath: offlinePath,
      // extra(1)
      extraNote: extraNote,
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
      // user(2)
      "username": username,
      "avatarUrl": avatarUrl,
      // Common(3)
      "thumbnailUrl": thumbnailUrl,
      "originalUrl": originalUrl,
      // point(4)
      "photoType": photoType,
      "restaurantId": restaurantId,
      "recipeId": recipeId,
      "userId": userId,
      // offline(1)
      "offlinePath": offlinePath,
      // extra(1)
      'extraNote': extraNote,
    };
  }

  static ParseModelPhotos emptyPhoto({
    required AuthUserModel? authUserModel,
    required PhotoType photoType,
    required String relatedId,
    required String filePath,
  }) {
    return ParseModelPhotos(
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel!.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // user(2)
      username: authUserModel.username!,
      avatarUrl: authUserModel.avatarUrl!,
      // Common(3)
      originalUrl: '',
      thumbnailUrl: '',
      // point(4)
      photoType: photoTypeToString(photoType),
      restaurantId:
          (photoType == PhotoType.Restaurant || photoType == PhotoType.Waiter)
              ? relatedId
              : "",
      recipeId: photoType == PhotoType.Recipe ? relatedId : "",
      userId: photoType == PhotoType.User ? relatedId : "",
      // offline(1)
      offlinePath: filePath,
      // extra(1)
      extraNote: '',
    );
  }

  static ParseModelPhotos updateFromCloudinary({
    required ParseModelPhotos model,
    required String originalUrl,
  }) {
    model.originalUrl = originalUrl;
    return model;
  }

  static ParseModelPhotos updatePhoto(
      {required ParseModelPhotos model, required String nextExtraNote}) {
    model.extraNote = nextExtraNote;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }
}
