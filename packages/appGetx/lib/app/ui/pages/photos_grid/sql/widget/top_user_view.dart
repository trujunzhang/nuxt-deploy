import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/pages/photos_grid/fb/widget/top_base_user_view.dart';

class TopUserView extends GetWidget<AuthController> {
  final int selectedIndex;
  final int totalCount;

  const TopUserView(
      {Key? key, required this.selectedIndex, required this.totalCount})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    AuthUserModel? loggedUser = controller.getAuthUserModel();

    return TopBaseUserView(
      user: loggedUser!,
      selectedIndex: selectedIndex,
      totalCount: totalCount,
    );
  }
}
