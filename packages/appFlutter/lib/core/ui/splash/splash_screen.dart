import 'dart:async';

import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    startTimer();
  }

  @override
  Widget build(BuildContext context) {
    var imageContainer = Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/splash.png'),
          fit: BoxFit.contain,
        ),
      ),
    );
    var centerContainer = SizedBox(
      width: 344,
      height: 345,
      child: imageContainer,
    );
    var bgView = Container(
      padding: const EdgeInsets.only(bottom: 80.0),
      color: Colors.white,
      child: Center(
        child: centerContainer,
      ),
    );

    return bgView;
  }

  startTimer() {
    var duration = Duration(milliseconds: 3000);
    return Timer(duration, redirect);
  }

  redirect() async {
    Navigator.of(context).pushReplacementNamed(Routes.home);
  }
}
