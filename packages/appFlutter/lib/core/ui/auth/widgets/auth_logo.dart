import 'package:flutter/material.dart';
import 'package:ieatta/src/layout/app_theme.dart';

class AuthLogo extends StatelessWidget {
  const AuthLogo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var imageContainer = Container(
      height: 120,
      width: 120,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: <BoxShadow>[
          BoxShadow(
              color: AppTheme.grey.withOpacity(0.6),
              offset: const Offset(2.0, 4.0),
              blurRadius: 8),
        ],
      ),
      child: ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(60.0)),
        child: Image.asset(
          // 'assets/placeholder/user_60_square.png',
            'assets/logo.png',
        ),
      ),
    );
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: imageContainer,
    );
  }
}
