import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';

import 'package:provider/provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';

import 'widget/events_body.dart';
import 'widget/info_part.dart';
import 'widget/photos_body.dart';
import 'widget/reviews_body.dart';

class RestaurantDetail extends StatefulWidget {
  RestaurantDetail({Key key}) : super(key: key);

  @override
  _RestaurantDetailState createState() => _RestaurantDetailState();
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
      setState(() {
        _restaurant = _restaurantModel;
        _restaurantId = _restaurantModel.uniqueId;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
      body: _buildBody(context),
    );
  }

  Widget _buildBody(BuildContext context) {
    final firestoreDatabase =
    Provider.of<FirestoreDatabase>(context, listen: false);
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
        // Line 2: Event
        buildTextSectionTitle("Events Recorded"),
        StreamBuilderView<List<ParseModelEvents>>(
          stream: firestoreDatabase.eventsStream(_restaurantId),
          render: (AsyncSnapshot fbSnapshot){
            return EventsBody(eventsList: fbSnapshot.data);
          },
        ),
        buildPhotoSectionTitle(context, _restaurant),
        Container(
          height: 160,
          decoration: new BoxDecoration(color: Colors.white),
          child:  StreamBuilderView<List<ParseModelPhotos>>(
            stream: firestoreDatabase.photosInRestaurantStream(_restaurantId),
            render: (AsyncSnapshot fbSnapshot){
              return PhotosBody(photosList: fbSnapshot.data);
            },
          ),
        ),
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase.reviewsInRestaurantStream(_restaurantId),
            render: (AsyncSnapshot fbSnapshot){
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
      ],
    );
  }

}
