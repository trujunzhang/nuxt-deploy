import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/src/screens/photos_grid/fb/widget/top_user_view.dart';
import 'package:provider/provider.dart';

class TopUserView extends StatelessWidget {
  final int selectedIndex;
  final int totalCount;

  const TopUserView(
      {Key key,
      @required this.selectedIndex,
      @required this.totalCount})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);

    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel loggedUser = snapshot.data;

          if (loggedUser == null) {
            return Container();
          }

          return TopBaseUserView(
            user: loggedUser,
            selectedIndex: selectedIndex,
            totalCount: totalCount,
          );
        });
  }
}
