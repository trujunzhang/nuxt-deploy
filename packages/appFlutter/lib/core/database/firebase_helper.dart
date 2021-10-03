import 'package:ieatta/core/services/firestore_path.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/src/appModels/models/Users.dart';

class IAuthUser {
  final String uid;
  final String? email;
  final String? displayName;
  final String? photoURL;

  IAuthUser(this.uid, this.email, this.displayName, this.photoURL);
}

class FirebaseHelper {
  static createUser(ParseModelUsers user) async {
    bool exist = await FirestoreService.instance.checkData(path: FirestorePath.user(user.id));

    if (exist == false) {
      await FirestoreService.instance.setData(path: FirestorePath.user(user.id), data: user.toMap());
    } else {
      // var x = 0;
    }
  }

  static onLoginAfterHook(IAuthUser model) async {
    var user = ParseModelUsers.getUserModel(model);
    await FirebaseHelper.createUser(user);
  }
}
