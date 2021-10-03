import 'package:fluro/fluro.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'event/event_provider_screen.dart';
import 'recipe/recipe_provider_screen.dart';
import 'restaurant/restaurant_provider_screen.dart';
import 'review/review_provider_screen.dart';
import 'user/edit_user_screen.dart';

class EditRouter implements IRouterProvider {
  static String newRestaurantPage = '/new/restaurant';
  static String editRestaurantPage = '/edit/restaurant';
  static String newEventPage = '/new/event';
  static String editEventPage = '/edit/event';
  static String newRecipePage = '/new/recipe';
  static String editRecipePage = '/edit/recipe';
  static String newReviewPage = '/new/review';
  static String editReviewPage = '/edit/review';
  static String editUserPage = '/edit/user';

  @override
  void initRouter(FluroRouter router) {
    // Restaurant
    router.define(newRestaurantPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      return CreateEditRestaurantProviderScreen(isNew: true);
    }));
    router.define(editRestaurantPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String editId = params[ParamsHelper.ID]!.first;
      return CreateEditRestaurantProviderScreen(restaurantId: editId, isNew: false);
    }));
    // Event
    router.define(newEventPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String restaurantId = params[ParamsHelper.RESTAURANT_ID]!.first;
      return CreateEditEventProviderScreen(restaurantId: restaurantId, isNew: true);
    }));
    router.define(editEventPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String editId = params[ParamsHelper.ID]!.first;
      final String restaurantId = params[ParamsHelper.RESTAURANT_ID]!.first;
      return CreateEditEventProviderScreen(eventId: editId, restaurantId: restaurantId, isNew: false);
    }));

    // Recipe
    router.define(newRecipePage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String restaurantId = params[ParamsHelper.RESTAURANT_ID]!.first;
      return CreateEditRecipeProviderScreen(restaurantId: restaurantId, isNew: true);
    }));

    router.define(editRecipePage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String editId = params[ParamsHelper.ID]!.first;
      final String restaurantId = params[ParamsHelper.RESTAURANT_ID]!.first;
      return CreateEditRecipeProviderScreen(recipeId: editId, restaurantId: restaurantId, isNew: false);
    }));
    // Review
    router.define(newReviewPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String reviewType = params[ParamsHelper.REVIEW_TYPE]!.first;
      final String relatedId = params[ParamsHelper.RELATED_ID]!.first;
      return CreateEditReviewProviderScreen(
          reviewType: stringToReviewType(reviewType), relatedId: relatedId, isNew: true);
    }));

    router.define(editReviewPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String editId = params[ParamsHelper.ID]!.first;
      return CreateEditReviewProviderScreen(reviewId: editId, isNew: false);
    }));
    // User
    router.define(editUserPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      return EditUserScreen();
    }));
  }
}
