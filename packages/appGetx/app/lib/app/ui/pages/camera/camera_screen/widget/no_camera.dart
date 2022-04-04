import 'package:flutter/material.dart';

class NoCamera extends StatelessWidget {
  const NoCamera({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
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
