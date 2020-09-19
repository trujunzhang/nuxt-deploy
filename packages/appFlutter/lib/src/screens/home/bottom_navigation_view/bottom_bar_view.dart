import 'package:flutter/material.dart';

import 'models/tabIcon_data.dart';
import 'tabs/tab_bg.dart';
import 'tabs/tab_fg.dart';

class BottomBarView extends StatefulWidget {
  const BottomBarView(
      {Key key, this.tabIconsList, this.changeIndex, this.addClick})
      : super(key: key);

  final Function addClick;
  final Function(int index) changeIndex;
  final List<TabIconData> tabIconsList;

  @override
  _BottomBarViewState createState() => _BottomBarViewState();
}

class _BottomBarViewState extends State<BottomBarView>
    with TickerProviderStateMixin {
  AnimationController animationController;

  @override
  void initState() {
    animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    );
    animationController.forward();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: AlignmentDirectional.bottomCenter,
      children: <Widget>[
        TabBg(
            animationController: animationController,
            tabIconsList: widget.tabIconsList,
            changeIndex: widget.changeIndex),
        TabFg(
          animationController: animationController,
          addClick: widget.addClick,
        )
      ],
    );
  }
}
