import 'package:fluro/fluro.dart';
import 'package:ieatta/routers/i_router.dart';

import 'splash/splash_screen.dart';

class CoreRouter implements IRouterProvider {
  static String loginPage = '/login';
  static String registerPage = '/login/register';
  static String smsLoginPage = '/login/smsLogin';
  static String resetPasswordPage = '/login/resetPassword';
  static String updatePasswordPage = '/login/updatePassword';
  static String splashPage = '/splash';

  @override
  void initRouter(FluroRouter router) {
    // router.define(loginPage, handler: Handler(handlerFunc: (_, __) => const LoginPage()));
    // router.define(registerPage, handler: Handler(handlerFunc: (_, __) => const RegisterPage()));
    // router.define(smsLoginPage, handler: Handler(handlerFunc: (_, __) => const SMSLoginPage()));
    // router.define(resetPasswordPage, handler: Handler(handlerFunc: (_, __) => const ResetPasswordPage()));
    // router.define(updatePasswordPage, handler: Handler(handlerFunc: (_, __) => const UpdatePasswordPage()));

    router.define(splashPage, handler: Handler(handlerFunc: (_, __) => SplashScreen()));
  }
}