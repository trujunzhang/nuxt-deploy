import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/providers/user_state.dart';
import 'package:ieatta/src/screens/edit/user/user_page.dart';
import 'package:provider/provider.dart';

class EditUserScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilder<AuthUserModel?>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel?> snapshot) {
          final AuthUserModel? user = snapshot.data;
          if (user == null) {
            return Container();
          }
          return FutureBuilder<ParseModelUsers>(
              future: firestoreDatabase.getUser(userId: user.uid),
              builder: (context, AsyncSnapshot<ParseModelUsers> snapshot) {
                if (snapshot.hasData) {
                  return ChangeNotifierProvider<UserState>(
                      create: (context) =>
                          UserState(username: snapshot.data!.username, originalUrl: snapshot.data!.originalUrl!),
                      child: UserPage(
                        loggedUser: snapshot.data!,
                      ));
                } else {
                  return Container();
                }
              });
        });
  }
}
