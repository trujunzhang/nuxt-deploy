import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/screens/edit/user/user_page.dart';
import 'package:provider/provider.dart';

class EditUserScreen extends StatefulWidget {
  @override
  _EditUserScreenState createState() => _EditUserScreenState();
}

class _EditUserScreenState extends State<EditUserScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;
          if (user == null) {
            return Container();
          }
          return FutureBuilder<ParseModelUsers>(
              future: firestoreDatabase.getUser(userId: user.uid),
              builder: (context, AsyncSnapshot<ParseModelUsers> snapshot) {
                if (snapshot.hasData) {
                  return UserPage(
                    loggedUser: snapshot.data,
                  );
                } else {
                  return Container();
                }
              });
        });
  }
}
