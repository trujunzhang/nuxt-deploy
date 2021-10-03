import 'package:fluro/fluro.dart';
import 'package:ieatta/routers/i_router.dart';
import 'package:ieatta/routers/params_helper.dart';

import 'event/event_page.dart';
import 'peopleInEvent/peopleInEvent_page.dart';
import 'recipe/recipe_page.dart';
import 'restaurant/restaurant_page.dart';

class DetailRouter implements IRouterProvider {
  static String detailRestaurantPage = '/restaurant';
  static String detailEventPage = '/event';
  static String detailPeopleInEventPage = '/peopleInEvent';
  static String detailRecipePage = '/recipe';

  @override
  void initRouter(FluroRouter router) {
    // Restaurant
    router.define(detailRestaurantPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return RestaurantDetail(
        restaurantId: detailId,
      );
    }));
    // Event
    router.define(detailEventPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return EventDetail(
        eventId: detailId,
      );
    }));
    // PeopleInEvent
    router.define(detailPeopleInEventPage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return PeopleInEventDetail(
        peopleInEventId: detailId,
      );
    }));
    // Recipe
    router.define(detailRecipePage, handler: Handler(handlerFunc: (_, Map<String, List<String>> params) {
      final String detailId = params[ParamsHelper.ID]!.first;
      return RecipeDetail(
        recipeId: detailId,
      );
    }));
  }
}
