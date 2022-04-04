import 'package:get/get.dart';
import 'package:app_models/app_models.dart';
import '../data/repository/index.dart';

class FirebaseController extends GetxController {
  // Restaurants
  final RestaurantRepository restaurantRepository =
      RestaurantRepository.getInstance();
  final RxList<ParseModelRestaurants> _restaurants =
      RxList<ParseModelRestaurants>([]);

  List<ParseModelRestaurants> get restaurantsList => _restaurants;

  // User
  final UserRepository userRepository = UserRepository.getInstance();
  final RxList<ParseModelUsers> _users = RxList<ParseModelUsers>([]);

  List<ParseModelUsers> get usersList => _users;

  // Photos
  final PhotoRepository photoRepository = PhotoRepository.getInstance();
  final RxList<ParseModelPhotos> _photos = RxList<ParseModelPhotos>([]);

  List<ParseModelPhotos> get photosList => _photos;

  // Reviews
  final ReviewRepository reviewRepository = ReviewRepository.getInstance();
  final RxList<ParseModelReviews> _reviews = RxList<ParseModelReviews>([]);

  List<ParseModelReviews> get reviewsList => _reviews;

  // Events
  final EventRepository eventRepository = EventRepository.getInstance();
  final RxList<ParseModelEvents> _events = RxList<ParseModelEvents>([]);

  List<ParseModelEvents> get eventsList => _events;

  // Recipes
  final RecipeRepository recipeRepository = RecipeRepository.getInstance();
  final RxList<ParseModelRecipes> _recipes = RxList<ParseModelRecipes>([]);

  List<ParseModelRecipes> get recipesList => _recipes;

  // peopleInEvents
  final PeopleInEventsRepository peopleInEventsRepository =
      PeopleInEventsRepository.getInstance();
  final RxList<ParseModelPeopleInEvent> _peopleInEvents =
      RxList<ParseModelPeopleInEvent>([]);

  List<ParseModelPeopleInEvent> get peopleInEventsList => _peopleInEvents.value;

  @override
  void onInit() {
    //stream coming from firebase
    _restaurants.bindStream(restaurantRepository.getStreamAll());
    _users.bindStream(userRepository.getStreamAll());
    _photos.bindStream(photoRepository.getStreamAll());
    _reviews.bindStream(reviewRepository.getStreamAll());
    _events.bindStream(eventRepository.getStreamAll());
    _recipes.bindStream(recipeRepository.getStreamAll());
    _peopleInEvents.bindStream(peopleInEventsRepository.getStreamAll());

    super.onInit();
  }

  onRestaurantsChanged(fn) {
    ever(_restaurants, fn);
  }

  onUsersChanged(fn) {
    ever(_users, fn);
  }

  onPhotosChanged(fn) {
    ever(_photos, fn);
  }

  onReviewsChanged(fn) {
    ever(_reviews, fn);
  }

  onEventsChanged(fn) {
    ever(_events, fn);
  }

  onRecipesChanged(fn) {
    ever(_recipes, fn);
  }

  onPeopleInEventsChanged(fn) {
    ever(_peopleInEvents, fn);
  }
// on sChange(fn) {
//   ever(_, fn);
// }
}
