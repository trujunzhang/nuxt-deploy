import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:my_plugin/my_plugin.dart';

import '../index.dart';

class UserInfo extends StatefulWidget {
  final String tag;

  const UserInfo({Key? key, required this.tag}) : super(key: key);

  @override
  _UserInfoState createState() => _UserInfoState();
}

class _UserInfoState extends State<UserInfo> {
  late UserProfileController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  Widget _buildEditIcon(BuildContext context) {
    if (controller.isLoggedUser) {
      return Align(
        alignment: Alignment.topRight,
        child: Padding(
          padding: const EdgeInsets.only(top: 60.0, right: 12.0),
          child: IconButton(
              icon: const Icon(Icons.edit, color: Colors.blue),
              onPressed: () {
                Get.toNamed(Routes.EDIT_USER);
              }),
        ),
      );
    }
    return Gaps.empty;
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: Get.width,
        height: UserProfileController.INFO_PANEL_HEIGHT,
        child: Stack(
          children: [
            _buildBg(),
            Container(
                width: Get.width,
                height: UserProfileController.INFO_PANEL_HEIGHT,
                decoration: BoxDecoration(
                  gradient: AppGradient.linearGradient(
                    const Color(0xFF151C26),
                  ),
                )),
            _buildBody(context),
            _buildEditIcon(context),
          ],
        ));
  }

  Widget _buildBg() {
    return SizedBox(
      width: Get.width,
      height: UserProfileController.INFO_PANEL_HEIGHT,
      child: Image.asset(R.ASSETS_IMAGES_ISTOCKPHOTO_PNG, fit: BoxFit.cover),
    );
  }

  Widget _buildBody(BuildContext context) {
    ParseModelUsers? userData = controller.state.detailModel;

    return SizedBox(
      width: Get.width,
      height: UserProfileController.INFO_PANEL_HEIGHT,
      child: Column(
        children: [
          const SizedBox(height: 100),
          Container(
            height: 120,
            width: 120,
            decoration: const BoxDecoration(
              shape: BoxShape.circle,
            ),
            child: ClipRRect(
              borderRadius: const BorderRadius.all(Radius.circular(60.0)),
              child: buildParseModelUsersImage(userData!),
            ),
          ),
        ],
      ),
    );
  }
}
