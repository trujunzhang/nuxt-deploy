import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var imageContainer = Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage(R.ASSETS_SPLASH_PNG),
          fit: BoxFit.contain,
        ),
      ),
    );

    return Container(
      padding: const EdgeInsets.only(bottom: 80.0),
      color: Colors.white,
      child: Center(
        child: SizedBox(
          width: 344,
          height: 345,
          child: imageContainer,
        ),
      ),
    );
  }
}
