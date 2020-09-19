import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'dart:io';

Widget buildOnlineImageView(String imagePath) {
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: imagePath,
    fit: BoxFit.cover,
    placeholder: (context, url) => Image.asset(
      'assets/placeholder/business_large_square.png',
      fit: BoxFit.fill,
    ),
    errorWidget: (context, url, error) => Image.asset(
      'assets/placeholder/business_large_square.png',
      fit: BoxFit.fill,
    ),
  );
}

Widget buildPhotoImage(ParseModelPhotos modelData) {
  return buildOnlineImageView(modelData.originalUrl);
}

Widget _buildFileImageView(String imagePath) {
  return Image.file(
    File(
      imagePath,
    ),
    fit: BoxFit.fill,
  );
}

Widget buildLocalImageView(String imagePath) {
  if (imagePath.contains('http')) {
    return buildOnlineImageView(imagePath);
  }
  return _buildFileImageView(imagePath);
}
