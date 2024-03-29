import 'package:flutter/material.dart';
import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class RatingImage extends StatelessWidget {
  final BaseReview? baseReview;
  final double imageWidth;
  final double imageHeight;

  const RatingImage(
      {Key? key,
      required this.baseReview,
      this.imageWidth = 100,
      this.imageHeight = 15})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var initialRating =
        calcRateForRestaurant(baseReview!.rate!, baseReview!.reviewCount!);
    //<- Creates an object that fetches an image.
    // var assetsImage = AssetImage('assets/stars/small/$initialRating.png');
    var assetsImage = AssetImage('$initialRating'.toSmallStarImage);
    var image = Image(image: assetsImage, fit: BoxFit.cover);
    return SizedBox(width: imageWidth, height: imageHeight, child: image);
  }
}
