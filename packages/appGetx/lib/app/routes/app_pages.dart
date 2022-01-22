import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/camera/camera_screen/index.dart';
import 'package:ieatta/app/ui/pages/camera/edit/index.dart';
import 'package:ieatta/app/ui/pages/camera/new/index.dart';
import 'package:ieatta/app/ui/pages/detail/event/index.dart';
import 'package:ieatta/app/ui/pages/detail/event/select_person/index.dart';
import 'package:ieatta/app/ui/pages/detail/event/select_waiter/index.dart';
import 'package:ieatta/app/ui/pages/detail/peopleInEvent/index.dart';
import 'package:ieatta/app/ui/pages/detail/peopleInEvent/select_recipe/index.dart';
import 'package:ieatta/app/ui/pages/detail/recipe/index.dart';
import 'package:ieatta/app/ui/pages/detail/restaurant/index.dart';
import 'package:ieatta/app/ui/pages/edit/event/index.dart';
import 'package:ieatta/app/ui/pages/edit/recipe/index.dart';
import 'package:ieatta/app/ui/pages/edit/restaurant/index.dart';
import 'package:ieatta/app/ui/pages/edit/review/index.dart';
import 'package:ieatta/app/ui/pages/edit/user/index.dart';
import 'package:ieatta/app/ui/pages/map/index.dart';
import 'package:ieatta/app/ui/pages/photos_grid/fb/gridview/index.dart';
import 'package:ieatta/app/ui/pages/photos_grid/fb/pageview/index.dart';
import 'package:ieatta/app/ui/pages/photos_grid/sql/gridview/index.dart';
import 'package:ieatta/app/ui/pages/reviews/detail/index.dart';
import 'package:ieatta/app/ui/pages/reviews/list/index.dart';
import 'package:ieatta/app/ui/pages/user_profile/index.dart';

import '../app.binding.dart';
import '../app.page.dart';

part './app_routes.dart';

class AppPages {
  static final pages = [
    GetPage(
      name: Routes.INITIAL,
      page: () => const AppPage(),
      binding: AppBinding(),
    ),
    // Restaurant
    GetPage(
      name: Routes.DETAIL_RESTAURANT,
      page: () => const DetailRestaurantPage(),
    ),
    GetPage(
      name: Routes.EDIT_RESTAURANT,
      page: () => const EditRestaurantPage(),
      binding: EditRestaurantBinding(),
    ),
    GetPage(
      name: Routes.RESTAURANT_MAP,
      page: () => const RestaurantsMapPage(),
      binding: RestaurantsMapBinding(),
    ),
    // Event
    GetPage(
      name: Routes.DETAIL_EVENT,
      page: () => const DetailEventPage(),
    ),
    GetPage(
      name: Routes.EDIT_EVENT,
      page: () => const EditEventPage(),
      binding: EditEventBinding(),
    ),
    // PeopleInEvent
    GetPage(
      name: Routes.DETAIL_PEOPLE_IN_EVENT,
      page: () => const DetailPeopleInEventPage(),
    ),
    // Recipe
    GetPage(
      name: Routes.DETAIL_RECIPE,
      page: () => const DetailRecipePage(),
    ),
    GetPage(
      name: Routes.EDIT_RECIPE,
      page: () => const EditRecipePage(),
      binding: EditRecipeBinding(),
    ),
    // Photo list
    GetPage(
      name: Routes.LOCAL_PHOTO_GRID,
      page: () => const SqlPhotosGridViewPage(),
      binding: SqlPhotosGridViewBinding(),
    ),
    GetPage(
      name: Routes.ONLINE_PHOTO_GRID,
      page: () => const FBPhotosGridViewPage(),
      binding: FBPhotosGridViewBinding(),
    ),
    GetPage(
      name: Routes.ONLINE_PHOTO_PAGE,
      page: () => const FBPhotosPageView(),
      binding: FBPhotosPageViewBinding(),
    ),
    // Reviews
    GetPage(
      name: Routes.REVIEWS_LIST,
      page: () => const ReviewListPage(),
    ),
    GetPage(
      name: Routes.DETAIL_REVIEW,
      page: () => const DetailReviewPage(),
      binding: DetailReviewBinding(),
    ),
    GetPage(
      name: Routes.EDIT_REVIEW,
      page: () => const EditReviewPage(),
      binding: EditReviewBinding(),
    ),
    // User Profile
    GetPage(
      name: Routes.USER_PROFILE,
      page: () => const UserProfilePage(),
    ),
    GetPage(
      name: Routes.EDIT_USER,
      page: () => const EditUserPage(),
      binding: EditUserBinding(),
    ),
    // Take camera
    GetPage(
      name: Routes.TAKE_CAMERA,
      page: () => const TakeCameraPage(),
      binding: TakeCameraBinding(),
    ),
    // Photo
    GetPage(
      name: Routes.NEW_PHOTO,
      page: () => const CreatePhotoPage(),
      binding: CreatePhotoBinding(),
    ),
    GetPage(
      name: Routes.EDIT_PHOTO,
      page: () => const EditPhotoPage(),
      binding: EditPhotoBinding(),
    ),
    // Select
    GetPage(
        name: Routes.SELECT_PERSON,
        page: () => const SelectPersonPage(),
        binding: SelectPersonBinding(),
        transition: Transition.downToUp),
    GetPage(
      name: Routes.SELECT_WAITER,
      page: () => const SelectWaiterPage(),
      binding: SelectWaiterBinding(),
    ),
    GetPage(
      name: Routes.SELECT_RECIPE,
      page: () => SelectRecipePage(),
      binding: SelectRecipeBinding(),
    ),
  ];
}
