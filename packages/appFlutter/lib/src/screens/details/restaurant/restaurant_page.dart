import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

import '../photos_body.dart';
import 'widget/events_body.dart';
import 'widget/info_part.dart';
import 'widget/menus_body.dart';

class RestaurantDetail extends StatelessWidget {
  RestaurantDetail({Key? key, required this.restaurantId}) : super(key: key);
  final String restaurantId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: new AppBar(centerTitle: true, title: appHeaderTitle()), body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelRestaurants? restaurant = FilterModels.instance.getSingleRestaurant(context, restaurantId);
    List<ParseModelPhotos> photosList =
        FilterModels.instance.getPhotosList(context, restaurantId, PhotoType.Restaurant);
    List<ParseModelReviews> reviewsList =
        FilterModels.instance.getReviewsList(context, restaurantId, ReviewType.Restaurant);
    String? address = restaurant!.address;
    return ListView(
      children: [
        InfoPart(
          restaurant: restaurant,
        ),
        // Line 1: Address
        address == '' ? Container() : buildTextSectionTitle("Current Address"),
        address == ''
            ? Container()
            : Container(
                decoration: new BoxDecoration(color: Colors.white),
                child: ListTile(
                  title: Text(restaurant.address!),
                )),
        // Line 2: Events
        buildTextSectionTitle("Events Recorded"),
        EventsBody(eventsList: FilterModels.instance.getEventsList(context, restaurantId)),
        // Line 3: Menus
        buildMenusSectionTitle(context, restaurantId),
        Container(
          height: 160,
          child: MenusBody(
              restaurantId: restaurantId, recipesList: FilterModels.instance.getRecipesList(context, restaurantId)),
        ),
        // Line 4: Photos
        buildPhotosSectionTitle(context, PhotoType.Restaurant, restaurantId),
        Container(
          height: 160,
          // decoration: new BoxDecoration(color: Colors.white),
          child: PhotosBody(
            photosList: photosList,
            photoType: PhotoType.Restaurant,
            relatedId: restaurantId,
          ),
        ),
        seeAllList(photosList.length, () {
          NavigatorUtils.push(
              context,
              ParamsHelper.getOnlinePhotoGridViewPath(
                photoType: PhotoType.Restaurant,
                relatedId: restaurant.uniqueId,
              ));
        }),
        // Line 5: Reviews
        buildTextSectionTitle("Review Highlights"),
        Padding(
          padding: EdgeInsets.only(bottom: reviewsList.length == 0 ? 16 : 0),
          child: Container(
              decoration: new BoxDecoration(color: Colors.white), child: ReviewsBody(reviewsList: reviewsList)),
        ),
        seeAllList(reviewsList.length, () {
          NavigatorUtils.push(context,
              ParamsHelper.getReviewListPath(reviewType: ReviewType.Restaurant, relatedId: restaurant.uniqueId));
        }),
      ],
    );
  }
}
