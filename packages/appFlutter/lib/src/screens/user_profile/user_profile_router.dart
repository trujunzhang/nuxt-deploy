import 'package:fluro/fluro.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'pages/user_photos.dart';
import 'pages/user_restaurants.dart';
import 'pages/user_reviews.dart';
import 'user_detail.dart';

class UserProfileRouter implements IRouterProvider {
  static String commonUserPage = '/user';
  static String userRestaurantsPage = '/user/restaurants';
  static String userPhotosPage = '/user/photos';
  static String userReviewsPage = '/user/reviews';

  @override
  void initRouter(FluroRouter router) {
    // User
    router.define(commonUserPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return UserDetail(
        userId: detailId,
      );
    }));
    // pages
    router.define(userRestaurantsPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return UserRestaurants(
        userId: detailId,
      );
    }));
    router.define(userPhotosPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return UserPhotos(
        userId: detailId,
      );
    }));
    router.define(userReviewsPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return UserReviews(
        userId: detailId,
      );
    }));
  }
}
