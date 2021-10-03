import 'package:fluro/fluro.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'detail/review_screen.dart';
import 'list/reviews_list_screen.dart';

class ReviewRouter implements IRouterProvider {
  static String reviewListPage = '/reviews';
  static String reviewDetailPage = '/review';

  @override
  void initRouter(FluroRouter router) {
    // Review list
    router.define(reviewListPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String reviewType = params[ParamsHelper.REVIEW_TYPE]!.first;
      final String relatedId = params[ParamsHelper.RELATED_ID]!.first;
      return ReviewsListScreen(
        reviewType: stringToReviewType(reviewType),
        relatedId: relatedId,
      );
    }));
    // Review details
    router.define(reviewDetailPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return ReviewScreen(
        reviewId: detailId,
      );
    }));
  }
}
