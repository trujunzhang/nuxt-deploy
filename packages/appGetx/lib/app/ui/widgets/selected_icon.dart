import 'package:flutter/material.dart';

// buildSelectedIcon()
class SelectedIcon extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(right: 12, top: 12),
      child: Container(
        width: 30,
        height: 30,
        child: Image.asset(
          'assets/placeholder/selection.png',
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
