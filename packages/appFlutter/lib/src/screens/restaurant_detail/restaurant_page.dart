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

  // Flutter web: animations and dynamic theming
  // https://github.com/sbis04/explore/blob/master/lib/screens/home_page.dart
  // https://blog.codemagic.io/flutter-web-animations-and-dynamic-theming/
  ScrollController _scrollController;
  double _scrollPosition = 0;
  double _opacity = 0;

  _scrollListener() {
    // print("step 1");
    setState(() {
      _scrollPosition = _scrollController.position.pixels;
    });
  }

  @override
  void initState() {
    _scrollController = ScrollController();
    _scrollController.addListener(_scrollListener);
    super.initState();
  }

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

  Widget _buildBody() {
    return Stack(
      children: [
        SingleChildScrollView(
          controller: _scrollController,
          physics: ClampingScrollPhysics(),
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
        )
      ],
    );
  }

  final int SCROLL_TOP_H = 240;

  @override
  Widget build(BuildContext context) {
    _opacity =
        _scrollPosition < SCROLL_TOP_H ? _scrollPosition / SCROLL_TOP_H : 1;
    var iconColor = Colors.white;
    var textColor = Colors.red.withOpacity(_opacity);
    if (_opacity == 1) {
      iconColor = Colors.black;
      textColor = Colors.red;
    }
    // print('_opacity: ' + _opacity.toString());

    return Scaffold(
        extendBodyBehindAppBar: true,
        appBar: AppBar(
          iconTheme: IconThemeData(color: iconColor),
          backgroundColor:
              Theme.of(context).bottomAppBarColor.withOpacity(_opacity),
          elevation: _opacity < 0.7 ? 0 : _opacity,
          centerTitle: true,
          title: Text(
            _restaurant.displayName,
            style: TextStyle(
              color: textColor,
              fontSize: 20,
              fontFamily: 'Montserrat',
              fontWeight: FontWeight.w400,
              letterSpacing: 3,
            ),
          ),
        ),
        body: _buildBody());
  }
}
