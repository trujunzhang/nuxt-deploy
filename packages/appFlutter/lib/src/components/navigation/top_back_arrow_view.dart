
import 'package:flutter/material.dart';

import 'arrow_helper.dart';

class TopBackArrowView extends StatefulWidget {
  TopBackArrowView({Key key, this.isBackColor = false}) : super(key: key);

  final bool isBackColor;

  @override
  _TopBackArrowViewState createState() => _TopBackArrowViewState();
}

class _TopBackArrowViewState extends State<TopBackArrowView> {
  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.topLeft,
      child: Padding(
        padding: const EdgeInsets.only(top: 45.0, left: 12.0),
        child: IconButton(
            icon: Icon(getArrowBackIcon()),
            color: widget.isBackColor ? Colors.black : Colors.white,
            onPressed: () {
              Navigator.of(context).pop();
            }),
      ),
    );
  }
}
