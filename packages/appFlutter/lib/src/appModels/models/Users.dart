import 'package:ieatta/core/database/firebase_helper.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

import 'Avatar_user.dart';

class ParseModelUsers extends AvatarUser {
  // Base(3)
  final String id;
  final String createdAt;
  String updatedAt;

  // Common(3)
  String username;
  String slug;
  final String email;

  // Property(3)
  final String loginType;
  String? originalUrl;
  final String? thumbnailUrl;

  ParseModelUsers(
      // Base(3)
      this.id,
      this.createdAt,
      this.updatedAt,
      // Common(3)
      this.username,
      this.slug,
      this.email,
      // Property(3)
      this.loginType,
      this.originalUrl,
      this.thumbnailUrl)
      : super(id, username, originalUrl);

  factory ParseModelUsers.fromJson(Map<String, dynamic> json) {
    // Base(3)
    String id = json['id'];
    String createdAt = json['createdAt'];
    String updatedAt = json['updatedAt'];

    // Common(3)
    String username = json['username'];
    String slug = json['slug'];
    String email = json['email'];

    // Property(3)
    String loginType = json['loginType'];
    String? originalUrl = json['originalUrl'];
    String? thumbnailUrl = json['thumbnailUrl'];

    return ParseModelUsers(
        // Base(3)
        id,
        createdAt,
        updatedAt,
        // Common(3)
        username,
        slug,
        email,
        // Property(3)
        loginType,
        originalUrl,
        thumbnailUrl);
  }

  static ParseModelUsers getUserModel(IAuthUser model) {
    String id = model.uid;
    String createdAt = getDateStringForCreatedOrUpdatedDate();
    String updatedAt = getDateStringForCreatedOrUpdatedDate();
    // Common(3)
    String username = model.displayName!;
    String slug = slugifyToLower(model.displayName!);
    String email = model.email!;
    // Property(4)
    String loginType = 'google';
    String originalUrl = model.photoURL!;
    String thumbnailUrl = "";

    return ParseModelUsers(
        // Base(3)
        id,
        createdAt,
        updatedAt,
        // Common(3)
        username,
        slug,
        email,
        // Property(3)
        loginType,
        originalUrl,
        thumbnailUrl);
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

  Map<String, dynamic> toMap() {
    return {
      // Base(3)
      'id': id,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
      // Common(3)
      'username': username,
      'slug': slug,
      'email': email,
      // Property(3)
      'loginType': loginType,
      'originalUrl': originalUrl,
      'thumbnailUrl': thumbnailUrl
    };
  }
}
