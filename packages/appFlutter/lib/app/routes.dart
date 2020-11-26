import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/camera_screen/camera_screen.dart';
import 'package:ieatta/camera/screens/create_photo_screen.dart';
import 'package:ieatta/camera/screens/edit_photo_screen.dart';
import 'package:ieatta/core/ui/auth/register_screen.dart';
import 'package:ieatta/core/ui/auth/social_login.dart';
import 'package:ieatta/core/ui/setting/setting_screen.dart';
import 'package:ieatta/core/ui/splash/splash_screen.dart';
import 'package:ieatta/src/layout/navigation_home_screen.dart';
import 'package:ieatta/src/screens/edit/create_edit_restaurant_screen.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';
import 'package:ieatta/src/screens/edit/user/edit_user_screen.dart';
import 'package:ieatta/src/screens/map/restaurants_map_page.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_grid_view.dart';
import 'package:ieatta/src/screens/photos_grid/fb/fb_photos_pageview.dart';
import 'package:ieatta/src/screens/photos_grid/sql/sql_photos_grid_view.dart';
import 'package:ieatta/src/screens/photos_grid/sql/sql_photos_pageview.dart';
import 'package:ieatta/src/screens/restaurant_detail/restaurant_page.dart';
import 'package:ieatta/src/screens/review_detail/review_page.dart';
import 'package:ieatta/src/screens/user_profile/pages/user_photos.dart';
import 'package:ieatta/src/screens/user_profile/pages/user_restaurants.dart';
import 'package:ieatta/src/screens/user_profile/pages/user_reviews.dart';
import 'package:ieatta/src/screens/user_profile/user_detail.dart';

class Routes {
  Routes._(); //this is to prevent anyone from instantiate this object

  static const String splash = '/splash';
  static const String login = '/login';
  static const String register = '/register';
  static const String home = '/home';
  static const String setting = '/setting';

  // Restaurant
  static const String create_edit_restaurant = '/create_edit_restaurant';
  static const String detail_restaurant = '/detail_restaurant';
  static const String map_restaurant = '/map_restaurant';

  // Camera
  static const String app_camera = '/app_camera';

  // Photos
  static const String create_photo = '/create_photo';
  static const String edit_photo = '/edit_photo';
  static const String local_photos_gridview = '/local_photos_gridview';
  static const String local_photos_pageview = '/local_photos_pageview';
  static const String online_photos_gridview = '/online_photos_gridview';
  static const String online_photos_pageview = '/online_photos_pageview';

  // Review
  static const String create_edit_review = '/create_edit_review';
  static const String detail_review = '/detail_review';

  // User
  static const String detail_common_user = '/detail_common_user';
  static const String edit_user = '/edit_user';
  static const String user_restaurants= '/user_restaurants';
  static const String user_photos= '/user_photos';
  static const String user_reviews= '/user_reviews';

  static final routes = <String, WidgetBuilder>{
    splash: (BuildContext context) => SplashScreen(),
    // login: (BuildContext context) => SignInScreen(),
    login: (BuildContext context) => SocialLoginScreen(),
    register: (BuildContext context) => RegisterScreen(),
    home: (BuildContext context) => NavigationHomeScreen(),
    setting: (BuildContext context) => SettingScreen(),
    // Restaurant
    create_edit_restaurant: (BuildContext context) =>
        CreateEditRestaurantScreen(),
    detail_restaurant: (BuildContext context) => RestaurantDetail(),
    map_restaurant: (BuildContext context) => RestaurantsMapPage(),
    // Camera
    app_camera: (context) => CameraScreen(),
    // Photos
    create_photo: (context) => CreatePhotoScreen(),
    edit_photo: (context) => EditPhotoScreen(),
    local_photos_gridview: (context) => SqlPhotosGridView(),
    local_photos_pageview: (context) => SqlPhotosPageView(),
    online_photos_gridview: (context) => FBPhotosGridView(),
    online_photos_pageview: (context) => FBPhotosPageView(),
    // Review
    create_edit_review: (context) => CreateEditReviewScreen(),
    detail_review: (context) => ReviewPage(),
    // User
    detail_common_user: (context) => UserDetail(),
    edit_user: (context) => EditUserScreen(),
    user_restaurants: (context) => UserRestaurants(),
    user_photos: (context) => UserPhotos(),
    user_reviews: (context) => UserReviews(),
  };
}
