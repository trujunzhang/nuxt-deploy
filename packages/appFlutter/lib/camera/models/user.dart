part 'user.g.dart';

class User {
  String displayName;
  String profilePicture;
  String id;
  bool isActive;

  User(this.displayName, this.profilePicture, this.id, this.isActive);

  String get firstName => displayName.split(" ")[0];
}
