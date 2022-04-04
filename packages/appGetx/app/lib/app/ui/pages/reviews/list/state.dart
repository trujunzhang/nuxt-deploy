import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class ReviewListState {
  FirebaseController firebaseController = Get.find();

  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  listenChanged(ReviewType reviewType, String relatedId) {
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = firebaseController.reviewsList
          .filterReviewsList(relatedId, reviewType);
    });
  }

  fetchData(ReviewType reviewType, String relatedId) {
    // List
    reviewsList.value =
        firebaseController.reviewsList.filterReviewsList(relatedId, reviewType);
  }
}
