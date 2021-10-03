import 'package:flutter/material.dart';

Widget seeAllList(int len, GestureTapCallback onTap) {
  if (len == 0) {
    return Container();
  }
  return Container(
    margin: EdgeInsets.only(left: 6, right: 6, top: 6, bottom: 6),
    height: 60,
    child: Card(
        child: ListTile(
      onTap: onTap,
      title: Text(
        'See all ' + (len.toString()),
      ),
      trailing: Icon(Icons.keyboard_arrow_right),
    )),
  );
}
