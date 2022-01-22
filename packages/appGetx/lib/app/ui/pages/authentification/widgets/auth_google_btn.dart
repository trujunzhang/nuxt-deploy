import 'package:flutter/material.dart';
import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class AuthGoogleBtn extends GetView<AuthController> {
  const AuthGoogleBtn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.transparent,
        height: 48,
        padding: const EdgeInsets.only(top: 8),
        child: GoogleSignInButton(
          // text: widget.isSignIn ? 'Sign in with Google' : 'Sign up with Google',
          text: 'Sign in with Google',
          onPressed: controller.signInWithGoogle,
          darkMode: true, // default: false
        ));
  }
}
