import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';

enum DrawerIndex {
  NONE,
  HOME,
  Settings,
  FeedBack,
  Help,
  Profile,
  Share,
  About,
  Invite,
  Testing,
}

class DrawerList {
  DrawerList({
    this.isAssetsImage = false,
    this.labelName = '',
    this.icon,
    this.index,
    this.imageName = '',
  });

  String labelName;
  Icon? icon;
  bool isAssetsImage;
  String imageName;
  DrawerIndex? index;

  static List<DrawerList> getDrawerListArray(BuildContext context) {
    return [
      DrawerList(
        index: DrawerIndex.HOME,
        labelName: S.of(context).drawerMenuItemHome,
        icon: const Icon(Icons.home),
      ),
      DrawerList(
        index: DrawerIndex.Profile,
        labelName: S.of(context).drawerMenuItemProfile,
        icon: const Icon(Icons.verified_user),
      ),
      DrawerList(
        index: DrawerIndex.Settings,
        labelName: S.of(context).drawerMenuItemSettings,
        icon: const Icon(Icons.settings),
      ),
      DrawerList(
        index: DrawerIndex.Invite,
        labelName: S.of(context).drawerMenuItemInvite,
        icon: const Icon(Icons.group),
      ),
      DrawerList(
        index: DrawerIndex.Help,
        labelName: S.of(context).drawerMenuItemHelp,
        icon: const Icon(Icons.help),
      ),
      // DrawerList(
      //   index: DrawerIndex.Share,
      //   labelName: 'Rate the app',
      //   icon: const Icon(Icons.share),
      // ),
      DrawerList(
        index: DrawerIndex.About,
        labelName: S.of(context).drawerMenuItemAbout,
        icon: const Icon(Icons.info),
      ),
    ];
  }
}
