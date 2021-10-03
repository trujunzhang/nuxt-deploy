import 'package:fluro/fluro.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'edit/create_photo_provider_screen.dart';
import 'edit/edit_photo_provider_screen.dart';

class EditPhotoRouter implements IRouterProvider {
  static String newPhotoPage = '/new/photo';
  static String editPhotoPage = '/edit/photo';

  @override
  void initRouter(FluroRouter router) {
    // Photo
    router.define(newPhotoPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String imgPath = params[ParamsHelper.IMG_PATH]!.first;
      final PhotoType photoType = stringToPhotoType(params[ParamsHelper.PHOTO_TYPE]!.first);
      final String relatedId = params[ParamsHelper.RELATED_ID]!.first;
      return CreatePhotoProviderScreen(
        imgPath: imgPath,
        photoType: photoType,
        relatedId: relatedId,
      );
    }));
    router.define(editPhotoPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String editId = params[ParamsHelper.ID]!.first;
      return EditPhotoProviderScreen(
        photoId: editId,
      );
    }));
  }
}
