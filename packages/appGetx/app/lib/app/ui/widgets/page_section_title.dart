import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

Widget buildTextSectionTitle(String text) {
  return Padding(
    padding:
        const EdgeInsets.only(left: 8.0, right: 8.0, top: 24, bottom: 12.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          text,
          style: AppTextStyles.sectionTitle,
        ),
      ],
    ),
  );
}

Widget buildCoverSectionTitle() {
  return Padding(
    padding:
        const EdgeInsets.only(left: 8.0, right: 8.0, top: 24, bottom: 10.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: const <Widget>[
        Text(
          "Select Cover",
          style: TextStyle(
            fontSize: Dimens.font_sp22,
            // color: Colors.black,
          ),
        ),
      ],
    ),
  );
}
