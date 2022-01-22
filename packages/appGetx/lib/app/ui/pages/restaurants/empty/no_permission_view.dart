import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:permission_handler/permission_handler.dart';

import '../index.dart';

final ButtonStyle raisedButtonStyle = ElevatedButton.styleFrom(
  onPrimary: Colors.black87,
  primary: Colors.grey[300],
  minimumSize: const Size(88, 36),
  padding: const EdgeInsets.symmetric(horizontal: 16),
  shape: const RoundedRectangleBorder(
    borderRadius: BorderRadius.all(Radius.circular(2)),
  ),
);

class NoPermissionView extends GetWidget<RestaurantsController> {
  const NoPermissionView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Theme.of(context).colorScheme.primaryVariant,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const Text(
              "Some Permission Not Given",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18.0),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 12.0),
              child: ElevatedButton(
                // style: raisedButtonStyle,
                child: const Text(
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
