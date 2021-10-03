import 'package:fluro/fluro.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'fb/fb_photos_grid_view.dart';
import 'sql/sql_photos_grid_view.dart';

class PhotoListRouter implements IRouterProvider {
  static String localPhotoGridPage = '/localPhoto/grid';
  static String onlinePhotoGridPage = '/onlinePhoto/grid';

  @override
  void initRouter(FluroRouter router) {
    // Local
    router.define(localPhotoGridPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      return SqlPhotosGridView();
    }));
    // Online
    router.define(onlinePhotoGridPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final PhotoType photoType = stringToPhotoType(params[ParamsHelper.PHOTO_TYPE]!.first);
      final String relatedId = params[ParamsHelper.RELATED_ID]!.first;
      return FBPhotosGridView(
        photoType: photoType,
        relatedId: relatedId,
      );
    }));
  }
}
