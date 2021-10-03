import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/widgets/rating_image.dart';
import 'package:ieatta/src/screens/details/event/select_person/select_person_provider.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/util/app_navigator.dart';

class InfoPart extends StatelessWidget {
  final ParseModelRestaurants restaurant;
  final ParseModelEvents event;

  const InfoPart({
    Key? key,
    required this.restaurant,
    required this.event,
  }) : super(key: key);

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
        TextButton.icon(
          onPressed: () {
            NavigatorUtils.push(context,
                '${EditRouter.editEventPage}?${ParamsHelper.ID}=${event.uniqueId}&${ParamsHelper.RESTAURANT_ID}=${restaurant.uniqueId}');
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
        RatingImage(baseReview: event),
        SizedBox(height: 8),
        // Line 5
        _buildWant(),
        // Line 6
        const Divider(height: 10.0, thickness: 0.5),
        _buildActionBar(context),
      ],
    );
  }

  Widget _buildWant() {
    if (event.want == '') {
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
            event.want,
            style: TextStyle(fontSize: 14),
          ),
        ),
        SizedBox(height: 8),
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
    List<ParseModelPeopleInEvent> peopleInEventsList = FilterModels.instance
        .getPeopleInEventsList(context, restaurantId: restaurant.uniqueId, eventId: event.uniqueId);
    Map<String, ParseModelUsers> usersDict = FilterModels.instance.getUsersDict(context);
    return Container(
      height: 40.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          TextButton.icon(
            onPressed: () {
              List<String> disorderedUserIds =
                  FilterUtils.instance.getDisorderedUserIds(List.from(usersDict.keys), peopleInEventsList);
              AppNavigator.popFullScreen(
                context,
                SelectPersonProvider(),
                SelectPersonScreenObject(
                    restaurantId: restaurant.uniqueId, eventId: event.uniqueId, disorderedUserIds: disorderedUserIds),
              );
            },
            icon: const Icon(
              Icons.add_box_outlined,
              color: Colors.red,
            ),
            label: Text(
              'Person',
              style: TextStyle(color: Color(0xff479EFF)),
            ),
          ),
          const VerticalDivider(width: 8.0),
          TextButton.icon(
            onPressed: () {
              NavigatorUtils.push(
                  context, ParamsHelper.getNewReviewPath(reviewType: ReviewType.Event, relatedId: event.uniqueId));
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
          TextButton.icon(
            onPressed: () {
              NavigatorUtils.push(
                  context, ParamsHelper.getReviewListPath(reviewType: ReviewType.Event, relatedId: event.uniqueId));
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
