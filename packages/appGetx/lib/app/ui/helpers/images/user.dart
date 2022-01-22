import 'package:app_config/app_config.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';

Widget _buildPlaceholderForUser() {
  return Image.asset(
    R.ASSETS_PLACEHOLDER_USER_60_SQUARE_PNG,
    fit: BoxFit.cover,
  );
}

Widget buildParseModelUsersImageWithOriginalUrl(String? originalUrl) {
  if (originalUrl == null || originalUrl == '') {
    return _buildPlaceholderForUser();
  }
  return CachedNetworkImage(
      width: double.infinity,
      height: double.infinity,
      imageUrl: originalUrl,
      fit: BoxFit.cover,
      placeholder: (context, url) => _buildPlaceholderForUser(),
      errorWidget: (context, url, error) => _buildPlaceholderForUser());
}

Widget buildAvatarImage(AvatarUser modelData) {
  return buildParseModelUsersImageWithOriginalUrl(modelData.avatarUrl);
}

Widget buildParseModelUsersImage(ParseModelUsers modelData) {
  return buildParseModelUsersImageWithOriginalUrl(modelData.originalUrl);
}
