import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/restaurants/image.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/screens/details/peopleInEvent/select_recipe/select_recipe_screen.dart';

class InfoPart extends StatelessWidget {
  final ParseModelPeopleInEvent peopleInEvent;
  final List<String> unorderedRecipeIds;

  const InfoPart(
      {Key key,
      @required this.peopleInEvent,
      @required this.unorderedRecipeIds})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    ParseModelRestaurants restaurant = FilterModels.instance
        .getSingleRestaurant(context, peopleInEvent.restaurantId);

    ParseModelEvents event =
        FilterModels.instance.getSingleEvent(context, peopleInEvent.eventId);

    ParseModelUsers user =
        FilterModels.instance.getSingleUser(context, peopleInEvent.userId);

    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        // elevation: 0.0,
        child: Container(
          height: MediaQuery.of(context).size.width / 2 + 80,
          color: Colors.white,
          child: _buildBody(context, user, restaurant, event),
        ));
  }

  Widget buildBlurredImage(ParseModelRestaurants restaurant) {
    return Stack(
      children: [
        buildRestaurantImage(restaurant),
        ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 2.0, sigmaY: 2.0),
            child: Container(
              color: Colors.black.withOpacity(0.2),
            ),
          ),
        )
      ],
    );
  }

  Widget _buildBody(BuildContext context, ParseModelUsers user,
      ParseModelRestaurants restaurant, ParseModelEvents event) {
    return Stack(
      children: [
        AspectRatio(
          aspectRatio: 2,
          child: buildBlurredImage(restaurant),
        ),
        AspectRatio(
          aspectRatio: 2,
          child: buildInfo(restaurant, event),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [_buildUserInfo(context, user)],
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [_buildButton(context)],
        ),
      ],
    );
  }

  Widget _buildButton(BuildContext context) {
    return Container(
        padding: EdgeInsets.only(right: 14, bottom: 12),
        // color: Colors.red,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            OutlinedButton.icon(
              label: Text('Add People Ordered'),
              icon: Icon(Icons.add, color: Colors.red),
              style: OutlinedButton.styleFrom(
                primary: Colors.black,
                backgroundColor: Colors.white,
                onSurface: Colors.grey,
              ),
              onPressed: () {
                Navigator.push<dynamic>(
                  context,
                  MaterialPageRoute<dynamic>(
                      builder: (BuildContext context) => SelectRecipeScreen(),
                      settings: RouteSettings(
                        arguments: SelectRecipeScreenObject(
                            peopleInEvent: peopleInEvent,
                            unorderedRecipeIds: unorderedRecipeIds),
                      ),
                      fullscreenDialog: true),
                );
              },
            )
          ],
        ));
  }

  Widget buildInfo(ParseModelRestaurants restaurant, ParseModelEvents event) {
    return Padding(
        padding: EdgeInsets.only(left: 100, right: 40, bottom: 45),
        child: Container(
          // color: Colors.red,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Text(
                restaurant.displayName,
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 30,
                    color: Colors.white),
              ),
              SizedBox(height: 4),
              Text(
                event.displayName,
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontWeight: FontWeight.w200,
                    fontSize: 16,
                    color: Colors.white),
              ),
            ],
          ),
        ));
  }

  Widget _buildUserInfo(BuildContext context, ParseModelUsers user) {
    return Container(
      padding: EdgeInsets.only(left: 24),
      height: 115,
      // color: Colors.red,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 60,
            height: 60,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: buildParseModelUsersImage(user),
            ),
          ),
          SizedBox(height: 4),
          Text(user.username,
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22)),
          // SizedBox(height: 4),
          Text(peopleInEvent.recipes.length.toString() + ' Recipes Ordered',
              style: TextStyle(
                  fontWeight: FontWeight.w200,
                  color: Colors.grey,
                  fontSize: 14)),
          SizedBox(height: 4),
        ],
      ),
    );
  }
}
