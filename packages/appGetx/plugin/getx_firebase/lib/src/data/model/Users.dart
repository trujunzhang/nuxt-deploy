import '../../utils/slug_helper.dart';
import '../../utils/timeago_utils.dart';

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

  static ParseModelUsers getUserModel(
      {required String uid,
      required String? displayName,
      required String email,
      required String? photoURL}) {
    String id = uid;
    String createdAt = getDateStringForCreatedOrUpdatedDate();
    String updatedAt = getDateStringForCreatedOrUpdatedDate();
    // Common(3)
    String username = displayName!;
    String slug = slugifyToLower(displayName);
    // Property(4)
    String loginType = 'google';
    String originalUrl = photoURL!;
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
