import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/review_detail/reviews_body.dart';

import 'package:provider/provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';

import '../photos_body.dart';
import 'widget/events_body.dart';
import 'widget/info_part.dart';

class RestaurantDetail extends StatefulWidget {
  RestaurantDetail({Key key}) : super(key: key);

  @override
  _RestaurantDetailState createState() => _RestaurantDetailState();
}

class _RestaurantDetailState extends State<RestaurantDetail> {
  ParseModelRestaurants _restaurant;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRestaurants _restaurantModel =
        ModalRoute.of(context).settings.arguments;
    if (_restaurantModel != null) {
      _restaurant = _restaurantModel;
      setState(() {
        _restaurant = _restaurantModel;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
      appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
      body: _buildBody(context, firestoreDatabase),
    );
  }

  Widget _buildBody(BuildContext context, FirestoreDatabase firestoreDatabase) {
    return ListView(
      children: [
        InfoPart(
          restaurant: _restaurant,
        ),
        // Line 1: Address
        buildTextSectionTitle("Current Address"),
        Container(
            decoration: new BoxDecoration(color: Colors.white),
            child: ListTile(
              title: Text(_restaurant.address),
            )),
        // Line 2: Events
        buildTextSectionTitle("Events Recorded"),
        StreamBuilderView<List<ParseModelEvents>>(
          stream: firestoreDatabase.eventsStream(_restaurant.uniqueId),
          render: (AsyncSnapshot fbSnapshot) {
            return EventsBody(eventsList: fbSnapshot.data);
          },
        ),
        buildPhotoSectionTitle(context),
        Container(
          height: 160,
          // decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelPhotos>>(
            stream: firestoreDatabase
                .photosInRestaurantStream(_restaurant.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return PhotosBody(photosList: fbSnapshot.data);
            },
          ),
        ),
        StreamBuilderView<List<ParseModelPhotos>>(
          stream:
              firestoreDatabase.photosInRestaurantStream(_restaurant.uniqueId),
          render: (AsyncSnapshot fbSnapshot) {
            return seeAllPhoto(fbSnapshot.data);
          },
        ),
        // Line 3: Reviews
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase
                .reviewsInRestaurantStream(_restaurant.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
      ],
    );
  }
}
