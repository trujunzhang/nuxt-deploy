import 'package:flutter/material.dart';

class NoCamera extends StatefulWidget {
  NoCamera({Key? key}) : super(key: key);

  @override
  _NoCameraState createState() => _NoCameraState();
}

class _NoCameraState extends State<NoCamera> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Tap a camera',
        style: TextStyle(
          color: Colors.black,
          fontSize: 24.0,
          fontWeight: FontWeight.w900,
        ),
      ),
    );
  }
}
