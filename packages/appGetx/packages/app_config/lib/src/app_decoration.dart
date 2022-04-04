import 'package:flutter/material.dart';
import 'app_colors.dart';

class AppDecoration {
  static InputDecoration searchTextField = InputDecoration(
    contentPadding: const EdgeInsets.only(left: 18.0, right: 18.0),
    filled: true,
    // fillColor: Colors.white,
    border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(48),
        borderSide: const BorderSide(color: Colors.blue, width: 1)),
    enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(48),
        borderSide: const BorderSide(color: AppColors.loginBorder, width: 1)),
    focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(48),
        borderSide: const BorderSide(color: AppColors.loginBorder, width: 1)),
    hintStyle: const TextStyle(color: AppColors.loginHint),
  );

}
