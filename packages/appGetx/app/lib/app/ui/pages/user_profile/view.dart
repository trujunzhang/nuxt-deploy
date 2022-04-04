import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'models/User_menu_model.dart';
import 'pages/user_photos.dart';
import 'pages/user_restaurants.dart';
import 'pages/user_reviews.dart';
import 'widgets/user_info.dart';

class UserProfilePage extends StatefulWidget {
  const UserProfilePage({Key? key}) : super(key: key);

  @override
  _UserProfilePageState createState() => _UserProfilePageState();
}

class _UserProfilePageState extends State<UserProfilePage> {
  late UserProfileController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller =
        Get.put<UserProfileController>(UserProfileController(), tag: tag);
  }

  @override
  void dispose() {
    Get.delete<UserProfileController>(tag: tag);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelUsers? userData = controller.state.detailModel;
    if (userData == null) {
      return BaseScaffold(
          appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(S.of(context).drawerMenuItemProfile),
            leadingType: controller.leadingType,
          ),
          body: const Center(
            child: Text('Not found user!'),
          ));
    }
    return Stack(
      children: [
        UserInfo(tag: tag),
        _buildPage(context),
        Column(
          children: [
            Align(
              alignment: Alignment.topCenter,
              child: MyAppBar(
                elevation: 0,
                backgroundColor: Colors.transparent,
                centerTitle: true,
                title: Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: MyTitle(userData.username!),
                ),
                leadingType: controller.leadingType,
              ),
            )
          ],
        )
      ],
    );
  }

  Widget _buildPage(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        _buildTabViewPage(context),
      ],
    );
  }

  Widget getTab({required String title, required int value}) {
    return Tab(
      child: Column(
        children: <Widget>[
          Text(
            '$value',
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 14,
            ),
          ),
          // const SizedBox(height: 2),
          Text(title),
        ],
      ),
    );
  }

  List<Widget> getTabs() {
    List<UserMenu> userMenus = controller.state.userMenus;
    return [
      getTab(title: userMenus[0].title, value: userMenus[0].value),
      getTab(title: userMenus[1].title, value: userMenus[1].value),
      getTab(title: userMenus[2].title, value: userMenus[2].value),
    ];
  }

  Widget _buildTabViewPage(BuildContext context) {
    return CustomTabbar(
      scaffoldBackgroundColor: Colors.transparent,
      appbarBackgroundColor: Colors.transparent,
      height: controller.getTabBarViewHeight(context),
      length: controller.state.userMenus.length,
      appbarHeight: 56,
      tabs: getTabs(),
      tabbarViews: [
        UserRestaurants(tag: tag),
        UserPhotos(tag: tag),
        UserReviews(tag: tag)
      ],
    );
  }
}
