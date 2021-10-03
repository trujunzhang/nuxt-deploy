import 'package:fluro/fluro.dart';
import 'package:ieatta/routers/i_router.dart';

import 'navigation_home_screen.dart';

class LayoutRouter implements IRouterProvider {
  static String homePage = '/home';

  @override
  void initRouter(FluroRouter router) {
    router.define(homePage, handler: Handler(handlerFunc: (_, __) => NavigationHomeScreen()));
  }
}
