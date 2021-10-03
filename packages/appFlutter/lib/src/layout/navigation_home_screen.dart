import 'package:flustars/flustars.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/core/ui/setting/setting_screen.dart';
import 'package:ieatta/src/layout/app_theme.dart';
import 'package:ieatta/src/layout/custom_drawer/drawer_user_controller.dart';
import 'package:ieatta/src/screens/restaurants/provider_screen.dart';
import 'package:ieatta/src/screens/user_profile/profile.dart';

import 'custom_drawer/draw_model.dart';
import 'sidebar_views/help_screen.dart';
import 'sidebar_views/invite_friend_screen.dart';
import 'sidebar_views/about_screen.dart';

class NavigationHomeScreen extends StatefulWidget {
  @override
  _NavigationHomeScreenState createState() => _NavigationHomeScreenState();
}

class _NavigationHomeScreenState extends State<NavigationHomeScreen> {
  late Widget screenView;
  late DrawerIndex drawerIndex;

  @override
  void initState() {
    drawerIndex = DrawerIndex.HOME;
    screenView = AppHomeScreen(); // used
    // screenView = MultiProviderScreen(); // test
    // screenView = Profile(); // test
    // screenView = EditUserScreen(); // test
    // screenView = HelpScreen(); // test
    // screenView = SettingScreen(); // test
    // screenView = InviteFriend(); // test
    // screenView = AboutScreen(); // test

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppTheme.nearlyWhite,
      child: SafeArea(
        top: false,
        bottom: false,
        child: Scaffold(
          backgroundColor: AppTheme.nearlyWhite,
          body: DrawerUserController(
            screenIndex: drawerIndex,
            drawerWidth: ScreenUtil.getInstance().screenWidth * 0.75,
            onDrawerCall: (DrawerIndex drawerIndexData) {
              changeIndex(drawerIndexData);
              //callback from drawer for replace screen as user need with passing DrawerIndex(Enum index)
            },
            screenView: screenView,
            //we replace screen view as we need on navigate starting screens like MyHomePage, HelpScreen, FeedbackScreen, etc...
          ),
        ),
      ),
    );
  }

  void changeIndex(DrawerIndex drawerIndexData) {
    if (drawerIndex != drawerIndexData) {
      drawerIndex = drawerIndexData;
      if (drawerIndex == DrawerIndex.HOME) {
        setState(() {
          screenView = AppHomeScreen();
        });
      } else if (drawerIndex == DrawerIndex.Profile) {
        setState(() {
          screenView = Profile();
        });
      } else if (drawerIndex == DrawerIndex.Settings) {
        setState(() {
          screenView = SettingScreen();
        });
      } else if (drawerIndex == DrawerIndex.Help) {
        setState(() {
          screenView = HelpScreen();
        });
      } else if (drawerIndex == DrawerIndex.FeedBack) {
        setState(() {
          // screenView = FeedbackScreen();
        });
      } else if (drawerIndex == DrawerIndex.About) {
        setState(() {
          screenView = AboutScreen();
        });
      } else if (drawerIndex == DrawerIndex.Invite) {
        setState(() {
          screenView = InviteFriend();
        });
      } else {
        //do in your way......
      }
    }
  }
}
