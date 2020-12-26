import 'package:flutter/material.dart';

Widget buildTextSectionTitle(String text) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 10.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          text,
          style: TextStyle(fontSize: 18.0,
              fontWeight: FontWeight.w400,
          ),
        ),
      ],
    ),
  );
}
