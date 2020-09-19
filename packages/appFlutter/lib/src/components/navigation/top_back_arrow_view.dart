import 'package:flutter/material.dart';

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
        padding: const EdgeInsets.only(top: 30.0),
        child: IconButton(
            icon: Icon(Icons.arrow_back),
            color: widget.isBackColor ? Colors.black : Colors.white,
            onPressed: () {
              Navigator.of(context).pop();
            }),
      ),
    );
  }
}
