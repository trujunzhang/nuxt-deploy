part of './app_pages.dart';

abstract class Routes {
  static const INITIAL = '/';
  static const HOME = '/home';

  // Restaurant
  static const DETAIL_RESTAURANT = '/detail/restaurant';
  static const EDIT_RESTAURANT = '/edit/restaurant';
  static const RESTAURANT_MAP = '/map/restaurant';

  // Event
  static const DETAIL_EVENT = '/detail/event';
  static const EDIT_EVENT = '/edit/event';

  // PeopleInEvent
  static const DETAIL_PEOPLE_IN_EVENT = '/detail/peopleinevent';

  // Recipe
  static const DETAIL_RECIPE = '/detail/recipe';
  static const EDIT_RECIPE = '/edit/recipe';

  // Photo List
  static const LOCAL_PHOTO_GRID = '/local/photo/grid';
  static const ONLINE_PHOTO_GRID = '/online/photo/grid';
  static const ONLINE_PHOTO_PAGE = '/online/photo/page';

  // Review
  static const REVIEWS_LIST = '/review/list';
  static const DETAIL_REVIEW = '/detail/review';
  static const EDIT_REVIEW = '/edit/review';

  // User Profile
  static const USER_PROFILE = '/user';
  static const EDIT_USER = '/edit/user';

  // Take camera
  static const TAKE_CAMERA = '/take/camera';

  // Photo
  static const NEW_PHOTO = '/new/photo';
  static const EDIT_PHOTO = '/edit/photo';

  // Select
  static const SELECT_PERSON = '/select/person';
  static const SELECT_WAITER = '/select/waiter';
  static const SELECT_RECIPE = '/select/recipe';
}
