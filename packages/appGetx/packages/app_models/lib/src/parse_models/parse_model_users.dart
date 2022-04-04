import 'package:json_annotation/json_annotation.dart';

import 'package:app_models/src/model/index.dart';
import 'package:app_models/src/utils/index.dart';

part 'parse_model_users.g.dart';

@JsonSerializable()
class ParseModelUsers extends AvatarUser {
  @JsonKey(name: 'id')
  String? uniqueId;
  String? username;
  String? slug;
  String? email;
  String? loginType;
  String? originalUrl;
  String? thumbnailUrl;
  String? createdAt;
  String? updatedAt;

  ParseModelUsers({
    this.uniqueId,
    this.username,
    this.slug,
    this.email,
    this.loginType,
    this.originalUrl,
    this.thumbnailUrl,
    this.createdAt,
    this.updatedAt,
  }) : super(uniqueId!, username, originalUrl);

  factory ParseModelUsers.fromJson(Map<String, dynamic> json) {
    return _$ParseModelUsersFromJson(json);
  }

  Map<String, dynamic> toJson() => _$ParseModelUsersToJson(this);

  static ParseModelUsers create({
    required String uid,
    required String? displayName,
    required String? email,
    required String? photoURL,
  }) {
    return ParseModelUsers(
      // Base(3)
      uniqueId: uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      // Common(3)
      username: displayName,
      slug: slugifyToLower(displayName!),
      email: email,
      // Property(3)
      loginType: 'google',
      originalUrl: photoURL,
      thumbnailUrl: '',
    );
  }

  static ParseModelUsers updateUserPhoto({
    required ParseModelUsers model,
    required String originalUrl,
  }) {
    model.originalUrl = originalUrl;
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }

  static ParseModelUsers updateUserProfile({
    required ParseModelUsers model,
    required String username,
  }) {
    model.username = username;
    model.slug = slugifyToLower(username);
    model.updatedAt = getDateStringForCreatedOrUpdatedDate();

    return model;
  }
}
