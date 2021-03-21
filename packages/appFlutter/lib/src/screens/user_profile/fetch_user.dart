import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/User_menu.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/screens/user_profile/pages/summary_page.dart';

class FetchUser extends StatelessWidget {
  final String userId;
  final bool isLoggedUser;

  const FetchUser({Key key, @required this.userId, this.isLoggedUser = false})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    ParseModelUsers user = FilterModels.instance.getSingleUser(context, userId);
    List<UserMenu> menus = UserMenu.updateUserMenus(context, userId);
    return SummaryPage(
      userData: user,
      userMenus: menus,
      isLoggedUser: isLoggedUser,
    );
  }
}
