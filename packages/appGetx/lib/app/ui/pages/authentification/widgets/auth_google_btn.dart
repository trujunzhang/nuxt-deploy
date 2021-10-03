import 'package:flutter/material.dart';
import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/controller/auth.controller.dart';

class AuthGoogleBtn extends GetView<AuthController> {
  @override
  Widget build(BuildContext context) {
    // final authProvider = Provider.of<AuthProvider>(context);
    // if (authProvider.status == Status.Authenticating ||
    //     authProvider.status == Status.Registering ||
    //     authProvider.status == Status.GoogleAuthenticating) {
    //   return Center(
    //     child: CircularProgressIndicator(),
    //   );
    // }
    return Container(
        color: Colors.transparent,
        height: 48,
        padding: const EdgeInsets.only(top: 8),
        child: GoogleSignInButton(
          // text: widget.isSignIn ? 'Sign in with Google' : 'Sign up with Google',
          text: 'Sign in with Google',
          onPressed: () => controller.signInWithGoogle(),
          darkMode: true, // default: false
        ));
  }
}
