import 'package:flutter/material.dart';
import 'package:ieatta/src/components/navigation/top_back_arrow_view.dart';

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
    return Scaffold(
        body: Stack(
      children: [
        Container(
          child: FetchUser(
            userId: _userId,
          ),
        ),
        // TopBackArrowView(
        //   isBackColor: false,
        // ),
      ],
    ));
  }
}
