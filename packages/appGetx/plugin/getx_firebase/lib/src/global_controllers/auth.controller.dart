import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import '../helpers/authentication_state.dart';
import '../data/repository/index.dart';
import '../data/model/index.dart';
import '../data/services/authentification.service.dart';

class AuthController extends GetxController {
  // initialize variables
  final RxString _email = ''.obs;
  final RxString _password = ''.obs;
  RxString error = RxString('');

  RxBool busy = RxBool(false);
  RxBool obscureText = RxBool(true);

  // GETTERS & SETTERS
  set email(value) => _email.value = value;

  get email => _email.value;

  set password(value) => _password.value = value;

  get password => _password.value;

  // initialize services
  final AuthentificationService authService = AuthentificationService();
  final UserRepository userRepository = UserRepository.getInstance();

  final Rx<AuthenticationState> _authenticationStateStream =
      const AuthenticationState().obs;

  get state => _authenticationStateStream.value;

  set state(value) => _authenticationStateStream.value = value;

  onStateChanged(fn) {
    ever(_authenticationStateStream, fn);
  }

  AuthUserModel? getAuthUserModel() {
    final user = authService.user;

    if (user == null) {
      return null;
    }

    return AuthUserModel(
        uid: user.uid,
        email: user.email ?? "",
        username: user.displayName,
        phoneNumber: user.phoneNumber,
        avatarUrl: user.photoURL);
  }

  updateFirebaseUserName(String displayName) async {
    final user = authService.user;

    // Update Firebase user's name.
    await user!.updateDisplayName(displayName);
  }

  updateFirebaseUserPhoto(String photo) async {
    final user = authService.user;

    // Update Firebase user's photo.
    await user!.updatePhotoURL(photo);
  }

  @override
  onInit() {
    _getAuthenticatedUser();
    super.onInit();
  }

  void _getAuthenticatedUser() {
    _authenticationStateStream.value = AuthenticationLoading();

    final user = authService.user;

    if (user == null) {
      state = UnAuthenticated();
    } else if (!user.emailVerified) {
      state = UnVerifiedEmail(authService: authService);
    } else {
      state = Authenticated(user: user);
    }
  }

  // creater using email & password
  void createUserWithEmailAndPassword() async {
    try {
      // reset validation errors to nothing
      // error.value = null;
      error.value = '';

      state = AuthenticationLoading();

      final result =
          await authService.createUserWithEmailAndPassword(email, password);

      if (result != null) {
        // create user
        // this.userRepository.add(ParseModelUsers(
        //     createdAt: result.metadata.creationTime,
        //     email: result.email!,
        //     id: result.uid,
        //     ));

        // set user as authenticated
        state = Authenticated(user: result);

        // go to next step
        Get.offAndToNamed("/");
      }
    } catch (e) {
      error.value = e as String;
      Get.snackbar("Error", error.value);
    }
  }

  // login using email & password
  void signInUserWithEmailAndPassword() async {
    try {
      state = AuthenticationLoading();

      final result =
          await authService.signInUserWithEmailAndPassword(email, password);

      if (result != null && result.emailVerified) {
        state = Authenticated(user: result);
      } else if (result != null) {
        state = UnVerifiedEmail(authService: authService);
      }

      Get.offAndToNamed("/");
    } catch (e) {
      error.value = e as String;
      Get.snackbar("Error", error.value);
    }
  }

  // google sing up & login
  void signInWithGoogle() async {
    try {
      final UserCredential result = await authService.signInWithGoogle();

      ParseModelUsers model = ParseModelUsers.getUserModel(
        email: result.user!.email!,
        uid: result.user!.uid,
        displayName: result.user!.displayName,
        photoURL: result.user!.photoURL,
      );

      bool userExist = await userRepository.checkIfDocExists(model.id);
      if (userExist == false) {
        // create user
        await userRepository.add(model);
      } else {
        // update user
        // userRepository.edit(
        //     UserModel(
        //       username: result.additionalUserInfo!.username,
        //     ),
        //     result.user!.uid);
      }
      // set user as authenticated
      state = Authenticated(user: result.user!);
    } on PlatformException catch (error) {
      Get.snackbar("Error", 'Login Failure!',
          snackPosition: SnackPosition.BOTTOM);
      // print(error);
    } catch (err) {
      Get.snackbar("Error", error.value);
    }
  }

  // sign out
  void signOut() async {
    try {
      authService.signOut().then((value) => state = UnAuthenticated());

      Get.offAndToNamed("/");
    } catch (e) {
      error.value = e as String;
      Get.snackbar("Error", error.value);
    }
  }

  sendResetPassword() {
    authService.sendPasswordResetMail(email);
    Get.toNamed("/");
  }

  resetPassword() {
    authService.changePassword(password);
  }

  onForgotPassword() {
    Get.toNamed("/forgot/password");
  }

  navigateToCreateAccount() {
    Get.toNamed("/register");
  }

  navigateToLogin() {
    Get.toNamed("/login");
  }

  togglePasswordStatus() {
    obscureText.value = !this.obscureText.value;
  }
}
