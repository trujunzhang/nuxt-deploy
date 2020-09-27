import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'dart:io' as io;

Widget _buildPlaceholderForPhoto() {
  return Image.asset(
    'assets/placeholder/business_large_square.png',
    fit: BoxFit.cover,
  );
}

Widget _buildPlaceholderForOfflinePhoto() {
  return Image.asset(
    'assets/placeholder/offline-sign-circular-band-label-sticker.png',
    fit: BoxFit.contain,
  );
}

Widget buildOnlineImageView(String imagePath) {
  if (imagePath == null || imagePath == '') {
    return _buildPlaceholderForPhoto();
  }
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: imagePath,
    fit: BoxFit.cover,
    placeholder: (context, url) => _buildPlaceholderForPhoto(),
    errorWidget: (context, url, error) => _buildPlaceholderForPhoto(),
  );
}

Widget buildPhotoImageWithLocalImage(
    ParseModelPhotos modelData, bool localFileExist) {
  if (modelData.originalUrl == null || modelData.originalUrl == '') {
    if (modelData.offlinePath != null && modelData.offlinePath != '') {
      if (localFileExist) {
        // Exist
        return _buildFileImageView(modelData.offlinePath);
      } else {
        // Place holder
        return _buildPlaceholderForOfflinePhoto();
      }
    } else {
      return _buildPlaceholderForOfflinePhoto();
    }
  }
  return buildOnlineImageView(modelData.originalUrl);
}

Widget buildPhotoImage(ParseModelPhotos modelData) {
  return buildOnlineImageView(modelData.originalUrl);
}

Widget _buildFileImageView(String imagePath) {
  return Image.file(
    io.File(
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
