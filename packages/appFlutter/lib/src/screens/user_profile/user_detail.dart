import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:provider/provider.dart';

import 'pages/summary_page.dart';

/// User detailed page for common user.
class UserDetail extends StatelessWidget {
  UserDetail({Key? key, required this.userId}) : super(key: key);

  final String userId;

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    return StreamBuilder<AuthUserModel?>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel?> snapshot) {
          final AuthUserModel? user = snapshot.data;
          if (snapshot.hasData == false || user == null) {
            return Container();
          }
          return SummaryPage(
            userId: userId,
            isLoggedUser: user.uid == userId,
          );
        });
  }
}
