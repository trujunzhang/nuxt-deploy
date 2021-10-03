import 'package:flutter/material.dart';
import 'package:ieatta/components/components.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:provider/provider.dart';

import 'pages/summary_page.dart';

/// User detailed page for logged user.
class Profile extends StatelessWidget {
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
            leadingType: AppBarBackType.None,
            userId: user.uid,
            isLoggedUser: true,
          );
        });
  }
}
