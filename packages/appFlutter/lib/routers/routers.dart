import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/edit_photo_router.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/not_found_page.dart';
import 'package:ieatta/src/layout/layout_router.dart';
import 'package:ieatta/src/screens/details/detail_router.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/src/screens/photos_grid/photo_router.dart';
import 'package:ieatta/src/screens/reviews/review_router.dart';
import 'package:ieatta/src/screens/user_profile/user_profile_router.dart';

class Routes {
  static String home = '/home';

  static final List<IRouterProvider> _listRouter = [];

  static final FluroRouter router = FluroRouter();

  static void initRoutes() {
    /// 指定路由跳转错误返回页
    router.notFoundHandler = Handler(handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      debugPrint('未找到目标页');
      return const NotFoundPage();
    });

    // router.define(home, handler: Handler(
    //   handlerFunc: (BuildContext? context, Map<String, List<String>> params) => const Home()));

    _listRouter.clear();

    /// 各自路由由各自模块管理，统一在此添加初始化
    _listRouter.add(LayoutRouter());
    _listRouter.add(DetailRouter());
    _listRouter.add(EditRouter());
    _listRouter.add(PhotoListRouter());
    _listRouter.add(ReviewRouter());
    _listRouter.add(EditPhotoRouter());
    _listRouter.add(UserProfileRouter());

    /// 初始化路由
    void initRouter(IRouterProvider routerProvider) {
      routerProvider.initRouter(router);
    }

    _listRouter.forEach(initRouter);
  }
}
