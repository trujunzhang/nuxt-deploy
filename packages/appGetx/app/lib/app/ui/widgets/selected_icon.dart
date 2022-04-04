import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

// buildSelectedIcon()
class SelectedIcon extends StatelessWidget {
  const SelectedIcon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 12, top: 12),
      child: SizedBox(
        width: 30,
        height: 30,
        child: Image.asset(
          R.ASSETS_PLACEHOLDER_SELECTION_PNG,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
