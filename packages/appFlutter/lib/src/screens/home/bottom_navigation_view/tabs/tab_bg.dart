import 'package:flutter/material.dart';

import '../../fitness_app_theme.dart';
import '../models/tabIcon_data.dart';
import '../widgets/tab_clipper.dart';
import '../widgets/tab_icons.dart';

class TabBg extends StatefulWidget {
  TabBg(
      {Key key, this.animationController, this.changeIndex, this.tabIconsList})
      : super(key: key);

  final AnimationController animationController;
  final List<TabIconData> tabIconsList;
  final Function(int index) changeIndex;

  @override
  _TabBgState createState() => _TabBgState();
}

class _TabBgState extends State<TabBg> {
  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: widget.animationController,
      builder: (BuildContext context, Widget child) {
        return Transform(
          transform: Matrix4.translationValues(0.0, 0.0, 0.0),
          child: PhysicalShape(
            color: FitnessAppTheme.white,
            elevation: 16.0,
            clipper: TabClipper(
                radius: Tween<double>(begin: 0.0, end: 1.0)
                        .animate(CurvedAnimation(
                            parent: widget.animationController,
                            curve: Curves.fastOutSlowIn))
                        .value *
                    38.0),
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 62,
//                      height: 0,
                  child: Padding(
                    padding: const EdgeInsets.only(left: 8, right: 8, top: 4),
                    child: Row(
                      children: <Widget>[
                        Expanded(
                          child: TabIcons(
                              tabIconData: widget.tabIconsList[0],
                              removeAllSelect: () {
                                setRemoveAllSelection(widget.tabIconsList[0]);
                                widget.changeIndex(0);
                              }),
                        ),
                        Expanded(
                          child: TabIcons(
                              tabIconData: widget.tabIconsList[1],
                              removeAllSelect: () {
                                setRemoveAllSelection(widget.tabIconsList[1]);
                                widget.changeIndex(1);
                              }),
                        ),
                        SizedBox(
                          width: Tween<double>(begin: 0.0, end: 1.0)
                                  .animate(CurvedAnimation(
                                      parent: widget.animationController,
                                      curve: Curves.fastOutSlowIn))
                                  .value *
                              64.0,
                        ),
                        Expanded(
                          child: TabIcons(
                              tabIconData: widget.tabIconsList[2],
                              removeAllSelect: () {
                                setRemoveAllSelection(widget.tabIconsList[2]);
                                widget.changeIndex(2);
                              }),
                        ),
                        Expanded(
                          child: TabIcons(
                              tabIconData: widget.tabIconsList[3],
                              removeAllSelect: () {
                                setRemoveAllSelection(widget.tabIconsList[3]);
                                widget.changeIndex(3);
                              }),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(
                  height: MediaQuery.of(context).padding.bottom,
                )
              ],
            ),
          ),
        );
      },
    );
  }

  void setRemoveAllSelection(TabIconData tabIconData) {
    if (!mounted) return;
    setState(() {
      widget.tabIconsList.forEach((TabIconData tab) {
        tab.isSelected = false;
        if (tabIconData.index == tab.index) {
          tab.isSelected = true;
        }
      });
    });
  }
}
