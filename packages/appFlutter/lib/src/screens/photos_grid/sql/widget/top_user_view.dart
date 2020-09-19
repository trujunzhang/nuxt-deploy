import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/src/components/avatar_widget.dart';
import 'package:ieatta/src/screens/photos_grid/fb/widget/top_user_view.dart';
import 'package:provider/provider.dart';

class TopUserView extends StatefulWidget {
  TopUserView({Key key, this.photo}) : super(key: key);

  final SqlPhotos photo;

  @override
  _TopUserViewState createState() => _TopUserViewState();
}

class _TopUserViewState extends State<TopUserView> {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);

    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;

          if (user == null) {
            return Container();
          }

          return TopBaseUserView(user: user);
        });
  }
}
