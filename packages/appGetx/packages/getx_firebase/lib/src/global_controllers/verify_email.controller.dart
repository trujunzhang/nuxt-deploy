import 'dart:async';

import 'package:get/get.dart';
import '../data/services/authentification.service.dart';

class VerifyEmailController extends GetxController {
  final AuthentificationService authService;

  VerifyEmailController({required this.authService});

  get email => authService.user!.email;

  // countdown to resend mail
  final RxInt _countDown = 0.obs;

  get countDown => _countDown.value;

  final RxBool _busy = RxBool(false);

  get busy => _busy.value;

  // change time to reload user here
  Duration timeToReloadUser = const Duration(seconds: 10);

  // function to allow button resend mail
  // Rx<Function> sendMailFunc = Rx<Function>(null);
  Rx<Function> sendMailFunc = Rx<Function>(() {});

  @override
  void onInit() {
    sendMail();

    sendMailFunc.value = timerFunction();

    // check user is verfied
    // every 10 seconds
    Timer.periodic(timeToReloadUser, (timer) => reload(timer));

    super.onInit();
  }

  reload(Timer timer) {
    print("reload....");

    // email verification can't be listend to
    authService.reloadUser();

    if (authService.isVerifiedEmail()) {
      // do somthing if verified.....
      timer.cancel();
      Get.offAndToNamed("/");
    }
  }

  sendMail() async {
    if (await authService.sendEmailVerification()) {
      print("email have been sent");
    }
  }

  Future<bool> Function() timerFunction() {
    return () async {
      print("begin countDown...");
      // send email
      sendMail();

      _countDown.value = 60;

      // disable resend
      // sendMailFunc.value = null;
      sendMailFunc.value = () {};

      // set timer
      Timer.periodic(
        Duration(seconds: 1),
        (Timer timer) {
          if (_countDown.value == 0) {
            // stop the function
            timer.cancel();
          } else {
            _countDown.value--;
          }
        },
      );
      return true;
    };
  }

  @override
  void dispose() {
    super.dispose();
  }
}
