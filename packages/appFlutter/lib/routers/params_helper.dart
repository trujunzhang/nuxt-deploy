import 'package:ieatta/camera/screens/edit_photo_router.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/src/screens/photos_grid/photo_router.dart';
import 'package:ieatta/src/screens/reviews/review_router.dart';

class ParamsHelper {
  static const String ID = 'id';
  static const String RESTAURANT_ID = 'restaurantId';
  static const String REVIEW_TYPE = 'reviewType';
  static const String RELATED_ID = 'relatedId';

  // For photo
  static const String IMG_PATH = 'imgPath';
  static const String PHOTO_TYPE = 'photoType';

  // Reviews
  static String getNewReviewPath({required ReviewType reviewType, required String relatedId}) {
    return '${EditRouter.newReviewPage}?${ParamsHelper.REVIEW_TYPE}=${reviewTypeToString(reviewType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  static String getReviewListPath({required ReviewType reviewType, required String relatedId}) {
    return '${ReviewRouter.reviewListPage}?${ParamsHelper.REVIEW_TYPE}=${reviewTypeToString(reviewType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  // Photos
  static String getNewPhotoPath({required PhotoType photoType, required String relatedId, required String imgPath}) {
    return '${EditPhotoRouter.newPhotoPage}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId&${ParamsHelper.IMG_PATH}=$imgPath';
  }

  // Photos online grid view
  static String getOnlinePhotoGridViewPath({
    required PhotoType photoType,
    required String relatedId,
  }) {
    return '${PhotoListRouter.onlinePhotoGridPage}?${ParamsHelper.PHOTO_TYPE}=${photoTypeToString(photoType)}&${ParamsHelper.RELATED_ID}=$relatedId';
  }

  // User pages
  static String getUserPagesPath({
    required String routePath,
    required String userId,
  }) {
    return '$routePath?${ParamsHelper.ID}=$userId';
  }
}
