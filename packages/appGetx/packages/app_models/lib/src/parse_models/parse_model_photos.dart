import 'package:app_models/src/enum/index.dart';
import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';
import 'package:my_plugin/my_plugin.dart';

part 'parse_model_photos.g.dart';

@JsonSerializable()
class ParseModelPhotos extends AvatarUser {
  String? originalUrl;
  String? thumbnailUrl;
  String? photoType;
  String? restaurantId;
  String? recipeId;
  String? uniqueId;
  String? createdAt;
  String? updatedAt;
  String? userId;
  String? creatorId;
  String? flag;
  String? offlinePath;
  String? extraNote;
  String? username;
  String? avatarUrl;

  ParseModelPhotos({
    this.originalUrl,
    this.thumbnailUrl,
    this.photoType,
    this.restaurantId,
    this.recipeId,
    this.uniqueId,
    this.createdAt,
    this.updatedAt,
    this.userId,
    this.creatorId,
    this.flag,
    this.offlinePath,
    this.extraNote,
    this.username,
    this.avatarUrl,
  }) : super(creatorId!, username, avatarUrl);

  factory ParseModelPhotos.fromJson(Map<String, dynamic> json) {
    return _$ParseModelPhotosFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelPhotosToJson(this);

  static ParseModelPhotos create({
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
      photoType: photoType.vnText,
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
