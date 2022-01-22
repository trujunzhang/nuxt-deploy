import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class ReviewListState {
  FirebaseController firebaseController = Get.find();

  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  listenChanged(ReviewType reviewType, String relatedId) {
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance.getReviewsList(
          firebaseController.reviewsList, relatedId, reviewType);
    });
  }

  fetchData(ReviewType reviewType, String relatedId) {
    // List
    reviewsList.value = FilterModels.instance
        .getReviewsList(firebaseController.reviewsList, relatedId, reviewType);
  }
}
