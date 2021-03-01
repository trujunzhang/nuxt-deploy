import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/rate_utils.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:ieatta/src/screens/reviews/list/reviews_list_screen.dart';
import 'package:provider/provider.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';

class InfoPart extends StatelessWidget {
  final ParseModelRestaurants restaurant;

  const InfoPart({Key key, @required this.restaurant}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        child: Padding(
            padding: EdgeInsets.only(),
            child: Container(
              color: Colors.white,
              child: _buildBody(context),
            )));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        // Line 1
        SizedBox(height: 4),
        FlatButton.icon(
          onPressed: () {
            Navigator.of(context).pushNamed(Routes.create_edit_restaurant,
                arguments: restaurant);
          },
          icon: Icon(Icons.edit),
          label: Text(
            'Edit Restaurant',
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
        SizedBox(height: 8),
        // Line 3
        SmoothStarRating(
          allowHalfRating: true,
          starCount: 5,
          rating:
              calcRateForRestaurant(restaurant.rate, restaurant.reviewCount),
          size: 20,
          color: HotelAppTheme.buildLightTheme().primaryColor,
          borderColor: HotelAppTheme.buildLightTheme().primaryColor,
        ),
        SizedBox(height: 8),
        // Line 4
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildActionBar(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FlatButton.icon(
            onPressed: () => print('Live'),
            icon: const Icon(
              Icons.add,
              color: Colors.red,
            ),
            label: Text(
              'Event',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          FlatButton.icon(
            onPressed: () {
              Navigator.of(context).pushNamed(Routes.create_edit_review,
                  arguments: CreateEditReviewScreenObject(
                      restaurantId: restaurant.uniqueId));
            },
            icon: const Icon(
              Icons.create,
              color: Colors.green,
            ),
            label: Text(
              'Review',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          FlatButton.icon(
            onPressed: () {
              Navigator.of(context).pushNamed(Routes.reviews_list,
                  arguments: ReviewsListObject(
                      stream: firestoreDatabase.reviewsInRestaurantStream(
                          restaurant.uniqueId, -1)));
            },
            icon: const Icon(
              Icons.card_membership,
              color: Colors.purpleAccent,
            ),
            label: Text(
              'Reviews',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
        ],
      ),
    );
  }
}
