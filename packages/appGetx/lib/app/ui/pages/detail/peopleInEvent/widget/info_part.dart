import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/helpers/images/restaurant.dart';
import 'package:ieatta/app/ui/helpers/images/user.dart';

import '../index.dart';

class InfoPart extends GetWidget<DetailPeopleInEventController> {
  @override
  Widget build(BuildContext context) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 0.0),
        child: Container(
          height: Get.width / 2 + 80,
          // color: Colors.white,
          child: _buildBody(context),
        ));
  }

  Widget buildBlurredImage(ParseModelRestaurants? restaurant) {
    return Stack(
      children: [
        buildRestaurantImage(restaurant!),
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

  Widget _buildBody(BuildContext context) {
    ParseModelRestaurants? restaurant = controller.state.restaurant;
    ParseModelEvents? event = controller.state.event;
    ParseModelUsers? user = controller.state.user;
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
                controller.onSelectRecipesIconPress(context);
              },
            )
          ],
        ));
  }

  Widget buildInfo(ParseModelRestaurants? restaurant, ParseModelEvents? event) {
    return Padding(
        padding: EdgeInsets.only(left: 100, right: 40, bottom: 25),
        child: Container(
          // color: Colors.red,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              SizedBox(height: 4),
              Text(
                restaurant!.displayName,
                textAlign: TextAlign.center,
                maxLines: 2,
                style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 28,
                    color: Colors.white),
              ),
              SizedBox(height: 4),
              Text(
                event!.displayName,
                textAlign: TextAlign.center,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                    fontWeight: FontWeight.w200,
                    fontSize: 16,
                    color: Colors.white),
              ),
            ],
          ),
        ));
  }

  Widget _buildUserInfo(BuildContext context, ParseModelUsers? user) {
    ParseModelPeopleInEvent? peopleInEvent = controller.state.detailModel;
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
              child: buildParseModelUsersImage(user!),
            ),
          ),
          SizedBox(height: 4),
          Text(user.username,
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22)),
          // SizedBox(height: 4),
          Text(peopleInEvent!.recipes.length.toString() + ' Recipes Ordered',
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
