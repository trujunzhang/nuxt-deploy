import 'package:flutter/material.dart';
import 'package:ieatta/core/utils/rate_utils.dart';
import 'package:ieatta/src/appModels/models/Base_Review.dart';

class RatingImage extends StatelessWidget {
  final BaseReview baseReview;
  final double imageWidth;
  final double imageHeight;

  const RatingImage({Key? key, required this.baseReview, this.imageWidth = 100, this.imageHeight = 15})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var initialRating = calcRateForRestaurant(baseReview.rate, baseReview.reviewCount);
    var assetsImage = AssetImage('assets/stars/small/$initialRating.png'); //<- Creates an object that fetches an image.
    var image = Image(image: assetsImage, fit: BoxFit.cover);
    return Container(width: imageWidth, height: imageHeight, child: image);
  }
}
