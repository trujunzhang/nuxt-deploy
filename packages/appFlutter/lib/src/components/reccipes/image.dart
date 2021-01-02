import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';

Widget _buildPlaceholderForRecipe() {
  return Image.asset(
    // 'assets/placeholder/menu_medium_square.png',
    'assets/placeholder/business_large_square.png',
    fit: BoxFit.cover,
  );
}

Widget buildParseModelRecipesImageWithOriginalUrl(String originalUrl) {
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
