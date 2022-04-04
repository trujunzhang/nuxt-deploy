import 'package:get/get.dart';

class AppController extends GetxController {
  // var for automatically start collecting data
  // late FirebaseAnalytics analytics;
  var isLoadWelcomePage = true.obs;

  @override
  onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    startCountdownTimer();
  }

  // 展示欢迎页，倒计时1.5秒之后进入应用
  Future startCountdownTimer() async {
    await Future.delayed(const Duration(milliseconds: 2500), () {
      isLoadWelcomePage.value = false;
    });
  }
}
