import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class ToastUtils {
  static void showToast(
    String msg, {
    Toast length = Toast.LENGTH_SHORT,
    ToastGravity gravity = ToastGravity.BOTTOM,
  }) {
    Fluttertoast.showToast(
      msg: msg,
      toastLength: length,
      gravity: gravity,
      textColor: Colors.white,
      backgroundColor: Colors.black.withOpacity(0.7),
    );
  }
}
