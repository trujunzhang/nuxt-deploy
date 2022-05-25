import 'package:flutter/material.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:app_models/app_models.dart';
import 'package:mix/mix.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:doc_widget_app/const/resource.dart' as LocalResource;

class DocWidgetHelper {
  late ParseModelUsers user;
  late ParseModelRestaurants restaurant;
  late ParseModelEvents event;
  late ParseModelPeopleInEvent peopleInEvent;
  late ParseModelRecipes recipe;
  late ParseModelReviews review;
  late ParseModelPhotos waiter;
  late ParseModelPhotos photo;

  Future<void> setup() async {
    // =====================
    // Models
    // =====================

    user = ParseModelUsers.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_USER_JSON));
    restaurant = ParseModelRestaurants.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_RESTAURANT_JSON));
    event = ParseModelEvents.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_EVENT_JSON));
    peopleInEvent = ParseModelPeopleInEvent.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_PEOPLEINEVENT_JSON));
    recipe = ParseModelRecipes.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_RECIPE_JSON));
    review = ParseModelReviews.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_REVIEW_JSON));
    waiter = ParseModelPhotos.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_WAITER_JSON));
    photo = ParseModelPhotos.fromJson(
        await loadJsonObject(LocalResource.R.ASSETS_JSONS_PHOTO_JSON));
  }

  ///
  /// Example
  ///
  ElementPreview get button => ElementPreview(
        document: ButtonDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: Button(
              'Button',
              onPressed: () => debugPrint('Hello'),
            ),
            description: 'Default button.',
          ),
        ],
      );

  // Restaurant item
  ElementPreview get restaurantItem => ElementPreview(
        scrollDirection: Axis.horizontal,
        document: HotelListViewDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            width: 300,
            // This will show your widget and a description about.
            widget: HotelListView(
              restaurant: restaurant,
              onExpandIconTap: (iconExpand) => debugPrint('Hello'),
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Restaurant Item.',
          ),
          WidgetPreview(
            width: 300,
            // This will show your widget and a description about.
            widget: HotelListView(
              showThumbnail: false,
              showExpandIcon: true,
              restaurant: restaurant,
              onExpandIconTap: (iconExpand) => debugPrint('Hello'),
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Restaurant Item.',
          ),
        ],
      );

  // Event item
  ElementPreview get eventItem => ElementPreview(
        document: EventItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: EventItem(
              event: event,
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Event Item.',
          ),
        ],
      );

  // Menu item
  ElementPreview get menuItem => ElementPreview(
        document: OnMenuItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: OnMenuItem(
              recipe: recipe,
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Menu Item.',
          ),
        ],
      );

  // PeopleInEvent item
  ElementPreview get peopleInEventItem => ElementPreview(
        document: PeopleInEventItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: PeopleInEventItem(
              peopleInEvent: peopleInEvent,
              user: user,
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'PeopleInEvent Item.',
          ),
        ],
      );

  // Waiter item
  ElementPreview get waiterItem => ElementPreview(
        document: WaiterItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            width: 140,
            // This will show your widget and a description about.
            widget: WaiterItem(
              waiter: waiter,
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Waiter Item.',
          ),
        ],
      );

  // Recipe item
  ElementPreview get recipeItem => ElementPreview(
        document: RecipeItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: RecipeItem(
              recipe: recipe,
              onTapItem: () => debugPrint('Hello'),
            ),
            description: 'Recipe Item.',
          ),
        ],
      );

  // Review item
  ElementPreview get reviewItem => ElementPreview(
        document: ReviewItemDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: ReviewItem(
              review: review,
              showPreview: true,
              onUserItemTap: () => debugPrint('Hello'),
            ),
            description: 'Review Item.',
          ),
        ],
      );

  // Restaurant info
  ElementPreview get restaurantInfoItem => ElementPreview(
        document: RestaurantInfoPanelDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: RestaurantInfoPanel(
              restaurant: restaurant,
              onEditPressed: () => debugPrint('Hello'),

              /// action icon events.
              onNewEventIconPress: () => debugPrint('Hello'),
              onNewReviewButtonPress: () => debugPrint('Hello'),
              onSeeAllReviewsButtonPress: () => debugPrint('Hello'),
            ),
            description: 'Restaurant info.',
          ),
        ],
      );

  // Event info
  ElementPreview get eventInfoItem => ElementPreview(
        document: EventInfoPanelDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: EventInfoPanel(
              restaurant: restaurant,
              event: event,
              onEditPressed: () => debugPrint('Hello'),

              /// action icon events.
              onSelectPersonIconPress: (context) => debugPrint('Hello'),
              onNewReviewButtonPress: () => debugPrint('Hello'),
              onSeeAllReviewsButtonPress: () => debugPrint('Hello'),
            ),
            description: 'Event info.',
          ),
        ],
      );

  // PeopleInEvent info
  ElementPreview get peopleInEventInfoItem => ElementPreview(
        document: PeopleInEventInfoPanelDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: PeopleInEventInfoPanel(
              peopleInEvent: peopleInEvent,
              restaurant: restaurant,
              event: event,
              user: user,
              onSelectRecipesIconPress: () => debugPrint('Hello'),
            ),
            description: 'PeopleInEvent info.',
          ),
        ],
      );

  // Recipe info
  ElementPreview get recipeInfoItem => ElementPreview(
        document: RecipeInfoPanelDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: RecipeInfoPanel(
              recipe: recipe,
              onEditPressed: () => debugPrint('Hello'),

              /// action icon events.
              onNewReviewButtonPress: () => debugPrint('Hello'),
              onSeeAllReviewsButtonPress: () => debugPrint('Hello'),
            ),
            description: 'PeopleInEvent info.',
          ),
        ],
      );

  // Search toolbar
  ElementPreview get searchToolbarItem => ElementPreview(
        document: SearchToolbarDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: SearchToolbar(
              gpsTrackVal: true,
              toggleTrackStatus: () => debugPrint('Hello'),
            ),
            description: 'Search Toolbar.',
          ),
          WidgetPreview(
            // This will show your widget and a description about.
            widget: SearchToolbar(
              gpsTrackVal: false,
              toggleTrackStatus: () => debugPrint('Hello'),
            ),
            description: 'Search Toolbar.',
          ),
        ],
      );

  // Photo view
  ElementPreview get photoViewItem => ElementPreview(
        document: PhotoViewDocWidget(), // From generated file
        previews: [
          WidgetPreview(
            // This will show your widget and a description about.
            widget: PhotoView(
              photo: photo,
              onTapPhoto: () => debugPrint('Hello'),
            ),
            description: 'Photo View.',
          ),
        ],
      );
}
