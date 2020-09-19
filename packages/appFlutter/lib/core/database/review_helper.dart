import 'package:ieatta/core/services/firestore_path.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';

class ReviewReturnModel {
  final double rate;
  final String note;

  ReviewReturnModel(this.rate, this.note);
}

class ReviewHelper {
  static onSaveReviewAfterHook(String restaurantId, ParseModelReviews review,
      double selectedStar) async {
    bool isNew = review == null;
    var restaurant = await FirestoreService.instance.getData(
      path: FirestorePath.restaurant(restaurantId),
      builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
    );
    int lastReviewRate = (isNew ? 0 : review.rate);
    restaurant.rate = restaurant.rate - lastReviewRate + selectedStar.round();
    restaurant.reviewCount = restaurant.reviewCount + (isNew ? 1 : 0);

    await FirestoreService.instance.setData(
        path: FirestorePath.restaurant(restaurantId), data: restaurant.toMap());
  }
}
