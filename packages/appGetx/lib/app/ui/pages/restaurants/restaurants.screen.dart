import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:my_plugin/my_plugin.dart';

import 'body/page_body.dart';
import 'restaurants.controller.dart';
import 'widget/filter_bar_ui.dart';
import 'widget/search_bar_ui.dart';

class RestaurantsListScreen extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
            centerTitle: true,
            title: appHeaderTitle(),
            leadingType: AppBarBackType.None,
            actions: [
              // Action1: new Restaurant icon.
              Padding(
                  padding: EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                    onTap: controller.onNewRestaurantIconPress,
                    child: Icon(
                      Icons.add,
                      size: 26.0,
                    ),
                  )),
              // Action2: local photos icon.
              Padding(
                  padding: EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                    onTap: controller.onLocalPhotosIconPress,
                    child: Icon(
                      Icons.photo_library,
                      size: 26.0,
                    ),
                  )),
            ]),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    return BaseNestedScrollPage(
      sliverListView: SearchBarUI(),
      sliverPersistentHeaderView: FilterBarUI(),
      scrollBody: PageBody(),
    );
  }
}
