import 'package:firebase_auth/firebase_auth.dart';

bool isLoggedIn() {
  if (FirebaseAuth.instance.currentUser != null) {
    return true;
  } else {
    return false;
  }
}
