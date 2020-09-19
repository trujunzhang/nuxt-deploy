import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/core/utils/slug_helper.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/core/services/firestore_path.dart';

class IAuthUser {
  final String uid;
  final String email;
  final String displayName;
  final String photoURL;

  IAuthUser(this.uid, this.email, this.displayName, this.photoURL);
}

class FirebaseHelper {
  static uploadUser(ParseModelUsers user) async {
    bool exist = await FirestoreService.instance
        .checkData(path: FirestorePath.user(user.id));

    if (exist == false) {
      await FirestoreService.instance
          .setData(path: FirestorePath.user(user.id), data: user.toMap());
    } else {
      var x = 0;
    }
  }

  static ParseModelUsers getUserModel(IAuthUser model) {
    String id = model.uid;
    String createdAt = '';
    String updatedAt = '';
    // Common(3)
    String username = model.displayName;
    String slug = slugifyToLower(model.displayName);
    String email = model.email;
    // Property(4)
    String loginType = 'google';
    String originalUrl = model.photoURL;
    String thumbnailUrl = "";

    return ParseModelUsers(
        // Base(3)
        id,
        createdAt,
        updatedAt,
        // Common(3)
        username,
        slug,
        email,
        // Property(3)
        loginType,
        originalUrl,
        thumbnailUrl);
  }

  static onLoginAfterHook(IAuthUser model) async {
    var user = FirebaseHelper.getUserModel(model);
    await FirebaseHelper.uploadUser(user);
  }
}
