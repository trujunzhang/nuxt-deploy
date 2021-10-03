import 'dart:async';

import 'package:get/get.dart';
import 'package:ieatta/app/data/services/authentification.service.dart';

class VerifyEmailController extends GetxController {
  final AuthentificationService authService;

  VerifyEmailController({required this.authService})
      : assert(authService != null);

  get email => this.authService.user!.email;

  // countdown to resend mail
  RxInt _countDown = 0.obs;

  get countDown => this._countDown.value;

  RxBool _busy = RxBool(false);

  get busy => this._busy.value;

  // change time to reload user here
  Duration timeToReloadUser = Duration(seconds: 10);

  // function to allow button resend mail
  // Rx<Function> sendMailFunc = Rx<Function>(null);
  Rx<Function> sendMailFunc = Rx<Function>(() {});

  @override
  void onInit() {
    this.sendMail();

    this.sendMailFunc.value = this.timerFunction();

    // check user is verfied
    // every 10 seconds
    new Timer.periodic(timeToReloadUser, (timer) => this.reload(timer));

    super.onInit();
  }

  reload(Timer timer) {
    print("reload....");

    // email verification can't be listend to
    this.authService.reloadUser();

    if (this.authService.isVerifiedEmail()) {
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
      this.sendMail();

      this._countDown.value = 60;

      // disable resend
      // this.sendMailFunc.value = null;
      this.sendMailFunc.value = () {};

      // set timer
      new Timer.periodic(
        Duration(seconds: 1),
        (Timer timer) {
          if (this._countDown.value == 0) {
            // stop the function
            timer.cancel();
          } else {
            this._countDown.value--;
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
