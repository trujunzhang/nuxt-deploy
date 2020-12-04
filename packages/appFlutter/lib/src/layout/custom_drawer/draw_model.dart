import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';

enum DrawerIndex {
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
  Icon icon;
  bool isAssetsImage;
  String imageName;
  DrawerIndex index;

  static List<DrawerList> getDrawerListArray(BuildContext context) {
    return [
      DrawerList(
        index: DrawerIndex.HOME,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemHome"),
        icon: Icon(Icons.home),
      ),
      DrawerList(
        index: DrawerIndex.Profile,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemProfile"),
        icon: Icon(Icons.verified_user),
      ),
      DrawerList(
        index: DrawerIndex.Settings,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemSettings"),
        icon: Icon(Icons.settings),
      ),
      DrawerList(
        index: DrawerIndex.Invite,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemInvite"),
        icon: Icon(Icons.group),
      ),
      DrawerList(
        index: DrawerIndex.Help,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemHelp"),
        icon: Icon(Icons.help),
      ),
      // DrawerList(
      //   index: DrawerIndex.Share,
      //   labelName: 'Rate the app',
      //   icon: Icon(Icons.share),
      // ),
      DrawerList(
        index: DrawerIndex.About,
        labelName: AppLocalizations.of(context).translate("drawerMenuItemAbout"),
        icon: Icon(Icons.info),
      ),
    ];
  }
}
