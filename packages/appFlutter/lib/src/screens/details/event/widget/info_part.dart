import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/utils/rate_utils.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/screens/details/event/select_person/select_person_screen.dart';
import 'package:ieatta/src/screens/edit/event/event_provider_screen.dart';
import 'package:ieatta/src/screens/edit/review/review_provider_screen.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:ieatta/src/screens/reviews/list/reviews_list_screen.dart';

class InfoPart extends StatelessWidget {
  final ParseModelRestaurants restaurant;
  final ParseModelEvents event;
  final List<String> disorderedUserIds;

  const InfoPart(
      {Key key,
      @required this.restaurant,
      @required this.event,
      @required this.disorderedUserIds})
      : super(key: key);

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
            Navigator.of(context).pushNamed(Routes.create_edit_event,
                arguments: CreateEditEventScreenObject(
                    restaurantId: restaurant.uniqueId, eventModel: event));
          },
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
              fontSize: 30,
            ),
          ),
        ),
        SizedBox(height: 8),
        Padding(
          padding: EdgeInsets.only(left: 32, right: 32),
          child: Text(
            event.displayName,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontWeight: FontWeight.w200,
              fontSize: 16,
            ),
          ),
        ),
        SizedBox(height: 4),
        // Line 3
        _buildDateInfo(),
        SizedBox(height: 16),
        // Line 4
        RatingBar.builder(
            initialRating: calcRateForRestaurant(event.rate, event.reviewCount),
            minRating: 1,
            direction: Axis.horizontal,
            allowHalfRating: true,
            itemCount: 5,
            itemSize: 20,
            itemPadding: EdgeInsets.symmetric(horizontal: 2.0),
            itemBuilder: (context, _) => Icon(
                  Icons.star,
                  color: HotelAppTheme.buildLightTheme().primaryColor,
                ),
            onRatingUpdate: (rating) {}),
        SizedBox(height: 8),
        // Line 4
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildDateInfo() {
    return Table(
      children: [
        TableRow(children: [
          Container(
            padding: EdgeInsets.only(right: 12),
            // color: Colors.red,
            child: Text(
              "Start Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event.start),
            style: TextStyle(fontSize: 15.0),
          ),
        ]),
        TableRow(children: [
          Container(
            padding: EdgeInsets.only(right: 12),
            // color: Colors.red,
            child: Text(
              "End Date:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            formatDateString(event.end),
            style: TextStyle(fontSize: 15.0),
          ),
        ]),
      ],
    );
  }

  Widget _buildActionBar(BuildContext context) {
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FlatButton(
            onPressed: () {
              Navigator.push<dynamic>(
                context,
                MaterialPageRoute<dynamic>(
                    builder: (BuildContext context) => SelectPersonScreen(),
                    settings: RouteSettings(
                      arguments: SelectPersonScreenObject(
                          restaurantId: restaurant.uniqueId,
                          eventId: event.uniqueId,
                          disorderedUserIds: disorderedUserIds),
                    ),
                    fullscreenDialog: true),
              );
            },
            child: Text(
              'Select Person',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          FlatButton.icon(
            onPressed: () {
              Navigator.of(context).pushNamed(Routes.create_edit_review,
                  arguments: CreateEditReviewScreenObject(
                      reviewType: ReviewType.Event, relatedId: event.uniqueId));
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
                      reviewType: ReviewType.Event, relatedId: event.uniqueId));
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
