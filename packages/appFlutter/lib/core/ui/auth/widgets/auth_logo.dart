import 'package:flutter/material.dart';

class AuthLogo extends StatelessWidget {
  const AuthLogo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var imageContainer = Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/logo.png'),
          fit: BoxFit.contain,
        ),
      ),
    );
    var centerContainer = SizedBox(
      width: 100,
      height: 100,
      child: imageContainer,
    );
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: centerContainer,
    );
  }
}
