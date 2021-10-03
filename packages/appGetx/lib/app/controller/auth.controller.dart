import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/Users.dart';
import 'package:ieatta/app/data/model/auth_user_model.dart';
import 'package:ieatta/app/data/repository/user.repository.dart';
import 'package:ieatta/app/data/services/authentification.service.dart';
import 'package:ieatta/app/helpers/authentication_state.dart';

class AuthController extends GetxController {
  // initialize variables
  RxString _email = ''.obs;
  RxString _password = ''.obs;
  RxString error = RxString('');

  RxBool busy = RxBool(false);
  RxBool obscureText = RxBool(true);

  // GETTERS & SETTERS
  set email(value) => this._email.value = value;

  get email => this._email.value;

  set password(value) => this._password.value = value;

  get password => this._password.value;

  // initialize services
  final AuthentificationService authService = AuthentificationService();
  final UserRepository userRepository = UserRepository.getInstance();

  Rx<AuthenticationState> _authenticationStateStream =
      AuthenticationState().obs;

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

    // Update Firebase's user's name.
    await user!.updateDisplayName(displayName);
  }

  updateFirebaseUserPhoto(String photo) async {
    final user = authService.user;

    // Update Firebase's user's name.
    await user!.updatePhotoURL(photo);
  }

  @override
  onInit() {
    this._getAuthenticatedUser();
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

      final result = await this
          .authService
          .createUserWithEmailAndPassword(email, password);

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

      final result = await this
          .authService
          .signInUserWithEmailAndPassword(email, password);

      if (result != null && result.emailVerified)
        state = Authenticated(user: result);
      else if (result != null)
        state = UnVerifiedEmail(authService: authService);

      Get.offAndToNamed("/");
    } catch (e) {
      error.value = e as String;
      Get.snackbar("Error", error.value);
    }
  }

  // google singup & login
  void signInWithGoogle() async {
    try {
      final result = await this.authService.signInWithGoogle();

      if (result.additionalUserInfo!.isNewUser) {
        // create user
        this.userRepository.add(ParseModelUsers.getUserModel(
            email: result.user!.email!,
            uid: result.user!.uid,
            displayName: result.additionalUserInfo!.username,
            photoURL: result.user!.photoURL));
      } else {
        // update user
        // this.userRepository.edit(
        //     UserModel(
        //       username: result.additionalUserInfo!.username,
        //     ),
        //     result.user!.uid);
      }
      // set user as authenticated
      state = Authenticated(user: result.user!);
    } on PlatformException catch (error) {
      print(error);
    } catch (err) {
      Get.snackbar("Error", error.value);
    }
  }

  // sign out
  void signOut() async {
    try {
      this.authService.signOut().then((value) => state = UnAuthenticated());

      Get.offAndToNamed("/");
    } catch (e) {
      error.value = e as String;
      Get.snackbar("Error", error.value);
    }
  }

  sendResetPassword() {
    this.authService.sendPasswordResetMail(email);
    Get.toNamed("/");
  }

  resetPassword() {
    this.authService.changePassword(password);
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
    this.obscureText.value = !this.obscureText.value;
  }
}
