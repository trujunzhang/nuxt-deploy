import 'package:app_config/app_config.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';

Widget _buildPlaceholderForRecipe() {
  return Image.asset(
    R.ASSETS_PLACEHOLDER_BUSINESS_LARGE_SQUARE_PNG,
    fit: BoxFit.cover,
  );
}

Widget buildParseModelRecipesImageWithOriginalUrl(String? originalUrl) {
  if (originalUrl == null || originalUrl == '') {
    return _buildPlaceholderForRecipe();
  }
  return CachedNetworkImage(
    width: double.infinity,
    height: double.infinity,
    imageUrl: originalUrl,
    fit: BoxFit.cover,
    placeholder: (context, url) => _buildPlaceholderForRecipe(),
    errorWidget: (context, url, error) => _buildPlaceholderForRecipe(),
  );
}

Widget buildRecipeImage(ParseModelRecipes modelData) {
  return buildParseModelRecipesImageWithOriginalUrl(modelData.originalUrl);
}
