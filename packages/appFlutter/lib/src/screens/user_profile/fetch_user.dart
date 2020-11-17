import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/User_menu.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/screens/user_profile/pages/summary_page.dart';
import 'package:provider/provider.dart';

class FetchUser extends StatelessWidget {
  final String userId;

  const FetchUser({Key key, @required this.userId}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);

    List<UserMenu> menus = UserMenu.updateUserMenus();

    return FutureBuilder<ParseModelUsers>(
        future: firestoreDatabase.getUser(userId: userId),
        builder: (context, AsyncSnapshot<ParseModelUsers> snapshot) {
          if (snapshot.hasData) {
            return SummaryPage(
              userData: snapshot.data,
              userMenus: menus,
            );
          } else {
            return Container();
          }
        });
  }
}
