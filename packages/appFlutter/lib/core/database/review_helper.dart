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
  static onSaveReviewAfterHook(String restaurantId, double lastReviewRate,
      double selectedStar,bool isNew) async {
    var restaurant = await FirestoreService.instance.getData(
      path: FirestorePath.restaurant(restaurantId),
      builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
    );
    int nextRate = restaurant.rate - lastReviewRate.round() + selectedStar.round();
    restaurant.rate = nextRate;
    restaurant.reviewCount = restaurant.reviewCount + (isNew ? 1 : 0);

    await FirestoreService.instance.setData(
        path: FirestorePath.restaurant(restaurantId), data: restaurant.toMap());
  }
}
