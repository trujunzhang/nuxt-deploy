import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class DetailReviewState {
  FirebaseController firebaseController = Get.find();

  final Rx<ParseModelReviews?> _review = Rx<ParseModelReviews?>(null);

  ParseModelReviews? get detailModel => _review.value;

  void fetchData(String reviewId) {
    _review.value = firebaseController.reviewsList.singleReview(reviewId);
  }

  listenChanged(String reviewId) {
    firebaseController.onReviewsChanged((value) {
      _review.value = firebaseController.reviewsList.singleReview(reviewId);
    });
  }
}
