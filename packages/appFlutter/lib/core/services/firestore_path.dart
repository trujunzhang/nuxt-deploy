/*
This class defines all the possible read/write locations from the Firestore database.
In future, any new path can be added here.
This class work together with FirestoreService and FirestoreDatabase.
 */

class FirestorePath {
  static String todo(String uid, String todoId) => 'users/$uid/todos/$todoId';

  // Users
  static String allUsers() => 'users';

  // Restaurants
  static String restaurant(String uniqueId) => 'restaurants/$uniqueId';

  // Events
  static String events(String uniqueId) => 'restaurants/$uniqueId/events';

  // Photos
  static String photosInRestaurant(String uniqueId) => 'restaurants/$uniqueId/photos';

  // Reviews
  static String reviewsInRestaurant(String uniqueId) => 'restaurants/$uniqueId/reviews';

  static String review(String uniqueId) => 'reviews/$uniqueId';

  static String photo(String uniqueId) => 'photos/$uniqueId';

  static String user(String id) => 'users/$id';

  static String todos(String uid) => 'users/$uid/todos';
}
