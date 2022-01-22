import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

class AuthLogo extends StatelessWidget {
  const AuthLogo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var imageContainer = Container(
      height: 120,
      width: 120,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: <BoxShadow>[
          BoxShadow(
              color: Colors.grey.withOpacity(0.6),
              offset: const Offset(2.0, 4.0),
              blurRadius: 8),
        ],
      ),
      child: ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(60.0)),
        child: Image.asset(R.ASSETS_LOGO_PNG),
      ),
    );
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: imageContainer,
    );
  }
}
