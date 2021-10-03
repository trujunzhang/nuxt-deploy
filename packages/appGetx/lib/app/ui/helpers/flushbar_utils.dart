import 'package:another_flushbar/flushbar.dart';
import 'package:flutter/material.dart';

class FlushBarUtils {
  static show(
    BuildContext context, {
    required String title,
    required String message,
  }) {
    var _flushBar = Flushbar(
      flushbarPosition: FlushbarPosition.TOP,
      flushbarStyle: FlushbarStyle.GROUNDED,
      backgroundColor: Colors.red,
      boxShadows: [
        BoxShadow(
          color: Colors.red[800]!,
          offset: Offset(0.0, 2.0),
          blurRadius: 3.0,
        )
      ],
      isDismissible: false,
      duration: Duration(seconds: 4),
      // now we want to swipe to the sides
      dismissDirection: FlushbarDismissDirection.HORIZONTAL,
      // The default curve is Curves.easeOut
      forwardAnimationCurve: Curves.fastLinearToSlowEaseIn,
      title: title,
      message: message,
      icon: Icon(
        Icons.save_rounded,
        color: Colors.blue,
      ),
    );

    _flushBar.show(context);
  }
}
