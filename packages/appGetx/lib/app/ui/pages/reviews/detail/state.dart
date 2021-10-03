import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailReviewState {
  FirebaseController firebaseController = Get.find();

  Rx<ParseModelReviews?> _review = Rx<ParseModelReviews?>(null);

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
