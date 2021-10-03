import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:provider/provider.dart';

import 'widgets/auth_custom_clipper.dart';
import 'widgets/auth_google_btn.dart';
import 'widgets/auth_logo.dart';

class RegisterScreen extends StatefulWidget {
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  late TextEditingController _emailController;
  late TextEditingController _passwordController;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _emailController = TextEditingController(text: "");
    _passwordController = TextEditingController(text: "");
  }

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

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Widget _buildForm(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);

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
                TextFormField(
                  controller: _emailController,
                  style: Theme.of(context).textTheme.bodyText2,
                  validator: (value) => value!.isEmpty ? S.of(context).loginTxtErrorEmail : null,
                  decoration: InputDecoration(
                      prefixIcon: Icon(
                        Icons.email,
                        color: Theme.of(context).iconTheme.color,
                      ),
                      labelText: S.of(context).loginTxtEmail,
                      border: OutlineInputBorder()),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: TextFormField(
                    obscureText: true,
                    maxLength: 12,
                    controller: _passwordController,
                    style: Theme.of(context).textTheme.bodyText2,
                    validator: (value) => value!.length < 6 ? S.of(context).loginTxtErrorPassword : null,
                    decoration: InputDecoration(
                        prefixIcon: Icon(
                          Icons.lock,
                          color: Theme.of(context).iconTheme.color,
                        ),
                        labelText: S.of(context).loginTxtPassword,
                        border: OutlineInputBorder()),
                  ),
                ),
                (authProvider.status == Status.Registering || authProvider.status == Status.GoogleAuthenticating)
                    ? Center(
                        child: CircularProgressIndicator(),
                      )
                    : RaisedButton(
                        child: Text(
                          S.of(context).loginBtnSignUp,
                          style: Theme.of(context).textTheme.button,
                        ),
                        onPressed: () async {
                          if (_formKey.currentState!.validate()) {
                            FocusScope.of(context).unfocus(); //to hide the keyboard - if any

                            AuthUserModel? userModel = await authProvider.registerWithEmailAndPassword(
                                _emailController.text, _passwordController.text);

                            if (userModel == null) {
                              _scaffoldKey.currentState!.showSnackBar(SnackBar(
                                content: Text(S.of(context).loginTxtErrorSignIn),
                              ));
                            }
                          }
                        }),
                AuthGoogleBtn(
                  isSignIn: false,
                  scaffoldKey: _scaffoldKey,
                ),
                (authProvider.status == Status.Registering || authProvider.status == Status.GoogleAuthenticating)
                    ? Center(
                        child: null,
                      )
                    : Padding(
                        padding: const EdgeInsets.only(top: 48),
                        child: Center(
                            child: Text(
                          S.of(context).loginTxtHaveAccount,
                          style: Theme.of(context).textTheme.button,
                        )),
                      ),
                (authProvider.status == Status.Registering || authProvider.status == Status.GoogleAuthenticating)
                    ? Center(
                        child: null,
                      )
                    : TextButton(
                        child: Text(S.of(context).loginBtnLinkSignIn,
                            style: TextStyle(
                              color: Theme.of(context).iconTheme.color,
                            )),
                        onPressed: () {
                          // Navigator.of(context)
                          //     .pushReplacementNamed(Routes.login);
                        },
                      ),
              ],
            ),
          ),
        ));
  }

  Widget _buildBackground() {
    return ClipPath(
      clipper: AuthCustomClipper(),
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height * 0.5,
        color: Theme.of(context).iconTheme.color,
      ),
    );
  }
}
