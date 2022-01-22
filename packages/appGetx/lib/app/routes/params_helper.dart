
import 'package:getx_firebase/getx_firebase.dart';

import 'app_pages.dart';

class ParamsHelper {
  static const String ID = 'id';
  static const String IS_NEW = 'new';
  static const String RESTAURANT_ID = 'restaurantId';
  static const String EVENT_ID = 'eventId';
  static const String PEOPLE_IN_EVENT_ID = 'peopleineventId';
  static const String REVIEW_TYPE = 'reviewType';
  static const String RELATED_ID = 'relatedId';

  // For Drawer's menu
  static const String MENU_ARROW = 'menuarrow';
  static const String MENU_ARROW_TAG = 'drawer';

  // For photo pageview
  static const String SELECTED_INDEX = 'selected_index';
  static const String PHOTOS_LIST = 'photos_list';

  // For photo
  static const String IMG_PATH = 'imgPath';
  static const String PHOTO_TYPE = 'photoType';

  // PageView(online)
  static String getOnlinePageViewPath(int selectedIndex,
      {required PhotoType photoType, required String relatedId}) {
    return '${Routes.ONLINE_PHOTO_PAGE}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId&${ParamsHelper.SELECTED_INDEX}=$selectedIndex';
  }

  // Reviews
  static String getNewReviewPath(
      {required ReviewType reviewType, required String relatedId}) {
    return '${Routes.EDIT_REVIEW}?${ParamsHelper.REVIEW_TYPE}=${reviewTypeToString(reviewType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  static String getReviewListPath(
      {required ReviewType reviewType, required String relatedId}) {
    return '${Routes.REVIEWS_LIST}?${ParamsHelper.REVIEW_TYPE}=${reviewTypeToString(reviewType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  // Photos
  static String getTakeCameraPath(
      {required PhotoType photoType, required String relatedId}) {
    return '${Routes.TAKE_CAMERA}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  static String getNewPhotoPath(
      {required PhotoType photoType,
      required String relatedId,
      required String imgPath}) {
    return '${Routes.NEW_PHOTO}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId&${ParamsHelper.IMG_PATH}=$imgPath';
  }

  // Photos online grid view
  static String getOnlinePhotoGridViewPath({
    required PhotoType photoType,
    required String relatedId,
  }) {
    return '${Routes.ONLINE_PHOTO_GRID}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  // User pages
  static String getUserPagesPath({
    required String routePath,
    required String userId,
  }) {
    return '$routePath?${ParamsHelper.ID}=$userId';
  }
}
