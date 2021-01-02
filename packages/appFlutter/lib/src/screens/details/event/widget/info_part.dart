import 'package:flutter/material.dart';
import 'package:ieatta/core/utils/rate_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';

class InfoPart extends StatelessWidget {
  final ParseModelRestaurants restaurant;
  final ParseModelEvents event;

  const InfoPart({Key key, @required this.restaurant, @required this.event})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        elevation: 0.0,
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
              color: Colors.white,
              child: _buildBody(),
            )));
  }

  Widget _buildBody() {
    return Column(
      children: [
        // Line 1
        SizedBox(height: 4),
        FlatButton.icon(
          onPressed: () {},
          icon: Icon(Icons.edit),
          label: Text(
            'Edit Event',
            style: TextStyle(color: Color(0xff479EFF)),
          ),
        ),
        // Line 2
        Padding(
          padding: EdgeInsets.only(left: 24, right: 24),
          child: Text(
            restaurant.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 22,
            ),
          ),
        ),
        SizedBox(height: 4),
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Text(
            event.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w500,
              fontSize: 16,
            ),
          ),
        ),
        SizedBox(height: 16),
        // Line 3
        SmoothStarRating(
          allowHalfRating: true,
          starCount: 5,
          rating: calcRateForRestaurant(event.rate, event.reviewCount),
          size: 20,
          color: HotelAppTheme.buildLightTheme().primaryColor,
          borderColor: HotelAppTheme.buildLightTheme().primaryColor,
        ),
        SizedBox(height: 8),
        // Line 4
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(),
      ],
    );
  }

  Widget _buildActionBar() {
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FlatButton(
            onPressed: () => print('Live'),
            child: Text(
              'Select Person',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          FlatButton(
            onPressed: () => print('Photo'),
            child: Text(
              'Write Review',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          FlatButton(
            onPressed: () => print('Room'),
            child: Text(
              'See Reviews',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
        ],
      ),
    );
  }
}
