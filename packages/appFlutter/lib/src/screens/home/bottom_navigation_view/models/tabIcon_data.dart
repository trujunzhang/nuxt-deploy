import 'package:flutter/material.dart';

class TabIconData {
  TabIconData({
    this.icon,
    this.index = 0,
    this.isSelected = false,
    this.animationController,
  });

  IconData icon;
  bool isSelected;
  int index;

  AnimationController animationController;

  static List<TabIconData> resetTabIconsList() {
    List<TabIconData> list = tabIconsList;
    list.forEach((TabIconData tab) {
      tab.isSelected = false;
    });
    list[0].isSelected = true;
    return list;
  }

  static List<TabIconData> tabIconsList = <TabIconData>[
    TabIconData(
      icon: Icons.restaurant,
      index: 0,
      isSelected: true,
      animationController: null,
    ),
    TabIconData(
      icon: Icons.people,
      index: 1,
      isSelected: false,
      animationController: null,
    ),
    TabIconData(
      icon: Icons.rate_review,
      index: 2,
      isSelected: false,
      animationController: null,
    ),
    TabIconData(
      icon: Icons.settings,
      index: 3,
      isSelected: false,
      animationController: null,
    ),
  ];
}
