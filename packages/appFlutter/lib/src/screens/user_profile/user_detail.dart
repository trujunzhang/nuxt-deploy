import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:provider/provider.dart';

import 'fetch_user.dart';

/// User detailed page for common user.
class UserDetail extends StatefulWidget {
  UserDetail({Key key}) : super(key: key);

  @override
  _UserDetailState createState() => _UserDetailState();
}

class _UserDetailState extends State<UserDetail> {
  String _userId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
  }

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;
          if (snapshot.hasData == false || user == null) {
            return Container();
          }
          return FetchUser(
            userId: _userId,
            isLoggedUser: user.uid == _userId,
          );
        });
  }
}
