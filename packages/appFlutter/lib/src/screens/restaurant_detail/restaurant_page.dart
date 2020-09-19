import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';

import 'widget/review_edit.dart';
import 'widget/top_part.dart';
import 'widget/photos_part.dart';
import 'widget/reviews_part.dart';

class RestaurantDetail extends StatefulWidget {
  @override
  _RestaurantDetailState createState() => new _RestaurantDetailState();
}

class _RestaurantDetailState extends State<RestaurantDetail> {
  ParseModelRestaurants _restaurant;
  String _restaurantId = "";

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRestaurants _restaurantModel =
        ModalRoute.of(context).settings.arguments;
    if (_restaurantModel != null) {
      _restaurant = _restaurantModel;
      _restaurantId = _restaurantModel.uniqueId;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            ScreenTopPart(
              restaurant: _restaurant,
            ),
            buildPhotoSectionTitle(context, _restaurant),
            Container(
              height: 250,
              child: PhotosPart(
                restaurant: _restaurant,
              ),
            ),
            buildReviewSectionTitle(),
            ReviewEdit(
              restaurantId: _restaurantId,
            ),
            ReviewsPart(
              restaurantId: _restaurantId,
            ),
          ],
        ),
      ),
    );
  }
}
