import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

import 'package:provider/provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';

import '../photos_body.dart';
import 'widget/events_body.dart';
import 'widget/info_part.dart';
import 'widget/menus_body.dart';

class RestaurantDetail extends StatefulWidget {
  RestaurantDetail({Key key}) : super(key: key);

  @override
  RestaurantDetailState createState() => RestaurantDetailState();
}

class RestaurantDetailState extends State<RestaurantDetail> {
  String restaurantId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _restaurantId = ModalRoute.of(context).settings.arguments;
    setState(() {
      restaurantId = _restaurantId;
    });
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
        appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
        body: StreamBuilderView<ParseModelRestaurants>(
            stream: firestoreDatabase.singleRestaurantStream(restaurantId),
            render: (AsyncSnapshot fbUserSnapshot) {
              ParseModelRestaurants restaurant = fbUserSnapshot.data;
              return _buildBody(context, firestoreDatabase, restaurant);
            }));
  }

  Widget _buildBody(BuildContext context, FirestoreDatabase firestoreDatabase,
      ParseModelRestaurants restaurant) {
    return ListView(
      children: [
        InfoPart(
          restaurant: restaurant,
        ),
        // Line 1: Address
        buildTextSectionTitle("Current Address"),
        Container(
            decoration: new BoxDecoration(color: Colors.white),
            child: ListTile(
              title: Text(restaurant.address),
            )),
        // Line 2: Events
        buildTextSectionTitle("Events Recorded"),
        StreamBuilderView<List<ParseModelEvents>>(
          stream: firestoreDatabase.eventsStream(restaurantId),
          render: (AsyncSnapshot fbSnapshot) {
            return EventsBody(eventsList: fbSnapshot.data);
          },
        ),
        // Line 3: Menus
        buildMenusSectionTitle(context),
        Container(
          height: 160,
          child: StreamBuilderView<List<ParseModelRecipes>>(
            stream: firestoreDatabase.recipesStream(restaurantId),
            render: (AsyncSnapshot fbSnapshot) {
              return MenusBody(recipesList: fbSnapshot.data);
            },
          ),
        ),
        // Line 4: Photos
        buildPhotosSectionTitle(context),
        Container(
          height: 160,
          // decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelPhotos>>(
            stream: firestoreDatabase.photosInRestaurantStream(restaurantId),
            render: (AsyncSnapshot fbSnapshot) {
              return PhotosBody(photosList: fbSnapshot.data);
            },
          ),
        ),
        StreamBuilderView<List<ParseModelPhotos>>(
          stream: firestoreDatabase.photosInRestaurantStream(restaurantId),
          render: (AsyncSnapshot fbSnapshot) {
            return seeAllList(fbSnapshot.data.length);
          },
        ),
        // Line 5: Reviews
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase.reviewsInRestaurantStream(restaurantId, 4),
            render: (AsyncSnapshot fbSnapshot) {
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
        StreamBuilderView<List<ParseModelReviews>>(
          stream: firestoreDatabase.reviewsInRestaurantStream(restaurantId, -1),
          render: (AsyncSnapshot fbSnapshot) {
            return seeAllList(fbSnapshot.data.length);
          },
        ),
      ],
    );
  }
}
