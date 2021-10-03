import 'package:contained_tab_bar_view/contained_tab_bar_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/ui/helpers/images/user.dart';
import 'package:ieatta/common/colors/colors.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'User_menu_model.dart';
import 'index.dart';
import 'pages/user_photos.dart';
import 'pages/user_restaurants.dart';
import 'pages/user_reviews.dart';

class UserProfilePage extends StatefulWidget {
  @override
  _UserProfilePageState createState() => _UserProfilePageState();
}

class _UserProfilePageState extends State<UserProfilePage> {
  UserProfileController controller =
      Get.put<UserProfileController>(UserProfileController());

  @override
  void dispose() {
    Get.delete<UserProfileController>();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemProfile),
          leadingType: controller.leadingType,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelUsers? userData = controller.state.detailModel;
    if (userData == null) {
      return Center(
        child: Text('Not found user!'),
      );
    }
    return SafeArea(
        child: Stack(
      children: [_buildPage(context), _buildEditIcon(context)],
    ));
  }

  Widget _buildEditIcon(BuildContext context) {
    if (controller.isLoggedUser) {
      return Align(
        alignment: Alignment.topRight,
        child: Padding(
          padding: const EdgeInsets.only(top: 20.0, right: 12.0),
          child: IconButton(
              icon: Icon(Icons.edit, color: Colors.blue),
              onPressed: () {
                Get.toNamed('${Routes.EDIT_USER}');
              }),
        ),
      );
    }
    return SizedBox.shrink();
  }

  Widget _buildPage(BuildContext context) {
    return Column(
      children: [
        _buildInfo(context),
        _buildTabViewPage(context),
      ],
    );
  }

  Widget _buildTabViewPage(BuildContext context) {
    List<UserMenu> userMenus = controller.state.userMenus;
    return Container(
      padding: const EdgeInsets.only(top: 8.0),
      width: Get.width,
      height: controller.getTabBarViewHeight(context),
      child: ContainedTabBarView(
          tabBarProperties: TabBarProperties(
            labelColor: Theme.of(context).colorScheme.secondary,
          ),
          tabs: [
            Column(
              children: <Widget>[
                Text(
                  userMenus[0].value.toString(),
                  style: TextStyle(
                    fontWeight: FontWeight.bold, fontSize: 22,
                    // color: TEXT_COLOR
                  ),
                ),
                SizedBox(height: 4),
                Text(userMenus[0].title
                    // style: TextStyle(color: TEXT_COLOR),
                    ),
              ],
            ),
            Column(
              children: <Widget>[
                Text(
                  userMenus[1].value.toString(),
                  style: TextStyle(
                    fontWeight: FontWeight.bold, fontSize: 22,
                    // color: TEXT_COLOR
                  ),
                ),
                SizedBox(height: 4),
                Text(userMenus[1].title
                    // style: TextStyle(color: TEXT_COLOR),
                    ),
              ],
            ),
            Column(
              children: <Widget>[
                Text(
                  userMenus[2].value.toString(),
                  style: TextStyle(
                    fontWeight: FontWeight.bold, fontSize: 22,
                    // color: TEXT_COLOR
                  ),
                ),
                SizedBox(height: 4),
                Text(userMenus[2].title
                    // style: TextStyle(color: TEXT_COLOR),
                    ),
              ],
            ),
          ],
          views: [UserRestaurants(), UserPhotos(), UserReviews()],
          onChange: controller.onTabBarViewChange),
    );
  }

  Widget _buildInfo(BuildContext context) {
    ParseModelUsers? userData = controller.state.detailModel;
    return Container(
        width: Get.width,
        height: UserProfileController.INFO_PANEL_HEIGHT,
        child: Card(
            child: Column(
          children: [
            SizedBox(height: 20),
            Container(
              height: 120,
              width: 120,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                boxShadow: <BoxShadow>[
                  BoxShadow(
                      color: AppColors.grey.withOpacity(0.6),
                      offset: const Offset(2.0, 4.0),
                      blurRadius: 8),
                ],
              ),
              child: ClipRRect(
                borderRadius: const BorderRadius.all(Radius.circular(60.0)),
                child: buildParseModelUsersImage(userData!),
              ),
            ),
            SizedBox(height: 24),
            Text(
              userData.username,
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 16),
          ],
        )));
  }
}
