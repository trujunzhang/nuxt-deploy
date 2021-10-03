import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:provider/provider.dart';

import 'camera_uploading_panel.dart';

class CameraUploadingUser extends StatelessWidget {
  final String imagePath;

  const CameraUploadingUser({Key? key, required this.imagePath}) : super(key: key);

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
                  return CameraUploadingPanel(
                      loggedUser: snapshot.data!, // User model.
                      imagePath: imagePath);
                } else {
                  return Container();
                }
              });
        });
  }
}
