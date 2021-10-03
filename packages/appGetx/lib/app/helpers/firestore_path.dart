/*
This class defines all the possible read/write locations from the Firestore database.
In future, any new path can be added here.
This class work together with FirestoreService and FirestoreDatabase.
 */

class FirestorePath {
  static String todo(String uid, String todoId) => 'users/$uid/todos/$todoId';

  // Users
  static String singleUser(String userId) => 'users/$userId';

  // Restaurants
  static String singleRestaurant(String restaurantId) =>
      'restaurants/$restaurantId';

  // Recipes
  static String recipes() => 'recipes';

  static String singleRecipe(String recipeId) => 'recipes/$recipeId';

  // Events
  static String events(String restaurantId) =>
      'restaurants/$restaurantId/events';

  static String singleEvent(String eventId) => 'events/$eventId';

  // Waiters
  static String waiters(String restaurantId) =>
      'restaurants/$restaurantId/waiters';

  // PeopleInEvents
  static String peopleInEvents(String restaurantId, String eventId) =>
      'restaurants/$restaurantId/events/$eventId/peopleinevents';

  static String singlePeopleInEvent(String peopleInEventId) =>
      'peopleinevents/$peopleInEventId';

  // Photos
  static String photosInRestaurant(String restaurantId) =>
      'restaurants/$restaurantId/photos';

  static String photosInRecipe(String restaurantId, String recipeId) =>
      'restaurants/$restaurantId/recipes/$recipeId/photos';

  // Reviews
  static String singleReview(String reviewId) => 'reviews/$reviewId';

  static String review(String uniqueId) => 'reviews/$uniqueId';

  static String singlePhoto(String uniqueId) => 'photos/$uniqueId';

  static String user(String id) => 'users/$id';

  static String todos(String uid) => 'users/$uid/todos';
}
