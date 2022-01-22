import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailReviewState {
  FirebaseController firebaseController = Get.find();

  final Rx<ParseModelReviews?> _review = Rx<ParseModelReviews?>(null);

  ParseModelReviews? get detailModel => _review.value;

  void fetchData(String reviewId) {
    _review.value = FilterModels.instance
        .getSingleReview(firebaseController.reviewsList, reviewId);
  }

  listenChanged(String reviewId) {
    firebaseController.onReviewsChanged((value) {
      _review.value = FilterModels.instance
          .getSingleReview(firebaseController.reviewsList, reviewId);
    });
  }
}
