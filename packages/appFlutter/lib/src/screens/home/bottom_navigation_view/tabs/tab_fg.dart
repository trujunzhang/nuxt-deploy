import 'package:flutter/material.dart';
import 'package:ieatta/src/utils/hex_color.dart';

import '../../fitness_app_theme.dart';

class TabFg extends StatefulWidget {
  TabFg({Key key, this.animationController, this.addClick}) : super(key: key);

  final AnimationController animationController;
  final Function addClick;

  @override
  _TabFgState createState() => _TabFgState();
}

class _TabFgState extends State<TabFg> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).padding.bottom),
      child: SizedBox(
        width: 38 * 2.0,
        height: 38 + 62.0,
        child: Container(
          alignment: Alignment.topCenter,
          color: Colors.transparent,
          child: SizedBox(
            width: 38 * 2.0,
            height: 38 * 2.0,
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: ScaleTransition(
                alignment: Alignment.center,
                scale: Tween<double>(begin: 0.0, end: 1.0).animate(
                    CurvedAnimation(
                        parent: widget.animationController,
                        curve: Curves.fastOutSlowIn)),
                child: Container(
                  // alignment: Alignment.center,s
                  decoration: BoxDecoration(
                    color: FitnessAppTheme.nearlyDarkBlue,
                    gradient: LinearGradient(colors: [
                      FitnessAppTheme.nearlyDarkBlue,
                      HexColor('#6A88E5'),
                    ], begin: Alignment.topLeft, end: Alignment.bottomRight),
                    shape: BoxShape.circle,
                    boxShadow: <BoxShadow>[
                      BoxShadow(
                          color:
                              FitnessAppTheme.nearlyDarkBlue.withOpacity(0.4),
                          offset: const Offset(8.0, 16.0),
                          blurRadius: 16.0),
                    ],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      splashColor: Colors.white.withOpacity(0.1),
                      highlightColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      onTap: () {
                        widget.addClick();
                      },
                      child: Icon(
                        Icons.photo_camera,
                        color: FitnessAppTheme.white,
                        size: 32,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
