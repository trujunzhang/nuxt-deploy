import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';
import 'package:ieatta/src/appModels/models/Users.dart';

Widget _buildPlaceholderForUser() {
  return Image.asset(
    'assets/placeholder/user_60_square.png',
    fit: BoxFit.cover,
  );
}

Widget buildAvatarImage(AvatarUser modelData) {
  if (modelData.avatarUrl == null || modelData.avatarUrl == '') {
    return _buildPlaceholderForUser();
  }
  return CachedNetworkImage(
      width: double.infinity,
      height: double.infinity,
      imageUrl: modelData.avatarUrl,
      fit: BoxFit.cover,
      placeholder: (context, url) => _buildPlaceholderForUser(),
      errorWidget: (context, url, error) => _buildPlaceholderForUser());
}

Widget buildParseModelUsersImage(ParseModelUsers modelData) {
  if (modelData.originalUrl == null || modelData.originalUrl == '') {
    return _buildPlaceholderForUser();
  }
  return CachedNetworkImage(
      width: double.infinity,
      height: double.infinity,
      imageUrl: modelData.originalUrl,
      fit: BoxFit.cover,
      placeholder: (context, url) => _buildPlaceholderForUser(),
      errorWidget: (context, url, error) => _buildPlaceholderForUser());
}
