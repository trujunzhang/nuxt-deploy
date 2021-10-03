import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/info_part.dart';
import 'widget/recipe_body.dart';

class DetailPeopleInEventPage extends GetWidget<DetailPeopleInEventController> {
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
    return Column(
      children: [
        Container(
          height: Get.width / 2 + 80,
          color: Colors.transparent,
          child: InfoPart(),
        ),
        SizedBox(height: 12),
        // Line 1: Ordered recipes list
        // buildTextSectionTitle("Ordered Recipes"),
        RecipeBody(),
        SizedBox(height: 12),
      ],
    );
  }
}
