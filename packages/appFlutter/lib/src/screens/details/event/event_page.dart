import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

import 'widget/info_part.dart';
import 'widget/peopleInEvent_body.dart';
import 'widget/waiter_body.dart';

class EventDetail extends StatefulWidget {
  EventDetail({Key key}) : super(key: key);

  @override
  EventDetailState createState() => EventDetailState();
}

class EventDetailState extends State<EventDetail> {
  ParseModelEvents _lastEvent;
  String eventId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelEvents _eventModel =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      _lastEvent = _eventModel;
      eventId = _eventModel.uniqueId;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
        body: _buildBody());
  }

  Widget _buildBody() {
    ParseModelEvents event =
        FilterModels.instance.getSingleEvent(context, eventId);

    ParseModelRestaurants restaurant =
        FilterModels.instance.getSingleRestaurant(context, event.restaurantId);

    List<ParseModelReviews> reviewsList = FilterModels.instance
        .getReviewsList(context, eventId, ReviewType.Event);

    List<ParseModelPeopleInEvent> peopleInEventsList = FilterModels.instance
        .getPeopleInEventsList(context, restaurant.uniqueId, event.uniqueId);

    Map<String, ParseModelUsers> usersDict =
        FilterModels.instance.getUsersDict(context);

    List<String> disorderedUserIds = FilterUtils.instance
        .getDisorderedUserIds(List.from(usersDict.keys), peopleInEventsList);

    return ListView(
      shrinkWrap: true,
      children: [
        InfoPart(
            restaurant: restaurant,
            event: event,
            disorderedUserIds: disorderedUserIds),
        // Line 1: Ordered users list
        buildTextSectionTitle("People Ordered"),
        PeopleInEventBody(
          peopleInEventsList: peopleInEventsList,
          usersDict: usersDict,
        ),
        // Line 2: Waiters list
        buildTextSectionTitle("Waiters"),
        Container(
          height: 160,
          child: WaiterBody(
            waitersList: FilterModels.instance
                .getWaitersList(context, restaurant.uniqueId),
            event: event,
          ),
        ),
        // Line 3: Reviews list
        buildTextSectionTitle("Review Highlights"),
        Container(
            decoration: new BoxDecoration(color: Colors.white),
            child: ReviewsBody(reviewsList: reviewsList)),
        seeAllList(reviewsList.length),
      ],
    );
  }
}
