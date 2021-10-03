import 'dart:async';
import 'dart:convert';
import 'dart:math';

import 'package:crypto/crypto.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:google_sign_in/google_sign_in.dart';

class AuthentificationService extends GetxService {
  // initialize variables
  final FirebaseAuth _auth = FirebaseAuth.instance;

  // get current firebase user
  User? get user => _auth.currentUser;

  // initialize service
  Future<AuthentificationService> init() async {
    return this;
  }

  // get user state
  Stream<User?> getUserChanges() {
    return _auth.userChanges();
  }

  // sing in with email and password
  Future<User?> createUserWithEmailAndPassword(
      String email, String password) async {
    try {
      UserCredential userCredential = await FirebaseAuth.instance
          .createUserWithEmailAndPassword(
              email: email.trim(), password: password);

      // if no error return user
      return userCredential.user;

      // catch any erro and throw the same error
    } on FirebaseAuthException catch (e) {
      throw e.code;
    }
  }

  // sing in with email and password
  Future<User?> signInUserWithEmailAndPassword(
      String email, String password) async {
    try {
      UserCredential userCredential = await FirebaseAuth.instance
          .signInWithEmailAndPassword(email: email.trim(), password: password);

      // if no error return user
      return userCredential.user;

      // catch any erro and throw the same error
    } on FirebaseAuthException catch (e) {
      throw e.code;
    }
  }

  // verify email
  Future reloadUser() async {
    try {
      // If successful, reload the user:
      this.user!.reload();
    } on FirebaseAuthException catch (e) {
      throw (e.code);
    }
  }

  // is email verified
  bool isVerifiedEmail() {
    return this.user!.emailVerified;
  }

  // send email verification
  Future<bool> sendEmailVerification() async {
    try {
      // send email verfication with firebase
      return await user!.sendEmailVerification().then((value) => true);
    } catch (e) {
      throw e;
    }
  }

  //google_sign_in: ^4.5.1
  Future<UserCredential> signInWithGoogle() async {
    try {
      // Trigger the authentication flow
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

      // Obtain the auth details from the request
      final GoogleSignInAuthentication googleAuth =
          await googleUser!.authentication;

      // Create a new credential
      final OAuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
      // Once signed in, return the UserCredential
      return await _auth.signInWithCredential(credential);
    } catch (e) {
      throw e;
    }
  }

  //sign_in_with_apple: ^2.5.2
  /// Generates a cryptographically secure random nonce, to be included in a
  /// credential request.
  String generateNonce([int length = 32]) {
    final charset =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._';
    final random = Random.secure();
    return List.generate(length, (_) => charset[random.nextInt(charset.length)])
        .join();
  }

  /// Returns the sha256 hash of [input] in hex notation.
  String sha256ofString(String input) {
    final bytes = utf8.encode(input);
    final digest = sha256.convert(bytes);
    return digest.toString();
  }

  // get acces token
  Future<String> getAccessToken() async {
    return await user!.getIdToken();
  }

  // send password reset email
  Future<void> sendPasswordResetMail(String email) async {
    print("sent reset password");
    await _auth.sendPasswordResetEmail(email: email);
    return null;
  }

  // update password
  Future<void> changePassword(String password) async {
    user!.updatePassword(password).then((_) {
      print("Succesfull changed password");
    }).catchError((error) {
      print("Password can't be changed" + error.toString());
    });
    return null;
  }

  // delete user
  Future<void> deleteUser() async {
    user!.delete().then((_) {
      print("Succesfull user deleted");
    }).catchError((error) {
      print("user can't be delete" + error.toString());
    });
    return null;
  }

  // sign out
  Future signOut() async {
    // try {
    return await _auth.signOut();
    // } catch (e) {
    //   throw e.code;
    // }
  }
}
