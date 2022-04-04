import 'dart:io' as io;

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';

Widget _buildPlaceholderForPhoto() {
  return Image.asset(
    R.ASSETS_PLACEHOLDER_BUSINESS_LARGE_SQUARE_PNG,
    fit: BoxFit.cover,
  );
}

Widget _buildPlaceholderForOfflinePhoto() {
  return Image.asset(
    R.ASSETS_PLACEHOLDER_OFFLINE_SIGN_CIRCULAR_BAND_LABEL_STICKER_PNG,
    fit: BoxFit.contain,
  );
}

Widget buildOnlineImageView(String? imagePath, BoxFit fit,
    {Widget? customPlaceHolder}) {
  Widget placeHolder = customPlaceHolder ?? _buildPlaceholderForPhoto();
  if (imagePath == null || imagePath == '') {
    return placeHolder;
  }
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: imagePath,
    fit: fit,
    placeholder: (context, url) => placeHolder,
    errorWidget: (context, url, error) => placeHolder,
  );
}

Widget buildPhotoImageWithLocalImage(
    ParseModelPhotos modelData, bool localFileExist, BoxFit fit,
    {Widget? customPlaceHolder}) {
  if (modelData.originalUrl == null || modelData.originalUrl == '') {
    if (modelData.offlinePath != null && modelData.offlinePath != '') {
      if (localFileExist) {
        // Exist
        return _buildFileImageView(modelData.offlinePath!, fit: fit);
      } else {
        // Place holder
        return _buildPlaceholderForOfflinePhoto();
      }
    } else {
      return _buildPlaceholderForOfflinePhoto();
    }
  }
  return buildOnlineImageView(modelData.originalUrl, fit,
      customPlaceHolder: customPlaceHolder);
}

Widget buildPhotoImage(ParseModelPhotos modelData) {
  return buildOnlineImageView(modelData.originalUrl, BoxFit.cover);
}

Widget _buildFileImageView(String imagePath, {BoxFit fit = BoxFit.fitWidth}) {
  return Image.file(
    io.File(imagePath),
    fit: fit,
  );
}

Widget buildLocalImageView(String imagePath) {
  if (imagePath.contains('http')) {
    return buildOnlineImageView(imagePath, BoxFit.cover);
  }
  return _buildFileImageView(imagePath);
}
