import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:my_plugin/my_plugin.dart';

import 'body/page_body.dart';
import 'index.dart';
import 'widget/filter_bar_ui.dart';

class RestaurantsListScreen extends GetWidget<RestaurantsController> {
  const RestaurantsListScreen({Key? key}) : super(key: key);

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
                  padding: const EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                    onTap: controller.onNewRestaurantIconPress,
                    child: const Icon(
                      Icons.add,
                      size: 26.0,
                    ),
                  )),
              // Action2: local photos icon.
              Padding(
                  padding: const EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                    onTap: controller.onLocalPhotosIconPress,
                    child: const Icon(
                      Icons.photo_library,
                      size: 26.0,
                    ),
                  )),
            ]),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    return BaseNestedScrollPage(
      sliverListView: Padding(
        padding: const EdgeInsets.only(left: 8.0, top: 8.0, bottom: 4.0),
        child: Obx(
          () {
            return SearchToolbar(
              searchController: controller.textEditingController,
              onSearchChanged: (String txt) {
                controller.state.updateSearch(txt);
              },
              gpsTrackVal: controller.state.gpsTrack.value,
              toggleTrackStatus: () {
                controller.state.toggleTrackStatus();
              },
            );
          },
        ),
      ),
      sliverPersistentHeaderView: const FilterBarUI(),
      scrollBody: const PageBody(),
    );
  }
}
