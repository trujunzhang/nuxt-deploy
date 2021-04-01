import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/widgets/rating_image.dart';
import 'package:ieatta/src/screens/edit/event/event_provider_screen.dart';
import 'package:ieatta/src/screens/edit/review/review_provider_screen.dart';
import 'package:ieatta/src/screens/reviews/list/reviews_list_screen.dart';

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
        RatingImage(baseReview: restaurant),
        SizedBox(height: 8),
        // Line 4
        _buildNote(),
        // Line 5
        Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildNote() {
    if (restaurant.extraNote == '') {
      return Container();
    }
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Divider(height: 10.0, thickness: 0.5),
        ),
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32, top: 8),
          child: Text(
            restaurant.extraNote,
            style: TextStyle(fontSize: 14),
          ),
        ),
        SizedBox(height: 8),
      ],
    );
  }

  Widget _buildActionBar(BuildContext context) {
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FlatButton.icon(
            onPressed: () {
              Navigator.of(context).pushNamed(Routes.create_edit_event,
                  arguments: CreateEditEventScreenObject(
                      restaurantId: restaurant.uniqueId));
            },
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
                      reviewType: ReviewType.Restaurant,
                      relatedId: restaurant.uniqueId));
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
                      reviewType: ReviewType.Restaurant,
                      relatedId: restaurant.uniqueId));
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
