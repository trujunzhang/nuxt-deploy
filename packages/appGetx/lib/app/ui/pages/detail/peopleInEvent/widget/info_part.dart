import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/images/restaurant.dart';
import 'package:ieatta/app/ui/helpers/images/user.dart';
import 'package:my_plugin/my_plugin.dart';

import '../index.dart';

class InfoPart extends StatefulWidget {
  final String tag;

  const InfoPart({Key? key, required this.tag}) : super(key: key);

  @override
  _InfoPartState createState() => _InfoPartState();
}

class _InfoPartState extends State<InfoPart> {
  late DetailPeopleInEventController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Card(
        margin: const EdgeInsets.symmetric(horizontal: 0.0),
        child: SizedBox(
          height: Get.width / 2 + 80,
          // color: Colors.white,
          child: _buildBody(context),
        ));
  }

  Widget buildBlurredImage(ParseModelRestaurants? restaurant) {
    return Stack(
      children: [
        buildRestaurantImage(restaurant!),
        Container(
            decoration: BoxDecoration(
                gradient: AppGradient.linearGradient(const Color(0xFF151C26))))
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
        padding: const EdgeInsets.only(right: 14, bottom: 12),
        // color: Colors.red,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            OutlinedButton.icon(
              label: const Text('Add Recipes'),
              icon: const Icon(Icons.add, color: Colors.red),
              // style: OutlinedButton.styleFrom(
              //   primary: Colors.black,
              //   backgroundColor: Colors.white,
              //   onSurface: Colors.grey,
              // ),
              onPressed: controller.onSelectRecipesIconPress,
            )
          ],
        ));
  }

  Widget buildInfo(ParseModelRestaurants? restaurant, ParseModelEvents? event) {
    return Padding(
        padding: const EdgeInsets.only(left: 100, right: 40, bottom: 30),
        child: Container(
          // color: Colors.red,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              const SizedBox(height: 4),
              Text(
                restaurant!.displayName,
                textAlign: TextAlign.center,
                maxLines: 2,
                style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 28,
                    color: Colors.white),
              ),
              const SizedBox(height: 4),
              Text(
                event!.displayName,
                textAlign: TextAlign.center,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                    fontWeight: FontWeight.w400,
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
      padding: const EdgeInsets.only(left: 24),
      height: 115,
      // color: Colors.red,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 60,
            height: 60,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: buildParseModelUsersImage(user!),
            ),
          ),
          const SizedBox(height: 4),
          Text(user.username,
              style:
                  const TextStyle(fontWeight: FontWeight.w600, fontSize: 18)),
          // SizedBox(height: 4),
          Text(peopleInEvent!.recipes.length.toString() + ' Recipes Ordered',
              style: const TextStyle(
                  fontWeight: FontWeight.w400,
                  color: Colors.grey,
                  fontSize: 12)),
          const SizedBox(height: 4),
        ],
      ),
    );
  }
}
