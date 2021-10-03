import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:permission_handler/permission_handler.dart';

import '../restaurants.controller.dart';

final ButtonStyle raisedButtonStyle = ElevatedButton.styleFrom(
  onPrimary: Colors.black87,
  primary: Colors.grey[300],
  minimumSize: Size(88, 36),
  padding: EdgeInsets.symmetric(horizontal: 16),
  shape: const RoundedRectangleBorder(
    borderRadius: BorderRadius.all(Radius.circular(2)),
  ),
);

class NoPermissionView extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Theme.of(context).colorScheme.primaryVariant,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              "Some Permission Not Given",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 12.0),
              child: ElevatedButton(
                style: raisedButtonStyle,
                child: Text(
                  "Give Permissions",
                ),
                onPressed: () async {
                  await openAppSettings();
                  await controller.requestAppPermission();
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}
