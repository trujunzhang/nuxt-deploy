import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../index.dart';

class WaitersSectionTitle extends GetWidget<DetailEventController> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 4.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Text(
            "Waiters",
            style: TextStyle(
              fontSize: 17.0,
              fontWeight: FontWeight.w400,
            ),
          ),
          Container(
              width: 40,
              height: 40,
              child: InkWell(
                onTap: () {
                  controller.onAddWaiterIconPress(context);
                },
                child: Icon(
                  Icons.add,
                  color: Colors.grey,
                ),
              )),
        ],
      ),
    );
  }
}
