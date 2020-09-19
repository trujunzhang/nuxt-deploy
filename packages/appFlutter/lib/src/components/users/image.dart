import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';

Widget buildAvatarImage(AvatarUser modelData) {
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: modelData.avatarUrl,
    fit: BoxFit.cover,
    placeholder: (context, url) => Image.asset(
      'assets/placeholder/user_60_square.png',
      fit: BoxFit.cover,
    ),
    errorWidget: (context, url, error) => Image.asset(
      'assets/placeholder/user_60_square.png',
      fit: BoxFit.cover,
    ),
  );
}
