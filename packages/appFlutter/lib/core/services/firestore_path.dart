/*
This class defines all the possible read/write locations from the Firestore database.
In future, any new path can be added here.
This class work together with FirestoreService and FirestoreDatabase.
 */

class FirestorePath {
  static String todo(String uid, String todoId) => 'users/$uid/todos/$todoId';

  // Users
  static String allUsers() => 'users';

  static String singleUser(String userId) => 'users/$userId';

  // Restaurants
  static String singleRestaurant(String restaurantId) => 'restaurants/$restaurantId';

  // Recipes
  static String recipes(String restaurantId) => 'restaurants/$restaurantId/recipes';

  // Events
  static String events(String restaurantId) => 'restaurants/$restaurantId/events';
  static String singleEvent(String restaurantId,String eventId) => 'restaurants/$restaurantId/events/$eventId';

  // Waiters
  static String waiters(String restaurantId) => 'restaurants/$restaurantId/waiters';

  // PeopleInEvents
  static String peopleInEvents(String restaurantId, String eventId) =>
      'restaurants/$restaurantId/events/$eventId/peopleinevents';
  static String singlePeopleInEvent(String restaurantId,String eventId, String peopleInEventId) => 'restaurants/$restaurantId/events/$eventId/peopleinevents/$peopleInEventId';

  // Photos
  static String photosInRestaurant(String restaurantId) =>
      'restaurants/$restaurantId/photos';

  static String photosInRecipe(String restaurantId,String recipeId) =>
      'restaurants/$restaurantId/recipes/$recipeId/photos';

  // Reviews
  static String reviewsInRestaurant(String restaurantId) =>
      'restaurants/$restaurantId/reviews';

  static String reviewsInEvent(String restaurantId, String eventId) =>
      'restaurants/$restaurantId/events/$eventId/reviews';

  static String reviewsInRecipe(String restaurantId, String recipeId) =>
      'restaurants/$restaurantId/recipes/$recipeId/reviews';

  static String review(String uniqueId) => 'reviews/$uniqueId';

  static String photo(String uniqueId) => 'photos/$uniqueId';

  static String user(String id) => 'users/$id';

  static String todos(String uid) => 'users/$uid/todos';
}
