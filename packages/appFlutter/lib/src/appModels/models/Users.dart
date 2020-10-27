import 'package:ieatta/core/database/firebase_helper.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';

class ParseModelUsers {
  // Base(3)
  final String id;
  final String createdAt;
  final String updatedAt;

  // Common(3)
  final String username;
  final String slug;
  final String email;

  // Property(3)
  final String loginType;
  final String originalUrl;
  final String thumbnailUrl;

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
      this.thumbnailUrl);

  factory ParseModelUsers.fromJson(Map<String, dynamic> json) {
    // Base(3)
    String id = json['id'] as String;
    var createdAt = json['createdAt'] as String;
    var updatedAt = json['updatedAt'] as String;

    // Common(3)
    var username = json['username'] as String;
    var slug = json['slug'] as String;
    var email = json['email'] as String;

    // Property(3)
    var loginType = json['loginType'] as String;
    var originalUrl = json['originalUrl'] as String;
    var thumbnailUrl = json['thumbnailUrl'] as String;

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
    String username = model.displayName;
    String slug = slugifyToLower(model.displayName);
    String email = model.email;
    // Property(4)
    String loginType = 'google';
    String originalUrl = model.photoURL;
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
