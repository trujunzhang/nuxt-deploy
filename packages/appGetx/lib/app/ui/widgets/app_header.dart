import 'package:flutter/material.dart';

Widget appHeaderTitle() {
  return Column(
    children: [
      Text(
        'IEATTA',
        style: TextStyle(
          fontWeight: FontWeight.w600,
          fontSize: 18,
        ),
      ),
      Text(
        'Eating Experience Track',
        style: TextStyle(
          fontWeight: FontWeight.w600,
          fontSize: 12,
        ),
      ),
    ],
  );
}
