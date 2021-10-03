import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'widgets/auth_custom_clipper.dart';
import 'widgets/auth_google_btn.dart';
import 'widgets/auth_logo.dart';

class SocialLoginScreen extends StatelessWidget {
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      body: Stack(
        children: <Widget>[
          _buildBackground(),
          Align(
            alignment: Alignment.center,
            child: _buildForm(context),
          ),
        ],
      ),
    );
  }

  Widget _buildForm(BuildContext context) {
    return Form(
        key: _formKey,
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                AuthLogo(),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20),
                ),
                AuthGoogleBtn(),
              ],
            ),
          ),
        ));
  }

  Widget _buildBackground() {
    return ClipPath(
      clipper: AuthCustomClipper(),
      child: Container(
        width: Get.width,
        height: Get.height * 0.5,
        color: Colors.orangeAccent,
      ),
    );
  }
}
