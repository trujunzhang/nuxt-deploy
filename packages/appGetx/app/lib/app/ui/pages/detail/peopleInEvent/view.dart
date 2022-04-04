import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:app_models/app_models.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:app_widgets/app_widgets.dart';

import 'index.dart';
import 'widget/recipe_body.dart';

class DetailPeopleInEventPage extends StatefulWidget {
  const DetailPeopleInEventPage({Key? key}) : super(key: key);

  @override
  _DetailPeopleInEventPageState createState() =>
      _DetailPeopleInEventPageState();
}

class _DetailPeopleInEventPageState extends State<DetailPeopleInEventPage> {
  late DetailPeopleInEventController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller = Get.put<DetailPeopleInEventController>(
        DetailPeopleInEventController(),
        tag: tag);
  }

  @override
  void dispose() {
    Get.delete<DetailPeopleInEventController>(tag: tag);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: appHeaderTitle(),
          leadingType: AppBarBackType.Back,
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelRestaurants? restaurant = controller.state.restaurant;
    ParseModelEvents? event = controller.state.event;
    ParseModelUsers? user = controller.state.user;

    ParseModelPeopleInEvent? peopleInEvent = controller.state.detailModel;

    return Column(
      children: [
        // Container(
        //   height: Get.width / 2 + 80,
        //   color: Colors.transparent,
        //   child: InfoPart(tag: tag),
        // ),
        PeopleInEventInfoPanel(
          peopleInEvent: peopleInEvent,
          restaurant: restaurant,
          event: event,
          user: user,
          onSelectRecipesIconPress: controller.onSelectRecipesIconPress,
        ),
        const SizedBox(height: 12),
        // Line 1: Ordered recipes list
        // buildTextSectionTitle("Ordered Recipes"),
        RecipeBody(tag: tag),
        const SizedBox(height: 12),
      ],
    );
  }
}
